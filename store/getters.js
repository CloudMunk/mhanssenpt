export default {
    userIsMember: state => {
      return state.users.filter(user => user.member === true)
    }
  }