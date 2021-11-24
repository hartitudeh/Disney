export const initialState = {
    user: null,
    recommend: null,
    newDisney: null,
    original: null,
    trending: null,
  };
  
  export const actionTypes = {
    SET_USER: "SET_USER",
    SET_MOVIES: "SET_MOVIES",
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.SET_USER:
        return {
          ...state,
          user: action.user,
        };
  
      case actionTypes.SET_MOVIES:
        return {
          recommend: action.recommend,
          newDisney: action.newDisney,
          original: action.original,
          trending: action.trending,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  