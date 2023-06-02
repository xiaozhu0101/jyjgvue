<template>
  <div class="main1">
<div class="allmain">
    <el-row gutter="15">
      <el-col :span="6" >
        <!--            机构动态 左-->
        <div class="left">
          <!--              机构动态栏上部分-->
          <el-row style="margin-bottom: 8px">
            <el-col :span="21">
                  <span class="block-left">
                    招生计划
                  </span></el-col>
            <el-col :span="3">
              <span class="block-right" @click="EnrollmentPlan">
                更多>>
              </span>
            </el-col>
          </el-row>
          <div  >
            <ul>
              <li class="textInItem"
                  v-for="item in zsjh"
                  :key="item">
                {{item}}
              </li>
            </ul>
          </div>
        </div>

        <!--            左下-->
        <div class="left">
          <!--              机构动态栏上部分-->
          <el-row style="margin-bottom: 8px ">
            <el-col :span="21">
                  <span class="block-left">
                    机构动态
                  </span></el-col>
            <el-col :span="3">
              <span class="block-right">
                更多>>
              </span>
            </el-col>
          </el-row>
          <div  >
            <ul>
              <li class="textInItem"
                  v-for="item in zswa"
                  :key="item">
                {{item}}
              </li>
            </ul>
          </div>
        </div>
      </el-col>
      <!--          右-->
      <el-col :span="18">
        <div class="right">
<!--          顶部标题-->
          <div class="text-top">
            >>{{texttop}}
            <el-breadcrumb separator-class="el-icon-arrow-right" style="float: right;margin-right: 20px;font-size: 12px;margin-top: 3px">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>联系我们</el-breadcrumb-item>
            </el-breadcrumb>
          </div>

          <hr style="margin: 10px ;color: #5a7679">
          <div style="word-wrap: break-word ;font-size: 12px;color: #4d5664;margin-left: 10px;margin-right: 10px;padding-top:50px;padding-bottom:50px;text-align: center;text-indent: 2em">
            <p v-html="textaboutus"></p>
          </div>
        </div>

      </el-col>
    </el-row>
  </div>
  </div>

</template>

<script>
export default {
  name: "AboutUsView",
  data() {
    return {
      texttop:'联系我们',
      textaboutus: '邮箱：1414313124@qq.com<br>联系电话：8888-8888-88 <br> 邮政编码：00000 <br> 地址：广州城市理工学院',
      zswa: ['培训机构管理系统助你轻松应对市场变化',
        '信息化建设助推培训行业发展新篇章',
        '大数据与智能技术,推动培训机构管理迈入新时代',
      '智慧校园来了!培训机构也要"智能化"',
        '云服务助力培训机构实现低成本扩容'],
      zsjh:['JAVA','C++',"C#","Python"],
    }
  } ,
  methods:{
    EnrollmentPlan(){
      this.$router.push("/enrollmentplan")
    }
  }
}
</script>

<style>

</style>