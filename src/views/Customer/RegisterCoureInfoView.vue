<template>
<div>
  <h4 style="float: left">报名课程信息</h4>
  <el-table
      :data="tableData"
      style="width: 100%">
    <el-table-column
        prop="course"
        label="课程"
        width="180">
    </el-table-column>
    <el-table-column
        prop="teacher"
        label="教师"
        width="180">
    </el-table-column>
    <el-table-column
        prop="classroom"
        label="课室"
        width="180">
    </el-table-column>
    <el-table-column
        prop="date"
        label="开课时间"
        width="120">
    </el-table-column>
    <el-table-column label="操作" align="right">
      <template slot-scope="scope">
        <el-button
            size="mini"
            type="danger"
            @click="courseDelete( scope.row)">取消报名</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
export default {
  name: "RegisterCoureInfoView",
  data() {
    return {
      isdanger:"",

      tableData: [{course:'java',teacher:'王老师',classroom:'a1-302',date:"6月1日 13：40"},
        {course:'C',teacher:'张老师',classroom:'a1-302',date:"6月1日 16：40"},
        {course:'C++',teacher:'赵老师',classroom:'a1-302',date:"6月3日 13：40"},
        {course:'Python',teacher:'李老师',classroom:'a1-302',date:"6月4日 13：40"},
        {course:'项目管理',teacher:'王老师',classroom:'a1-302',date:"6月5日 13：40"},],
    }
  },
  methods: {
    courseDelete(row) {
    },
  }
}
</script>

<style scoped>

</style>