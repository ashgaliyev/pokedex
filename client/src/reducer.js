import { combineReducers } from 'redux'
import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAIL,
  FETCH_INFO_SUCCESS,
  FETCH_INFO_FAIL,
  SET_PAGE,
  SET_PER_PAGE,
  SEARCH,
  TOGGLE_TYPE
} from './constants/actionTypes'
import {
  POKEMON,
  TYPE
} from './constants/fetchItemTypes'
import {
  LOADING,
  LOADED,
  LOAD_FAILED
} from './constants/loadState'

const defaultState = {
  list: [],
  currentPage: 1,
  perPage: 20,
  search: null,
  types: [],
  selectedType: null,
  loadState: LOADING,
  totalCount: 0
}

const app = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_REQUEST: {
      if (action.itemType === POKEMON) {
        return {
          ...state,
          loadState: LOADING
        }
      }

      return state
    }

    case FETCH_ITEMS_SUCCESS: {
      if (action.itemType === POKEMON) {
        return {
          ...state,
          totalCount: action.count,
          list: action.payload.map((i) => ({ ...i, loadState: LOADING })),
          loadState: LOADED
        }
      } else if (action.itemType === TYPE) {
        return {
          ...state,
          types: action.payload
        }
      }

      return state
    }

    case FETCH_ITEMS_FAIL: {
      if (action.itemType === POKEMON) {
        return {
          ...state,
          loadState: LOAD_FAILED
        }
      }

      return state
    }

    case SET_PAGE: {
      return {
        ...state,
        currentPage: action.payload
      }
    }

    case SET_PER_PAGE: {
      return {
        ...state,
        perPage: action.payload
      }
    }

    case FETCH_INFO_SUCCESS: {
      if (state.list.length === 0) {
        if (action.payload !== null) {
          const item = {
            name: action.payload.name,
            url: action.payload.url,
            loadState: LOADED,
            img: action.payload.sprites.front_shiny,
            desc: [
              'Weight: ' + action.payload.weight
            ]
          }
          return {
            ...state,
            list: [ item ],
            loadState: LOADED,
            totalCount: 1
          }
        } else {
          return {
            ...state,
            list: [],
            loadState: LOADED,
            totalCount: 0
          }
        }
      } else {
        return {
          ...state,
          list: [...state.list.map(item => {
            if (item.url === action.url) {
              item.loadState = LOADED
              item.img = action.payload.sprites.front_shiny
              item.desc = [
                'Weight: ' + action.payload.weight
              ]
            }
            return item
          })]
        }
      }
    }

    case FETCH_INFO_FAIL: {
      return {
        ...state,
        list: [...state.list.map(item => {
          if (item.url === action.url) {
            item.loadState = LOAD_FAILED
          }
          return item
        })]
      }
    }

    case TOGGLE_TYPE: {
      if (state.selectedType !== null &&
          state.selectedType === action.payload) {
        return {
          ...state,
          selectedType: null,
          currentPage: 1
        }
      } else {
        return {
          ...state,
          selectedType: action.payload,
          currentPage: 1
        }
      }
    }

    case SEARCH: {
      return {
        ...state,
        list: [],
        loadState: LOADING,
        selectedType: null
      }
    }

    default: return state
  }
}

export default combineReducers({ app })
