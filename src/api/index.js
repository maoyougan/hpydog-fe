import ajax from './ajax'

export default {
  getIndexData (params) {
    return ajax.get('/welcome', params)
  }
}
