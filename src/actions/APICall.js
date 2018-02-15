export function apiFetchDataSuccess(data) {
  return {
    type: 'API_FETCH_DATA_SUCCESS',
    data,
  };
}

export function apiDataIsLoading(bool) {
  return {
    type: 'API_DATA_IS_LOADING',
    hasLoaded: bool,
  };
}

export function apiDataHasErrored(bool) {
  return {
    type: 'API_DATA_HAS_ERRORED',
    hasErrored: bool,
  };
}

export function apiFetchData(url) {
  return (dispatch) => {
    dispatch(apiDataIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(apiDataIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(apiFetchDataSuccess(items)))
      .catch(() => dispatch(apiDataHasErrored(true)));
  };
}

const initialState = {
  data: null,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'API_FETCH_DATA_SUCCESS':
    console.log(action);
      return {data: action.data, hasLoaded: true};
    default:
      return state;
  }
}

