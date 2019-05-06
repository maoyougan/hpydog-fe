export default {
  get () {
    return localStorage.getItem('token')
  },
  set (newToken) {
    localStorage.setItem('token', newToken)
  },
  clear () {
    localStorage.removeItem('token')
  }
}
