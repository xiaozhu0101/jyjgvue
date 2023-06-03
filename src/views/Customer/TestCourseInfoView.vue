<template>
  <div>
    <h4 style="float: left">试课记录</h4>
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
      <el-table-column label="课程状态" align="right" prop="type">
        <el-tag >{{ istext }}</el-tag>
      </el-table-column>
      <el-table-column label="操作" align="right">
        <template slot-scope="scope">
          <el-button
              size="mini"
              type="danger"
              @click="courseDelete( scope.row)">评价</el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
export default {
  name: "TestCourseInfoView",
  data() {
    return {
      tagtype:"info",
      istext:'未试课',
      tableData: [{course:'java',teacher:'王老师',classroom:'a1-302',date:"6月1日 13：40",type:'试课'},
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
