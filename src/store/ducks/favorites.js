/* Types */
export const Types = {
  ADD_REQUEST: 'favorites/ADD_REQUEST',
  ADD_SUCESS: 'favorites/ADD_SUCESS',
  ADD_FAILURE: 'favorites/ADD_FAILURE',
};

/* Reducers */
const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
};

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data],
      };
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

/* Actions */
export const Creators = {
  addFavoritesRequest: repository => ({
    type: Types.ADD_REQUEST,
    payload: { repository },
  }),

  addFavoritesFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),

  addFavoritesSucess: data => ({
    type: Types.ADD_SUCESS,
    payload: { data },
  }),
};
