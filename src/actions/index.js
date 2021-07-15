import jsonplaceholder from '../api/jsonplaceholder';
import _ from 'lodash';

// export const fetchPosts = () => {
//   return async dispatch => {
//     const response = await jsonplaceholder.get('/posts');

//     dispatch({ type: 'FETCH_POSTS', payload: response });
//   };
// };

// equivelant versions

export const fetchPosts = () => async dispatch => {
  const response = await jsonplaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => dispatch => {
  _fetchUser(id, dispatch);
};

// memoized fetch user function to prevent overly calling the api, eg each user has 10 posts
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonplaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data })
});
