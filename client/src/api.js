import {
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAIL,
  FETCH_ITEMS_REQUEST,
  FETCH_INFO_SUCCESS,
  FETCH_INFO_FAIL,
  FETCH_INFO_REQUEST,
  SET_PAGE
} from './constants/actionTypes'

function fetchPokemons (dispatch, page) {
  dispatch({ type: FETCH_ITEMS_REQUEST })
  return fetch(`/pokemon/?page=${page}`)
}

function fetchInfo (dispatch, url) {
  dispatch({ type: FETCH_INFO_REQUEST, url })
  return fetch(url)
    .then(response => response.json())
    .then(
      res => dispatch({
        type: FETCH_INFO_SUCCESS,
        url,
        payload: res
      })
    )
    .catch(() => dispatch({ type: FETCH_INFO_FAIL, url }))
}

export function changePageAndFetchPokemons (page) {
  return dispatch => {
    dispatch({ type: SET_PAGE, payload: page })
    return fetchPokemons(dispatch, page)
      .then(response => response.json())
      .then(json => {
        const { count, results } = json

        const poke = 'http://pokeapi.co/api/v2'

        const modify = results.map(item => {
          return {
            ...item,
            url: item.url.replace(poke, '')
          }
        })

        dispatch({
          type: FETCH_ITEMS_SUCCESS,
          count,
          payload: modify
        })

        modify.map((item) => {
          fetchInfo(dispatch, item.url)
        })
      })
      .catch(() => dispatch({ type: FETCH_ITEMS_FAIL }))
  }
}
