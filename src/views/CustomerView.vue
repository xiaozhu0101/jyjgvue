<template>
<div class="main2">
  <el-row >
    <el-col :span="3">
  <el-menu
      style="height: 500px"
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

    <el-menu-item index="3" @click="registercourseinfo">
      <i class="el-icon-document"></i>
      <span slot="title">报名记录</span>
    </el-menu-item>
    <el-menu-item index="4" @click="changeinfo">
      <i class="el-icon-s-tools"></i>
      <span slot="title">修改信息</span>
    </el-menu-item>
    <el-menu-item index="5" @click="exit">
      <i class="el-icon-s-promotion"></i>
      <span slot="title">退出登录</span>
    </el-menu-item>

  </el-menu>
    </el-col>
    <el-col :span="21">
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
  beforeCreate(){

    if(localStorage.getItem("userid")==''||localStorage.getItem("userkind")!='1'){

        this.$router.push("/login")
      this.$message.error('请先登录客户账号');
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

    exit(){
      this.$confirm('是否退出登录, 是否继续?', '提示', {
        confirmButtonText: '确定退出',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        localStorage.removeItem("userid");
        localStorage.removeItem("userkind");
        this.$router.push('/home')
        this.$message({
          type: 'success',
          message: '退出账号成功!'
        });
      }).catch(() => {
      });

    },
    customerinfo(){
      this.$router.push("/customer")
    },

    registercourseinfo(){
      this.$router.push("/customer/registercourseinfo")

    },
    changeinfo(){
      this.$router.push("/customer/changeinfo")

    }

  }
}
</script>

<style scoped>

</style>