<template>
  <div>
    <el-container class="page">
      <el-aside class="aside">
        <el-col :span="24">
          <h5>默认颜色</h5>
          <el-menu
            default-active="4"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>柱状图 Bar</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1" @click="currentTab='Bar-base'">最基础的模板</el-menu-item>
                <el-menu-item index="1-2" @click="currentTab='tab2'">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">折线图 Line</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">饼图 Pie</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">实验区</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>
      <el-container class="main">
        <el-main class="main-content">
          <keep-alive>
            <component v-bind:is="currentContent"></component>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
    <!-- <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop> -->
  </div>
</template>

<script>
import baseMixins from '@/mixins/baseMixins'
import BaeBase from './Bar/BarBase'
import tab2 from './Bar/tab2'
import test from './Test'
export default {
  mixins: [baseMixins],
  components: {
    'Bar-base': BaeBase,
    tab2,
    test
  },
  props: {},
  data() {
    return {
      currentTab: 'test',
    }
  },
  computed: {
    currentContent() {
      return this.currentTab
    }
  },
  // mounted: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
//@import "";
.page {
  width: 100%;
  height: 100%;
}
.aside {
  width: 240px !important;
  height: 100vh;
  border-right: solid 1px #e6e6e6;
  & /deep/ {
    .el-menu {
      border: none;
    }
    .el-submenu__title, .el-menu-item {
      padding: 0 120px;
    }
  }
}
.main {
  height: 100vh;
}
</style>