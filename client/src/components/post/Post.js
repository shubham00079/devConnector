import React, { Fragment, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem1 from '../posts/PostItem1';
import { getPost } from '../../actions/post';


const Post = ({ getPost, post: { post, loading } }) => {
  const { id } = useParams();
  useEffect(() => {
    getPost(id);
  }, [getPost, id]);

  return (
    loading || post === null ? <Spinner/> : <Fragment>
        <Link to='/posts' className='btn'>Back to Posts</Link>
        <PostItem1 post={post} showActions={false} />
    </Fragment>
  )
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});
export default connect(mapStateToProps, { getPost })(Post);
