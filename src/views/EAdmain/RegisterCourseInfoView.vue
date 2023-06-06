<template>
  <div>
  <el-table
      :data="courseForm.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase())  )"
      style="width: 100%"
      border
  >

    <el-table-column
        prop="customerId"
        label="报名人id"
        width="150">
    </el-table-column>
    <el-table-column
        prop="teacher"
        label="课程id"
        width="150">
    </el-table-column>
    <el-table-column
        prop="intentionDate"
        label="报名时间"
        width="180">
    </el-table-column>

    <el-table-column
        prop="endTime"
        label="是否退课"
        width="180">
    </el-table-column>
    <


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
            @click="add(scope.$index, scope.row)" >查看评论</el-button>
      </template>

    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
  name: "RegisterCourseInfoView",
  data() {
    return {
      search:'',
      courseForm:{},
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

}
</script>

<style scoped>

</style>