// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import AMap from 'vue-amap';
import App from './App.vue';

Vue.use(AMap);
AMap.initAMapApiLoader({
  key: '64dba50b140b4b029bfeb3e24574b20c',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});

new Vue({
  el: '#app',
  render: h => h(App)
})
