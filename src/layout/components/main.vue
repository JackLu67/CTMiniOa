<!--
 * @Author: your name
 * @Date: 2019-11-11 16:17:36
 * @LastEditTime: 2019-11-14 10:03:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \studyd:\ctminioa\src\layout\components\silderbar.vue
 -->
<template>
  <el-row class="main">
    <el-col :span="3" class="aside-box">
      <ul>
        <li>
          <i class="el-icon-s-home"></i>
          <span>首页</span>
        </li>
        <li>
          <i class="el-icon-s-claim"></i>
          <span>事务</span>
        </li>
        <li>
          <i class="el-icon-user-solid"></i>
          <span>我的</span>
        </li>
      </ul>
    </el-col>
    <el-col :span="21" class="main-box">
      <el-row class="banner-box" :gutter="20">
        <el-col :span="12" class="banner-item">
          <div class="block">
            <el-carousel style="border-radius: 10px;" height="310px" :autoplay="true" :interval="5000" :loop="true">
              <el-carousel-item v-for="item in 4" :key="item">
                <img src="http://pic30.nipic.com/20130605/8430363_220408350117_2.jpg" alt="" width="100%" height="100%">
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-col>
        <el-col :span="12" class="banner-item">
          <el-card style="border-radius: 10px;height: 310px;" class="box-card">
            <div slot="header" class="clearfix">
              <span>新闻通知</span>
              <el-button style="float: right; padding: 3px 0" type="text">>></el-button>
              <div>
                <div></div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <!-- 快捷导航 -->
      <el-row :gutter="20" style="margin-top:20px;">
        <el-col :span="12" class="banner-item">
          <el-row :gutter="20">
            <el-col :span="12" class="banner-item">
              <div class="quick-menu-box" @click="test"></div>
            </el-col>
            <el-col :span="12" class="banner-item">
              <div class="quick-menu-box"></div>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="margin-top:20px">
            <el-col :span="12" class="banner-item">
              <div class="quick-menu-box"></div>
            </el-col>
            <el-col :span="12" class="banner-item">
              <div class="quick-menu-box"></div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="12" class="banner-item">
          <el-row :gutter="20">
            <el-col :span="12" class="banner-item">
              <div class="quick-menu-box"></div>
            </el-col>
            <el-col :span="12" class="banner-item">
              <div class="quick-menu-box"></div>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="margin-top:20px">
            <el-col :span="12" class="banner-item">
              <div class="quick-menu-box"></div>
            </el-col>
            <el-col :span="12" class="banner-item">
              <div class="quick-menu-box"></div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <!-- 快捷导航 -->
    </el-col>
  </el-row>
</template>

<script>

export default {
  name: 'Main',
  components: {
  },
  props: {},
  data() {
    return {
      activeName: 'first',
      date: new Date()
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    test() {
      this.$router.push({
        path: '/commonIndex'
      })
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
    ul {
      padding: 0;
      width: 100%;
      height: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      list-style: none;
      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: $menuActiveText;
        margin-top: 20px;
        i {
          font-size: 2.5em;
        }
      }
    }
  }
  .main-box {
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
    overflow: hidden;
    overflow-y: auto;
    .quick-menu-box {
      height: 180px;
      border-radius: 10px;
      background: green;
    }
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
