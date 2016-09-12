import {
  COLLECTION_ADD,
  COLLECTION_REMOVE,
  COLLECTION_DOCUMENT_REPLACE,
  COLLECTION_DOCUMENT_ADD,
  COLLECTION_DOCUMENT_REMOVE,
  COLLECTION_DOCUMENT_CHANGE
} from './mutation-types'

export const collectionAdd = ({ dispatch }, collection) => {
  dispatch(COLLECTION_ADD, collection)
}

export const collectionRemove = ({ dispatch }, collection) => {
  dispatch(COLLECTION_REMOVE, collection)
}

export const collectionDocumentReplace = ({ dispatch }, packet) => {
  dispatch(COLLECTION_DOCUMENT_REPLACE, packet)
}

export const collectionDocumentAdd = ({ dispatch }, packet) => {
  dispatch(COLLECTION_DOCUMENT_ADD, packet)
}

export const collectionDocumentRemove = ({ dispatch }, packet) => {
  dispatch(COLLECTION_DOCUMENT_REMOVE, packet)
}

export const collectionDocumentChange = ({ dispatch }, packet) => {
  dispatch(COLLECTION_DOCUMENT_CHANGE, packet)
}
