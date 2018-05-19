import { combineReducers } from 'redux'
import {
  TOGGLE_YOUTUBE,
  TOGGLE_DISCOGS,
  SET_YOUTUBE_ID,
  SET_LYRICS_PROVIDER,
  SET_BROADCAST_PROVIDER,
  ADD_PLACE,
  BroadcastProvider,
  LyricsProvider
} from './actions';

const { SPOTIFY } = BroadcastProvider
const { AMALGAMA } = LyricsProvider

function broadcastProvider(state = SPOTIFY, action) {
  switch (action.type) {
    case SET_BROADCAST_PROVIDER:
      return action.broadcastProvider
    default:
      return state
  }
}

function lyricsProvider(state = AMALGAMA, action) {
  switch (action.type) {
    case SET_LYRICS_PROVIDER:
      return action.lyricsProvider
    default:
      return state
  }
}

function YouTubeId(state = '', action) {
  switch (action.type) {
    case SET_YOUTUBE_ID:
      return action.id
    default:
      return state
  }
}

function additionInformation(state = {youtube: false, discogs: true}, action) {
  switch (action.type) {
    case TOGGLE_YOUTUBE:
      return {...state, youtube: !state.youtube }
    case TOGGLE_DISCOGS:
      return {...state, discogs: !state.discogs }
    default:
      return state
  }
}

const placesl =[
  {id: 1, lat:  49.432214, lng: 32.057925, eventname: 'ev1'},
  {id: 2, lat: 49.428038, lng: 32.088534, eventname: 'ev2'}
];


function places(state = placesl, action) {
  switch (action.type) {
    case ADD_PLACE:
      return [...state, action.place ]
    default:
      return state
  }
}

const LLApp = combineReducers({
  places
})

export default LLApp