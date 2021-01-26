import React from 'react';
import { connect } from 'react-redux'
import { fetchPostAndUser } from '../actions'
import UserName from './UserName'

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPostAndUser()
    }

    renderlist() {
        return this.props.posts.map((post) => {
            return (
                <div style ={{border: '1px solid black'}} key = {post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <UserName userId={post.userId}/>
                </div>
            )
        })
    }

    render() {
        console.log(this.props.posts)
        return <div>{this.renderlist()}</div>
    }
}

const mapStateToProps = (state) => {
    return {posts: state.posts}
}

export default connect(mapStateToProps, {fetchPostAndUser})(PostList);