import actionTypes from './actionTypes';

export function reducer(state, action) {
    switch (action.type) {
        // Add cases for action types here
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
