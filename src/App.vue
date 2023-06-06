
<template>
  <div id="app">

    <el-container>
      <el-header >

        <div style="margin-top:2px;line-height: 30px;background-color: #14737a;margin-bottom: 2px">
          <el-menu
              :default-active="activeIndex2"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#14737a"
              text-color="#fff"
              active-text-color="#ffd04b">

            <el-menu-item index="home "@click="home">
              <span  style="font-family: Helvetica Neue ;font-size: 30px">
                教育机构
              </span></el-menu-item>

            <el-menu-item index="mine "style="float: right"@click="mine">
              <span  style="font-family: 宋体 ">
                我的
              </span></el-menu-item>

            <el-menu-item index="zsjh "style="float: right"@click="enrollmentplan">
              <span  style="font-family: 宋体 ">
                招生计划
              </span></el-menu-item>

            <el-menu-item index="zsjz "style="float: right"@click="studentrecruitmentbrochure">
              <span  style="font-family: 宋体 ">
                招生简章
              </span></el-menu-item>

            <el-menu-item index="registercourse "style="float: right" @click="registercourse">
              <span  style="font-family: 宋体 ">
                在线报名
              </span></el-menu-item>

            <el-menu-item index="aboutus "style="float: right" @click="aboutus">
              <span  style="font-family: 宋体 ">
                联系我们
              </span></el-menu-item>

          </el-menu>
        </div>
      </el-header>

      <el-main >

          <router-view/>

      </el-main>
      <el-footer>
        <span class="footertext">
          邮件：{{email}}&nbsp
          联系电话：{{phonenum}}<br>
          公司地址：{{address}}
        </span>
      </el-footer>
    </el-container>


  </div>
</template>

<script>
export default {
  data(){
    return{
      userkind:'',
      username:'',
      userid:'',
      activeIndex2: '1',
      email: '1415353761@qq.com',
      phonenum: '8888-8888-88',
      address : '广州市花都区广州城市理工学院',
    }

    },
  methods:{
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    home(){
      this.$router.push("/")
    },
    aboutus(){
      this.$router.push("/aboutus")
    },

    registercourse(){
      this.$router.push("/registercourse")
    },
    studentrecruitmentbrochure(){
      this.$router.push("/studentrecruitmentbrochure")
    },
    enrollmentplan(){
      this.$router.push("/enrollmentplan")
    },
    mine(){

        this.$router.push('/login')

    },
  }
}
</script>

<style>
.el-menu{
  width: 100%;
}
.el-header{

  padding-left: 0px;
  padding-right: 0px;
  padding-top: 80px;
  background: url('./assets/img_1.png');
  width: 100%;
  margin-bottom: 60px;
}
.el-main{
  padding: 0px;
  width: 100%;
  background-color: #e1e1e1;

}
.el-footer{
  padding-top: 10px;
  width: 100%;
  height: 100px;
  background: url('./assets/木质.webp');

}
.footertext{

  color: #475669;
  font-size: 10px;
  font-family: 宋体;
}


* {
  margin: 0px;
  padding: 0px;
  text-decoration: none;
  list-style: none;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
