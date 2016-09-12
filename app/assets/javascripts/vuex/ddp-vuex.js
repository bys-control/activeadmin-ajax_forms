import {
  collectionAdd,
//  collectionRemove,
  collectionDocumentReplace,
  collectionDocumentAdd,
  collectionDocumentRemove,
  collectionDocumentChange
} from './modules/collections/actions'

let Meteor = window.Meteor

const syncCollectionToStore = (
  collection,
  store,
  collectionAlias = '') => {
  let ddpConnection = Meteor.connection
  const collectionName = collectionAlias || collection

  // If you try to registerStore for the same
  // collection on the same DDP connection, it will throw

  let ok = ddpConnection.registerStore(collection, {
    beginUpdate (batchSize, reset) {
      if (batchSize > 1 || reset) {
        // XXX: pauseObservers
        collectionAdd(store, collectionName)
      }
      // This happens when your server has restarted
      // and your publications are reset with new data.
      // This involves clearing your collection, and then
      // it'll get filled back up
      if (reset) {
        console.log('reset', reset)
        // dispatch(ddpAction('COLLECTION_RESET', { collection: collectionName }))
      }

      // Compared to minimongo, there's no need to pause
      // observers because of the way React works, so you won't
      // actually see a flicker (maybe?)!
    },

    update (msg) {
      const packet = { ...msg, collection: collectionName }
      if (packet.msg === 'replace') {
        console.log('packet replace', packet)
        collectionDocumentReplace(store, packet)
      } else if (packet.msg === 'added') {
        collectionDocumentAdd(store, packet)
      } else if (packet.msg === 'removed') {
        console.log('packet removed', packet)
        collectionDocumentRemove(store, packet)
      } else if (packet.msg === 'changed') {
        console.log('packet changed', packet)
        collectionDocumentChange(store, packet)
      } else {
        throw new Error("I don't know how to deal with this message")
      }
    },

    endUpdate () {
      // XXX: Resume observers
    },

    // In order for these functions to help us do optimistic
    // updates, the dispatched actions need to happen inside
    // the method definition, but this means we have to call on
    // the store in a global manner
    saveOriginals () {
      console.log('saveOriginals')
    },
    retrieveOriginals () {
      console.log('retrieveOriginals')
    },

    // Used to preserve current versions of documents across a store reset.
    getDoc: function (id) {
      console.log('getDoc')
    },

    // To be able to get back to the collection from the store.
    _getCollection: function () {
      console.log('getCollection')
    }
  })

  if (!ok) {
    const message = 'There is already a collection named "${name}"'
    console.warn ? console.warn(message) : console.log(message)
  }
}

export default syncCollectionToStore
