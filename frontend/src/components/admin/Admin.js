import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getAllUsers, toggleAdminState, toggleBlockedState} from '../../actions/adminActions'
import UsersTable from './UsersTable'
import {CardPanel} from 'react-materialize'

class Admin extends Component {
  static propTypes = {
    users: PropTypes.array
  }

  componentWillMount = () => {
    this.props.dispatch(getAllUsers())
  }

  handleUserBlock = (id, prevState) => () => {
    this.props.dispatch(toggleBlockedState(id, !prevState))
  }

  handleToggleAdmin = (id, prevState) => () => {
    this.props.dispatch(toggleAdminState(id, !prevState))
  }

  render () {
    const {users} = this.props
    return (
      <CardPanel>
        <h2>Admin Panel</h2>
        <UsersTable
          users={users}
          onBlock={this.handleUserBlock}
          onMakeAdmin={this.handleToggleAdmin} />
      </CardPanel>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.admin.users
  }
}

export default connect(mapStateToProps)(Admin)
