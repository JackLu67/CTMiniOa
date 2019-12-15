<!--
 * @Author: your name
 * @Date: 2019-11-11 15:35:38
 * @LastEditTime: 2019-11-13 15:34:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \studyd:\ctminioa\src\layout\index.vue
 -->
<template>
  <div class="layout">
    <layout-header></layout-header>
    <layout-main></layout-main>
  </div>
</template>

<script>
import LayoutHeader from './components/header'
import LayoutMain from './components/main'
export default {
  name: 'layout',
  components: {
    LayoutHeader,
    LayoutMain
  },
  props: {},
  data() {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.layout {
  height: 100%;
  box-sizing: border-box;
  position: relative;
}
</style>
