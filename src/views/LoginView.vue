<template>
  <div class="allmain">
    <div class="admin" >
      <div class="pos" v-loading="loading">
        <h1 class="adminh1">用户登录</h1>
        <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
        >
          <el-form-item label="手机号：" prop="id">
            <el-input
                prefix-icon="el-icon-user"
                type="text"
                v-model="ruleForm.id"
                autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="密 码：" prop="pass">
            <el-input
                prefix-icon="el-icon-menu"

                show-password
                type="password"
                v-model="ruleForm.pass"
                autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="用户类型:">
            <el-radio-group v-model="ruleForm.userkind">
              <el-radio label="1">学员</el-radio>
              <el-radio label="2">招生员</el-radio>
              <el-radio label="3">管理员</el-radio>
            </el-radio-group>
          </el-form-item>
          <div style="width: 100%">
            <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
            >
          </div>
          <span style="float: right;font-size: 10px">
              <a href="http://localhost:8080/register">没有账号？</a>
            </span>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    var validateId = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户信息"));
      } else {
        if (this.ruleForm.id !== "") {
          this.$refs.ruleForm.validateField("id");
        }
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 4 || value.length > 13) {
        callback(new Error("长度必须在4-12之内!"));
      } else {
        callback();
      }
    };
    return {
      loading: false,
      ruleForm: {
        pass: "",
        id: "",
        userkind:'1',
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        id: [{ validator: validateId, trigger: "blur" }],
      },
    };
  },
  methods: {
    // 表单验证
    submitForm(formName) {
      this.$axios.post('/login', this.ruleForm)
          .then(res => {
        if (valid) {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
          }, 2000);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style>



.admin {

  margin-left: 20%;
  margin-right: 20%;
  width: 60%;
  height: 400px;
  background: #fff;
  border-radius: 5%;
  box-shadow: 8px 10px 10px rgb(177, 223, 242);

}
.adminh1 {
  margin: 20px 0;
  text-shadow: 10px 13px 3px rgb(207, 207, 207);
  text-align: center;
}
.pos {
  margin-right: 22%;
  margin-left: 22%;
  padding-top: 20px;

  width: 56%;
  height: 350px;

  top: 25px;
  left: 25px;
}
</style>
