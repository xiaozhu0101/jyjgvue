<template>
  <!--招生计划-->
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
              <span class="block-right"@click="EnrollmentPlan">
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

              <el-breadcrumb separator-class="el-icon-arrow-right" style="float: right;margin-right: 20px;font-size: 12px;margin-top: 3px">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>{{texttop}}</el-breadcrumb-item>
              </el-breadcrumb>
            </div>

            <hr style="margin: 10px ;color: #5a7679">

            <div >

              <el-table
                  :data="courseForm.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase())  )"
                  style="width: 100%"
                  :cell-style="{ background:'#d4e4e5'}"
                  :header-cell-style="{
                  background:'#d4e4e5'}"
                  border
                  >

                <el-table-column
                    prop="title"
                    label="标题"
                    width="180">
                </el-table-column>

                <el-table-column
                    prop="startDate"
                    label="招生开始时间"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="endDate"
                    label="招生结束时间"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="createdAt"
                    label="创建时间"
                    width="180">
                </el-table-column>

                <el-table-column
                    align="right">
                  <template slot="header" slot-scope="scope">
                    <el-input
                        v-model="search"
                        size="mini"
                        placeholder="输入课程信息搜索"/>
                  </template>
                  <template slot-scope="scope">
                    <el-button
                        size="mini"
                        @click="drawer(scope.$index, scope.row)" >查看详情</el-button>
                  </template>

                </el-table-column>
              </el-table>
              <el-drawer
                  :visible.sync="drawer1"
                  >
                <div style="padding-left: 20px">
                <el-descriptions title="课程信息" column="1">
                  <el-descriptions-item label="标题">{{ couse.title }}</el-descriptions-item>
                  <el-descriptions-item label="招生开始时间">{{ couse.startDate }}</el-descriptions-item>
                  <el-descriptions-item label="招生结束时间">{{ couse.endDate }}</el-descriptions-item>
                  <el-descriptions-item label="创建时间">{{ couse.createdAt}}</el-descriptions-item>
                  <el-descriptions-item label="内容">{{ couse.content}}</el-descriptions-item>
                </el-descriptions>
                </div>
              </el-drawer>
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
      drawer1:false,
      couse: {},
      texttop:'招生计划',
      textaboutus: '邮箱：1414313124@qq.com<br>联系电话：8888-8888-88 <br> 邮政编码：00000 <br> 地址：广州城市理工学院',
      zswa: ['培训机构管理系统助你轻松应对市场变化',
        '信息化建设助推培训行业发展新篇章',
        '大数据与智能技术,推动培训机构管理迈入新时代',
        '智慧校园来了!培训机构也要"智能化"',
        '云服务助力培训机构实现低成本扩容'],
      zsjh:['JAVA','C++',"C#","Python"],
      courseForm:[],
      search: '',
    }
  },
  created() {
    this.$axios.get('http://localhost:8000/enrollmentPlan/page', {
      params: {
        page: 1,
        pageSize: 50,
      }
    })
        .then(res => {
         this.courseForm=res.data.data.rows
        })
        .catch(err => {
          console.log(err)
        })
    },
  methods: {


    EnrollmentPlan(){
        this.$router.push("/enrollmentplan")
      },
    drawer(index,row){
      this.drawer1 = true
      this.couse = row
    }
  }
}
</script>

<style>

</style>