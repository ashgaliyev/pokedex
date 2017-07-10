import {
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAIL,
  FETCH_ITEMS_REQUEST,
  FETCH_INFO_SUCCESS,
  FETCH_INFO_FAIL,
  FETCH_INFO_REQUEST,
  SET_PER_PAGE,
  TOGGLE_TYPE,
  SET_PAGE,
  RESET_SEARCH,
  SEARCH
} from '../constants/actionTypes'
import {
  POKEMON
} from '../constants/fetchItemTypes'
import store from '../store'
import {
  LOAD_FAILED
} from '../constants/loadState'

function fetchPokemons (dispatch) {
  const { currentPage, perPage, selectedType } = store.getState().app

  if (selectedType !== null) {
    dispatch({ type: FETCH_ITEMS_REQUEST, itemType: POKEMON })
    return fetch(`/type/${selectedType}/?page=${currentPage}&limit=${perPage}`)
  } else {
    dispatch({ type: FETCH_ITEMS_REQUEST, itemType: POKEMON })
    return fetch(`/pokemon/?page=${currentPage}&limit=${perPage}`)
  }
}

function searchPokemon (dispatch, name) {
  dispatch({ type: FETCH_INFO_REQUEST, itemType: POKEMON })
  return fetch(`/pokemon/${name}`)
    .then(response => response.json())
    .then(json => {
      if (typeof json.detail !== 'undefined') {
        if (json.detail === 'Not found.') {
          dispatch({
            type: FETCH_INFO_SUCCESS,
            url: null,
            payload: null
          })
          return
        }
      }

      dispatch({
        type: FETCH_INFO_SUCCESS,
        url: null,
        payload: json
      })
    })
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

export function reloadInfo () {
  return (dispatch, getState) => {
    var state = getState()

    const { list } = state.app

    if (list === null) {
      return
    }

    list.map((item) => {
      if (item.loadState === LOAD_FAILED) {
        fetchInfo(dispatch, item.url)
      }
      return item
    })
  }
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
        fetchInfo(dispatch, item.url)
        return item
      })
    })
    .catch(() => dispatch({ type: FETCH_ITEMS_FAIL, itemType: POKEMON }))
}

export function resetSearchAndFetchPokemon () {
  return dispatch => {
    dispatch({ type: RESET_SEARCH })
    return fetchAllInfo(dispatch)
  }
}

export function changeSearchAndFetchPokemon (str) {
  return dispatch => {
    dispatch({ type: SEARCH, payload: str })
    return searchPokemon(dispatch, str)
  }
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
