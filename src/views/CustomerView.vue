<template>
<div class="main2">
  <el-row >
    <el-col :span="4">
  <el-menu
      style="height: 450px"
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">

    <el-menu-item index="1" @click="customerinfo">
      <i class="el-icon-menu"></i>
      <span slot="title">个人信息</span>
    </el-menu-item>
    <el-menu-item index="2" @click="testcourseinfo">
      <i class="el-icon-document"></i>
      <span slot="title">试课记录</span>
    </el-menu-item>
    <el-menu-item index="3" @click="registercourseinfo">
      <i class="el-icon-document"></i>
      <span slot="title">报名记录</span>
    </el-menu-item>

  </el-menu>
    </el-col>
    <el-col :span="20">
      <div class="mine">
      <router-view>
      </router-view>
      </div>
    </el-col>
  </el-row>
</div>
</template>

<script>

export default {
  name: "CustomerView",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    customerinfo(){
      this.$router.push("/customer")
    },
    testcourseinfo(){
      this.$router.push("/customer/testcourseinfo")
    },
    registercourseinfo(){
      this.$router.push("/customer/registercourseinfo")

    }
  }
}
</script>

<style scoped>

</style>