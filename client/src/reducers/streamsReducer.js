import _ from 'lodash'
import {
  STREAM_CREATE,
  STREAMS_LIST,
  STREAM_EDIT,
  STREAM_DELETE,
  STREAM_GET
} from '../actions/types'

export default (state = {}, action) => {
  const { type, payload } = action

  switch (type) {
    case STREAMS_LIST:
      // spread operator since mapKeys returns a Big object
      return { ...state, ..._.mapKeys(payload, 'id') }
    case STREAM_GET:
      return { ...state, [payload.id]: payload }
    case STREAM_CREATE:
      return { ...state, [payload.id]: payload }
    case STREAM_EDIT:
      return { ...state, [payload.id]: payload }
    case STREAM_DELETE:
      return _.omit(state, payload)
    default:
      return state
  }
}
