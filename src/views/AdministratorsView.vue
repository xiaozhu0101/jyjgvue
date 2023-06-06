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

          <el-menu-item index="1" @click="adiministratorsinfo">
            <i class="el-icon-menu"></i>
            <span slot="title">个人信息</span>
          </el-menu-item>
          <el-menu-item index="2" @click="enrollmentplan">
            <i class="el-icon-s-data"></i>
            <span slot="title">招生计划</span>
          </el-menu-item>
<!--          <el-menu-item index="3" @click="studentrecruitmentbrochure">-->
<!--            <i class="el-icon-document"></i>-->
<!--            <span slot="title">招生简章</span>-->
<!--          </el-menu-item>-->
<!--          <el-menu-item index="4" @click="enrollmenttext">-->
<!--            <i class="el-icon-s-order"></i>-->
<!--            <span slot="title">宣传文章</span>-->
<!--          </el-menu-item>-->
          <el-menu-item index="5" @click="enrollmentadmin">
            <i class="el-icon-s-custom"></i>
            <span slot="title">招生专员</span>
          </el-menu-item>
          <el-menu-item index="6" @click="courseinginfo">
            <i class="el-icon-s-data"></i>
            <span slot="title">报名信息</span>
          </el-menu-item>
<!--          <el-menu-item index="7" @click="testcourseinfo">-->
<!--            <i class="el-icon-s-data"></i>-->
<!--            <span slot="title">试课信息</span>-->
<!--          </el-menu-item>-->
          <el-menu-item index="8" @click="messageinfo">
            <i class="el-icon-s-comment"></i>
            <span slot="title">留言评价</span>
          </el-menu-item>
          <el-menu-item index="9" @click="exit">
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
  name: "AdministratorsView",
  beforeCreate(){

    if(localStorage.getItem("userid")==''||localStorage.getItem("userkind")!='3'){

      this.$router.push("/login")
      this.$message.error('请先登录招生专员账号');
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
    adiministratorsinfo(){
      this.$router.push("/administrators")
    },
    enrollmentplan(){
      this.$router.push("/administrators/enrollmentplaninfo")
    },
    studentrecruitmentbrochure(){
      this.$router.push("/administrators/studentrecruitmentbrochure")
    },
    courseinginfo(){
      this.$router.push("/administrators/courseinginfo")
    },
    enrollmentadmin(){
      this.$router.push("/administrators/enrollmentadmin")
    },
    enrollmenttext(){
      this.$router.push("/administrators/enrollmenttext")
    },
    testcourseinfo(){
      this.$router.push("/administrators/testcourseinfo")
    },
    messageinfo(){
      this.$router.push("/administrators/messageinfo")
    },

  }
}
</script>

<style scoped>

</style>