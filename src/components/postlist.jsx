import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="col-md-4 my-3" key={post.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
              <UserHeader userId={post.userId} />
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="row">
        <h1 className="text-center my-5">Post List</h1>
        {this.renderList()}
      </div>
    );
  };
};

const mapStateToProps = state => {
  return { posts: state.posts }
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
