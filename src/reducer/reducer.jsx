import actionTypes from './actionTypes';

export function reducer(state, action) {
    switch (action.type) {
        // Add cases for action types here
        case actionTypes.ADD_TO_FAV:
            return {
                ...state,
                favoritesRecipes: [...state.favoritesRecipes, action.payload]
            };
        case actionTypes.REMOVE_FROM_FAV:
            return {
                ...state,
                favoritesRecipes: state.favoritesRecipes.filter(
                    (item) => item.idMeal !== action.payload.idMeal
                )
            };
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
