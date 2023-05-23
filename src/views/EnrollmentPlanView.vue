<template>
  <!--招生计划-->
  <div class="allmain">
    <div class = "block" >
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
                  :data="courseForm.filter(data => !search || data.course.toLowerCase().includes(search.toLowerCase()) ||data.teacher.toLowerCase().includes(search.toLowerCase()) )"
                  style="width: 100%"
                  :cell-style="{ background:'#d4e4e5'}"
                  :header-cell-style="{
                  background:'#d4e4e5'}"
                  border
                  @row-click="rowClick">

                <el-table-column
                    prop="course"
                    label="课程"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="teacher"
                    label="教师"
                    width="100"
                >
                </el-table-column>
                <el-table-column
                    prop="date"
                    label="开课时间">
                </el-table-column>
                <el-table-column
                    prop="num"
                    label="课程容量"
                    width="100">
                </el-table-column>
                <el-table-column
                    align="right">
                  <template slot="header" slot-scope="scope">
                    <el-input
                        v-model="search"
                        size="mini"
                        placeholder="输入课程或老师信息搜索"/>
                  </template>
                </el-table-column>
              </el-table>
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
      texttop:'招生计划',
      textaboutus: '邮箱：1414313124@qq.com<br>联系电话：8888-8888-88 <br> 邮政编码：00000 <br> 地址：广州城市理工学院',
      zswa: ['本田预计2025年推无人驾驶汽车 比其他公司晚5年',
        '针对日本市场推出Link移动 VR 头盔:U11专属',
        '普及太快！我们该不该对机器人征税呢',
        '解放人类的双手 机器人尝试自主学习抓取物体'],
      zsjh:['JAVA','C++',"C#","Python"],
      courseForm:[{course:'java',teacher:'王老师',date:'2023-6-1',num:59},
        {course:'C',teacher:'张老师',date:'2023-6-1',num:20},
        {course:'C++',teacher:'赵老师',date:'2023-6-1',num:40},
        {course:'Python',teacher:'李老师',date:'2023-6-1',num:29},
        {course:'项目管理',teacher:'王老师',date:'2023-6-1',num:49},],
      search: '',
    }
  },
  methods: {
    onSubmit(course) {

    },
    rowClick(row){

    }
    ,
      EnrollmentPlan(){
        this.$router.push("/enrollmentplan")
      }
  }
}
</script>

<style>

</style>