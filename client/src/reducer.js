import { combineReducers } from 'redux'
import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAIL,
  FETCH_INFO_SUCCESS,
  FETCH_INFO_FAIL,
  FETCH_INFO_REQUEST,
  SET_PAGE
} from './constants/actionTypes'

const defaultState = {
  list: [],
  page: 1,
  filterString: null,
  filterTags: [],
  isLoading: false,
  isLoadingError: false,
  totalCount: 0
}

const app = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_REQUEST:
      return {
        ...state,
        isLoadingError: false
      }

    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        totalCount: action.count,
        list: action.payload
      }

    case FETCH_ITEMS_FAIL:
      return {
        ...state,
        isLoadingError: true
      }

    case SET_PAGE: {
      return {
        ...state,
        currentPage: action.payload
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

    default: return state
  }
}

export default combineReducers({ app })
