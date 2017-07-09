import {
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAIL,
  FETCH_ITEMS_REQUEST,
  FETCH_INFO_SUCCESS,
  FETCH_INFO_FAIL,
  FETCH_INFO_REQUEST,
  SET_PER_PAGE,
  TOGGLE_TYPE,
  SET_PAGE
} from '../constants/actionTypes'
import {
  POKEMON,
  TYPE
} from '../constants/fetchItemTypes'
import store from '../store'

function fetchPokemons (dispatch) {
  const { currentPage, perPage, selectedType } = store.getState().app

  if (selectedType !== null) {
    dispatch({ type: FETCH_ITEMS_REQUEST, itemType: TYPE })
    return fetch(`/type/${selectedType}/?page=${currentPage}&limit=${perPage}`)
  } else {
    dispatch({ type: FETCH_ITEMS_REQUEST, itemType: POKEMON })
    return fetch(`/pokemon/?page=${currentPage}&limit=${perPage}`)
  }
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

export function fetchAllInfo (dispatch) {
  return fetchPokemons(dispatch)
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
        payload: modify,
        itemType: POKEMON
      })

      modify.map((item) => {
        if (typeof item.isLoading === 'undefined') {
          fetchInfo(dispatch, item.url)
        }
      })
    })
    .catch(() => dispatch({ type: FETCH_ITEMS_FAIL, itemType: POKEMON }))
}

export function changePageAndFetchPokemons (page) {
  return dispatch => {
    dispatch({ type: SET_PAGE, payload: page })
    return fetchAllInfo(dispatch)
  }
}

export function changePerPage (pp) {
  return dispatch => {
    dispatch({ type: SET_PER_PAGE, payload: pp })
    return fetchAllInfo(dispatch)
  }
}

export function toggleTypeAndFetchPokemons (type) {
  return dispatch => {
    dispatch({ type: TOGGLE_TYPE, payload: type })
    return fetchAllInfo(dispatch)
  }
}
