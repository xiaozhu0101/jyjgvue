<template>
  <div>
    <h4 style="float: left">招生计划管理</h4>

    <div >
      <el-button type="primary" style="float: right" @click="add">新增招生计划</el-button>
    <el-table
        :data="courseForm.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase())  )"
        style="width: 100%"

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
              placeholder="输入标题信息搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="drawer(scope.$index, scope.row)" >查看详情</el-button>
          <el-button
              type="danger"
              size="mini"
              @click="deleteinfo(scope.$index, scope.row)" >删除</el-button>
        </template>

      </el-table-column>
    </el-table>
    </div>
    <el-drawer
        :visible.sync="drawer1"
    >
      <div >
        <el-form
            :model="ruleForm"
            status-icon
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
        >
          <el-form-item label="标题：" prop="title">
            <el-input
                type="text"
                v-model="ruleForm.title"
                autocomplete="off"
            ></el-input>
          </el-form-item>

<!--          <el-form-item label="开始时间：" prop="startDate">-->
<!--            <el-input-->
<!--                type="text"-->
<!--                v-model="ruleForm.startDate"-->
<!--                autocomplete="off"-->
<!--            ></el-input>-->
<!--          </el-form-item>-->
<!--          <el-form-item label="结束时间：" prop="endDate">-->
<!--            <el-input-->
<!--                type="text"-->
<!--                v-model="ruleForm.endDate"-->
<!--                autocomplete="off"-->
<!--            ></el-input>-->
<!--          </el-form-item>-->
<!--          <el-form-item label="创建时间：" prop="endDate">-->
<!--            <el-input-->
<!--                type="text"-->
<!--                v-model="ruleForm.createdAt"-->
<!--                autocomplete="off"-->
<!--            ></el-input>-->
<!--          </el-form-item>-->

          <el-form-item label="内容：" prop="endDate">
            <el-input
                type="text"
                v-model="ruleForm.content"
                autocomplete="off"
            ></el-input>
          </el-form-item>

          <el-button type="primary" @click="submitForm('ruleForm')"
          >修改</el-button
          >
        </el-form>
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
      courseForm:[],
      search:'',
      ruleForm: {},
    }
  },
  created() {
    this.$axios.get('http://localhost:8000/enrollmentPlan/page', {
      params: {
        page: 1,
        pageSize: 10,
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
    deleteinfo(row){

    },
    submitForm(){
      this.$axios.post('http://localhost:8000/admin/updateplan',
          this.ruleForm)
          .then(res => {
            this.$message({
              message: '更新成功',
              type: 'success'
            });
          })
          .catch(err => {
            this.$message({
              message: '更新失败',
              type: 'success'
            });
          })
    },

    drawer(index,row){
      this.drawer1 = true
      this.ruleForm = row
      console.log(this.ruleForm)
    },
    add(){

    }

  }
}
</script>

<style>

</style>