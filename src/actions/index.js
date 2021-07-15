import jsonplaceholder from '../api/jsonplaceholder';

// export const fetchPosts = () => {
//   return async dispatch => {
//     const response = await jsonplaceholder.get('/posts');

//     dispatch({ type: 'FETCH_POSTS', payload: response });
//   };
// };

export const fetchPosts = () => async dispatch => {
  const response = await jsonplaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

// equivelant versions

export const fetchUser = (id) => async dispatch => {
  const response = await jsonplaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data })
};
