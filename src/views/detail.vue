<template>
  <div class="bg">
    <div class="header">
      <div class="icon">&#8672;</div>
      <div class="title">优质玩具</div>
    </div>
    <img-list />
  </div>
</template>

<script>
import ImgList from '../components/imgList'

export default {
  name: 'Index',
  data () {
    return {
      msg: 'Index'
    }
  },
  components: {
    ImgList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
  flex-direction: row;
}

.icon {
  font-size: 32px;
}

.title {
  padding-left: 15px;
}

</style>
