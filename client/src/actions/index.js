// action creators
import streams from '../api/streams'
import {
  SIGN_IN,
  SIGN_OUT,
  STREAM_CREATE,
  STREAMS_LIST,
  STREAM_EDIT,
  STREAM_DELETE,
  STREAM_GET
} from './types'
import history from '../history'

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}

export const streamCreate = formValues => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth
    const response = await streams.post('/streams', { ...formValues, userId })

    dispatch({
      type: STREAM_CREATE,
      payload: response.data
    })
    // programmatic navigation to get the user back to the root route
    history.push('/')
  }
}

export const streamsList = () => async dispatch => {
  const response = await streams.get('/streams')

  dispatch({
    type: STREAMS_LIST,
    payload: response.data
  })
}

export const streamGet = streamId => async dispatch => {
  const response = await streams.get(`/streams/${streamId}`)

  dispatch({
    type: STREAM_GET,
    payload: response.data
  })
}

export const streamEdit = (streamId, formValues) => async dispatch => {
  const response = await streams.patch(`/streams/${streamId}`, formValues)

  dispatch({
    type: STREAM_EDIT,
    payload: response.data
  })

  history.push('/')
}

export const streamDelete = streamId => async dispatch => {
  await streams.delete(`/streams/${streamId}`)
  dispatch({
    type: STREAM_DELETE,
    payload: streamId
  })
}
