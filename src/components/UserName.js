import React from 'react'
import { connect } from 'react-redux'

class UserName extends React.Component {
    render() {
        if(!this.props.user) {
            return null
        }
        return <div>{this.props.user.name}</div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {user: state.users.find(user => user.id === ownProps.userId)}
}

export default connect(mapStateToProps)(UserName)