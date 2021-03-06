import { RECEIVE_SEARCH_USERS, RECEIVE_SEARCH_RELEASES, RECEIVE_SEARCH_SONGS, CLEAR_SEARCH } from "../actions/search_actions";

const defaultState = {
    users: {},
    releases: {},
    songs: {}
}


const searchReducer = (state = defaultState, action ) => {

    Object.freeze(state);
    let newState = Object.assign({}, state);
    
    switch (action.type) {
        default: 
            
            return state;
        case RECEIVE_SEARCH_USERS:
            newState['users'] = action.users;
            return newState;
        case RECEIVE_SEARCH_RELEASES:
            newState['releases'] = action.releases;
            return newState;
        case RECEIVE_SEARCH_SONGS:
            newState['songs'] = action.songs;
            return newState;
        case CLEAR_SEARCH:
            return defaultState;
    }
}

export default searchReducer;