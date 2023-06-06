<template>
  <div>
    <h4 style="float: left">报名信息管理</h4>
    <div >
      <el-table
          :data="tabledate.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase())  )"
          style="width: 100%"
          border
      >

        <el-table-column
            prop="id"
            label="id"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="报名人姓名"
            width="180"
        >
        </el-table-column>
        <el-table-column
            prop="phone"
            label="联系电话"
            width="180">
        </el-table-column>
        <el-table-column
            prop="course"
            label="课程名"
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
                type="danger"
                size="mini"
                @click="deleteinfo(scope.$index, scope.row)" >删除</el-button>
          </template>

        </el-table-column>
      </el-table>
    </div>

  </div>
</template>

<script>
export default {
  name: "CourseingInfoView",
  data() {
    return {
      tabledate: [],
      search: '',
    };
  }
}
</script>

<style scoped>

</style>