import { combineReducers } from 'redux'
import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAIL,
  FETCH_INFO_SUCCESS,
  FETCH_INFO_FAIL,
  FETCH_INFO_REQUEST,
  SET_PAGE,
  SET_PER_PAGE,
  TOGGLE_TYPE
} from './constants/actionTypes'
import {
  POKEMON,
  TYPE
} from './constants/fetchItemTypes'

const defaultState = {
  list: [],
  currentPage: 1,
  perPage: 20,
  search: null,
  types: [],
  selectedType: null,
  isLoading: false,
  totalCount: 0
}

const app = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_REQUEST: {
      if (action.itemType === POKEMON) {
        return {
          ...state
        }
      }

      return state
    }

    case FETCH_ITEMS_SUCCESS: {
      if (action.itemType === POKEMON) {
        return {
          ...state,
          totalCount: action.count,
          list: action.payload
        }
      } else if (action.itemType === TYPE) {
        return {
          ...state,
          types: action.payload
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

    case FETCH_INFO_REQUEST: {
      return {
        ...state,
        list: [...state.list.map(item => {
          if (item.url === action.url) {
            item.isLoading = true
          }
          return item
        })]
      }
    }

    case FETCH_INFO_SUCCESS: {
      return {
        ...state,
        list: [...state.list.map(item => {
          if (item.url === action.url) {
            item.img = action.payload.sprites.front_shiny
            item.desc = [
              'Weight: ' + action.payload.weight
            ]
          }
          return item
        })]
      }
    }

    case FETCH_INFO_FAIL: {
      return {
        ...state,
        list: [...state.list.map(item => {
          if (item.url === action.url) {
            item.isLoading = undefined
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

    default: return state
  }
}

export default combineReducers({ app })
