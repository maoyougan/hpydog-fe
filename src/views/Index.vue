<template>
  <div class="bg" v-if="data">
    <!-- 欢迎语句 -->
    <img class="log-icon" :src="data.shopLogo">
    <div class="wellcome-txt">{{data.shopWellcome}}</div>
    <!-- 公司简介 -->
    <div class="title">{{data.shopName}}</div>
    <div class="profile-content">{{data.shopProfile}}</div>
    <!-- 货物类别 -->
    <div class="title">{{$t('goods-type')}}</div>
    <img-list />
    <!-- 更多 -->
    <div class="more">
      <div class="more-txt">{{$t('more')}}</div>
      <div class="more-icon">&#10132;</div>
    </div>
  </div>
</template>

<script>
import ImgList from '../components/imgList'
import api from '../api/index'

export default {
  name: 'Index',
  data () {
    return {
      data: ''
    }
  },
  components: {
    ImgList
  },
  created () {
    api.getShopInfo().then(res => {
      this.data = res
    }).catch(err => console.log(err))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg {
  /* text-align: center; */
}

.log-icon {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background: lightblue;
  margin: 0 auto;
}

.wellcome-txt {
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 30px;
}

.title {
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin: 15px;
}

.profile-content {
  font-size: 25px;
  text-align: justify;
}

.more {
  margin-top: 10px;
}

.more-txt {
  font-size: 25px;
  font-weight: bold;
  text-align: right;
}

.more-icon {

}
</style>
