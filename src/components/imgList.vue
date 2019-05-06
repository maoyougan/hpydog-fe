<template>
    <div class="goods">
      <div class="goods-item">
        <img src="" class="goods-img">
        <div class="goods-type-name">{{$t('goods-type-name')}}</div>
      </div>
      <div class="goods-item">
        <img src="" class="goods-img">
        <div class="goods-type-name">{{$t('goods-type-name')}}</div>
      </div>
      <div class="goods-item">
        <img src="" class="goods-img">
        <div class="goods-type-name">{{$t('goods-type-name')}}</div>
      </div>
      <div class="goods-item">
        <img src="" class="goods-img">
        <div class="goods-type-name">{{$t('goods-type-name')}}</div>
      </div>
      <div class="goods-item">
        <img src="" class="goods-img">
        <div class="goods-type-name">{{$t('goods-type-name')}}</div>
      </div>
      <div class="goods-item">
        <img src="" class="goods-img">
        <div class="goods-type-name">{{$t('goods-type-name')}}</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Index'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.goods {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.goods-item {
  margin: 15px 0;
}

.goods-img {
  width: 300px;
  height: 170px;
  background: lightgreen;

}

.goods-type-name {
  font-size: 24px;
  text-align: center;
}
</style>
