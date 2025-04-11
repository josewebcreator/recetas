import actionTypes from './actionTypes';

export function reducer(state, action) {
    switch (action.type) {
        // Add cases for action types here
        case actionTypes.OPEN_RECIPE:
            return {
                ...state,
                loadedRecipe: action.payload
            };
        case actionTypes.CLOSE_RECIPE:
            return {
                ...state,
                loadedRecipe: []
            };
        case actionTypes.SET_FILTER:
            return {
                ...state,
                filterType: action.payload.filterType,
                filter: action.payload.filter
            };
        default:
            return state;
    }
};
