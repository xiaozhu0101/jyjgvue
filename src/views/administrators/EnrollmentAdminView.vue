<template>
  <div>
    <h4 style="float: left">招生专员信息</h4>
    <div >
      <el-table
          :data="tabledate.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase())  )"
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
            label="姓名"
            width="180"
        >
        </el-table-column>
        <el-table-column
            prop="phone"
            label="电话"
            width="180">
        </el-table-column>
        <el-table-column
            prop="email"
            label="邮箱"
            width="180">
        </el-table-column>

        <el-table-column
            align="right">
          <template slot="header" slot-scope="scope">
            <el-input
                v-model="search"
                size="mini"
                placeholder="输入姓名信息搜索"/>
          </template>
          <template slot-scope="scope">
            <el-button
                size="mini"
                @click="drawer(scope.$index, scope.row)" >查看详情</el-button>

            <el-button
                type="danger"
                size="mini"
                @click="deleteinfo( scope.row)" >删除</el-button>
          </template>

        </el-table-column>
      </el-table>
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
            <el-form-item label="姓名：" prop="name">
              <el-input
                  type="text"
                  v-model="ruleForm.name"
                  autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item label="电话：" prop="phone">
              <el-input
                  type="text"
                  v-model="ruleForm.phone"
                  autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="邮箱：" prop="email">
              <el-input
                  type="text"
                  v-model="ruleForm.email"
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

  </div>
</template>

<script>
export default {
  name: "EnrollmentAdminView",
  data() {

    return {
      ruleForm:{},
      tabledate:[],
      search:'',
      drawer1: false,
    }

  },
  created() {

    this.$axios.post('http://localhost:8000/admin/findExtensionWorkerByCondition', {
      params: {
        name:'',
        page: 1,
        pageSize: 50,
      }
    })
        .then(res => {
          console.log(res)
          this.tabledate=res.data.data.rows
        })
        .catch(err => {
          console.log(err)
        })
  },
  methods:{
    submitForm(){

    },
    drawer(index,row){
      this.drawer1 = true
      this.ruleForm = row
      console.log(this.ruleForm)
    },
    deleteinfo(row) {
      console.log(row.id)
      this.$axios.post('http://localhost:8000/admin/deleteworker', {
        row
      })
          .then(res => {
            this.$message({
              message: '删除成功',
              type: 'success'
            });

          })
          .catch(err => {
            this.$message({
              message: '删除失败',
              type: 'danger'
            });
            console.log(err)
          })
    }
  }
}
</script>

<style scoped>

</style>