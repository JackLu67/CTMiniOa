<!--
 * @Author: your name
 * @Date: 2019-11-11 11:26:22
 * @LastEditTime: 2019-11-13 15:15:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \studyd:\ctminioa\src\App.vue
 -->
<template>
  <div id="app">
    <!-- <layout-header></layout-header> -->
    <router-view/>
  </div>
</template>

<script>
// import LayoutHeader from './layout/components/header'
export default {
  name: 'layout',
  components: {
    // LayoutHeader
  },
  props: {},
  data() {
    return {
    }
  }
}
</script>

<style>
#app {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}

#nprogress .bar {
  background: pink !important;
}
</style>
