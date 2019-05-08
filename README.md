# hpydog-fe

> a vue project test

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 多语言配置

采用vue-i8n插件直接生成，详见src/lang目录，配置后记得将实例化的i18n对象挂载到man.js里的vue实例里，以便全局可用。其用法详见src/views/index.vue，需用‘$t’方法引出

# 解决本地跨域问题
## 找到proxyTable,设置如下:
 proxyTable: {
      '/api/v1': {
        target: 'http://localhost:3000', // 目标域名
        changeOrigin: true,
        pathRewrite: {
          '^/api/v1': '/api/v1'
        }
      }
    }
设置若没有立即生效，重启项目即可
