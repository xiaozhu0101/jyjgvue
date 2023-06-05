<template>
  <div>
    <h4 style="float: left">招生计划管理</h4>


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
          prop="startDate"
          label="开课时间">
      </el-table-column>
      <el-table-column
          prop="endDate"
          label="结课时间">
      </el-table-column>

      <el-table-column
          align="right">
        <template slot="header" slot-scope="scope">
          <el-input
              v-model="search"
              size="mini"
              placeholder="输入课程或老师信息搜索"/>
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
          <el-descriptions-item label="课程">{{ couse.title }}</el-descriptions-item>
          <el-descriptions-item label="教师">{{ couse.teacher }}</el-descriptions-item>
          <el-descriptions-item label="开课时间">{{ couse.startDate }}</el-descriptions-item>
          <el-descriptions-item label="结课时间">{{ couse.endDate }}</el-descriptions-item>
        </el-descriptions>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "EnrollmentPlanInfoView",
  data() {
    return {
      drawer1: false,
      couse: {},
      courseForm:[],
      search:'',
    }
  },
  methods: {

    drawer(index,row){
      this.drawer1 = true
      this.couse = row
    }
  }
}
</script>

<style scoped>

</style>