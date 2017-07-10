import {
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAIL,
  FETCH_ITEMS_REQUEST
} from '../constants/actionTypes'
import {
  TYPE
} from '../constants/fetchItemTypes'

function fetchTypesRequest (dispatch) {
  dispatch({ type: FETCH_ITEMS_REQUEST, itemType: TYPE })
  return fetch(`/type/`)
}

export function fetchTypes () {
  return dispatch => {
    return fetchTypesRequest(dispatch)
      .then(response => response.json())
      .then(json => {
        const { results } = json

        const poke = 'http://pokeapi.co/api/v2/type/'

        const modify = results.map(item => ({
          name: item.name,
          type: item.url.replace(poke, '').replace('/', '')
        }))

        dispatch({
          type: FETCH_ITEMS_SUCCESS,
          payload: modify,
          itemType: TYPE
        })
      })
      .catch((e) => {
        console.log(e)
        dispatch({ type: FETCH_ITEMS_FAIL, itemType: TYPE })
      })
  }
}
