<template>
<div>
  <el-table
      :data="courseForm.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase())  )"
      style="width: 100%"
      border
  >

    <el-table-column
        prop="name"
        label="课程名"
        width="150">
    </el-table-column>
    <el-table-column
        prop="teacher"
        label="教师名"
        width="150">
    </el-table-column>
    <el-table-column
        prop="startTime"
        label="开课时间"
        width="180">
    </el-table-column>
    <el-table-column
        prop="endTime"
        label="结课时间"
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
      <el-descriptions title="报名人数" column="1">
        <el-descriptions-item label="num">{{ couse.title }}</el-descriptions-item>

      </el-descriptions>
    </div>
  </el-drawer>
</div>
</template>

<script>
export default {
  name: "CouserInfoView",
  data() {
    return {
      drawer1:false,
      search:'',
      courseForm:{},
      couse:'',
    }
  },
  created() {

    this.$axios.post('http://localhost:8000/course/getcourse', {
      params: {
        name:'',
        page: 1,
        pageSize: 50,
      }
    })
        .then(res => {
          console.log(res)
          this.courseForm=res.data.data.rows
        })
        .catch(err => {
          console.log(err)
        })
  },
  methods:{
    drawer(index,row){
      this.drawer1 = true
      this.couse = row
    }
  }

}
</script>

<style scoped>

</style>