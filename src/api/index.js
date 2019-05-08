import ajax from './ajax'

export default {
  getIndexData () {
    return ajax.get('/test')
  }
}
