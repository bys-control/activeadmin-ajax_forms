import _ from 'lodash'
import {
  COLLECTION_ADD,
  COLLECTION_REMOVE,
  COLLECTION_DOCUMENT_REPLACE,
  COLLECTION_DOCUMENT_ADD,
  COLLECTION_DOCUMENT_REMOVE,
  COLLECTION_DOCUMENT_CHANGE
} from './mutation-types'

let MongoID = window.MongoID

let processPacket = (state, packet) => {
  let mongoId, collection, docIndex, doc

  mongoId = MongoID.idParse(packet.id)
  collection = state[packet.collection]

  if (collection) {
    docIndex = _.findIndex(collection, doc => doc.id === mongoId)
    if (docIndex > 0) {
      doc = collection[docIndex]
    }
  }

  return {
    collection: collection,
    index: docIndex,
    doc: doc
  }
}

const mutations = {
  [COLLECTION_ADD]: function (state, collection) {
    // Creates collection it it doesn't exists
    if (!state[collection]) {
      state[collection] = []
    }
  },

  [COLLECTION_REMOVE]: function (state, collection) {
    console.log(COLLECTION_REMOVE)
  },

  [COLLECTION_DOCUMENT_REPLACE]: function (state, packet) {
    let data = processPacket(state, packet)

    if (!packet.replace) {
      if (data.doc) {
        data.collection.splice(data.index, 1)
      }
    } else if (!data.doc) {
      data.collection.insert(packet.replace)
    } else {
      // XXX check that replace has no $ ops
      _.extend(data.collection[data.index], packet.replace)
    }
  },

  [COLLECTION_DOCUMENT_ADD]: function (state, packet) {
    let data = processPacket(state, packet)

    if (data.doc) {
      throw new Error('Expected not to find a document already present for an add')
    }
    data.collection.push(_.extend({_id: data.mongoId}, packet.fields))
  },

  [COLLECTION_DOCUMENT_REMOVE]: function (state, packet) {
    let mongoId = MongoID.idParse(packet.id)
    let collection = state.collections[packet.collection]
    let docIndex = _.findIndex(collection, doc => doc._id === mongoId)
    let doc = collection[docIndex]

    if (!doc) {
      throw new Error('Expected to find a document already present for removed')
    }
    collection.splice(docIndex, 1)
  },

  [COLLECTION_DOCUMENT_CHANGE]: function (state, packet) {
    let mongoId = MongoID.idParse(packet.id)
    let collection = state.collections[packet.collection]
    let docIndex = _.findIndex(collection, doc => doc._id === mongoId)
    let doc = collection[docIndex]

    if (!doc) {
      throw new Error('Expected to find a document to change')
    }
    if (!_.isEmpty(packet.fields)) {
      _.each(packet.fields, function (value, key) {
        if (value === undefined) {
          _.unset(doc, key)
        } else {
          _.set(doc, key, value)
        }
      })
    }
  }
}

export default mutations
