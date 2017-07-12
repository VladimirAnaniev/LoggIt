import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {
  getAllUsers,
  toggleAdminState,
  toggleBlockedState,
  changePage
} from '../../actions/adminActions'
import {getAllUsersCount} from '../../actions/userActions'
import UsersTable from './UsersTable'
import {CardPanel, Pagination} from 'react-materialize'

class Admin extends Component {
  static propTypes = {
    users: PropTypes.array
  }

  componentWillMount = () => {
    this.props.dispatch(getAllUsers(this.props.page))
    this.props.dispatch(getAllUsersCount())
  }

  handleUserBlock = (id, prevState) => () => {
    this.props.dispatch(toggleBlockedState(id, !prevState))
  }

  handleToggleAdmin = (id, prevState) => () => {
    this.props.dispatch(toggleAdminState(id, !prevState))
  }

  handlePageSelect = (page) => {
    this.props.dispatch(changePage(page))
    this.props.dispatch(getAllUsers(page))
  }

  render () {
    const {users, page, usersCount} = this.props
    return (
      <CardPanel>
        <h2>Admin Panel</h2>
        <UsersTable
          users={users}
          onBlock={this.handleUserBlock}
          onMakeAdmin={this.handleToggleAdmin} />
        <Pagination items={Math.ceil(usersCount / 10)} activePage={page} onSelect={this.handlePageSelect} />
      </CardPanel>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.admin.users,
    usersCount: state.users.usersCount,
    page: state.admin.page
  }
}

export default connect(mapStateToProps)(Admin)
