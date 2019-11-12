<!--
 * @Author: your name
 * @Date: 2019-11-11 16:17:36
 * @LastEditTime: 2019-11-11 19:25:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \studyd:\ctminioa\src\layout\components\silderbar.vue
 -->
<template>
    <el-row class="main">
      <el-col :span="4" class="aside-box">Aside</el-col>
      <el-col :span="20" class="main-box">
        <div class="main"></div>
      </el-col>
    </el-row>
</template>

<script>
export default {
  name: 'Main',
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
.main {
  height: $main-height;
  background: #eee;
  .aside-box {
    height: 100%;
    background: #fff;
    border-right: 1px solid #eee;
    box-shadow: 5px 10px 15px 2px rgba(0,0,0,0.1); //1.水平阴影  2.垂直阴影 3.模糊距离，改虚实 4.阴影尺寸
  }
  .main-box {
    height: 100%;
    box-sizing: border-box;
    .main {
      height: 96%;
      width: 96%;
      margin: 20px auto;
      background: #fff;
      box-shadow: 5px 10px 15px 2px rgba(0,0,0,0.1); //1.水平阴影  2.垂直阴影 3.模糊距离，改虚实 4.阴影尺寸
    }
  }
}
</style>
