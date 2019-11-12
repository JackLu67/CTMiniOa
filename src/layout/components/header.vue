<!--
 * @Author: your name
 * @Date: 2019-11-11 15:37:36
 * @LastEditTime: 2019-11-11 16:47:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \studyd:\ctminioa\src\layout\components\header.vue
 -->
<template>
  <el-row class="header">
    <el-col :span="4" class="header-logo-box">
      <h2>CTMINIOA</h2>
    </el-col>
    <el-col :span="20" class="header-nav-box">
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Header',
  components: {},
  props: {},
  data() {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.header {
  height: $header-height;
  background: $menuActiveText;
  h2 {
    text-align: center;
    margin: 0 auto;
    line-height: $header-height;
    color: $subMenuActiveText;
  }
}
</style>
