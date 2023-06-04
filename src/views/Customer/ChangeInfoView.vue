<template>
  <div>
    <h4 style="float: left">修改个人信息</h4>
    <div class="pos" v-loading="loading">
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
              v-model="ruleForm.phone"
              autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密 码：" prop="pass">
          <el-input
              prefix-icon="el-icon-menu"

              show-password
              type="password"
              v-model="ruleForm.password"
              autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="姓 名：" prop="name">
          <el-input
              prefix-icon="el-icon-user"
              type="text"
              v-model="ruleForm.name"
              autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="邮 件：" prop="mail">
          <el-input
              prefix-icon="el-icon-message"
              type="text"
              v-model="ruleForm.email"
              autocomplete="off"
          ></el-input>
        </el-form-item>


        <el-button type="primary" @click="submitForm('ruleForm')"
        >修改个人信息</el-button
        >
      </el-form>
    </div>

  </div>
</template>

<script>
export default {
  name: "ChangeInfoView",

    data() {

      var validateId = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入用户信息"));
        }else if (value.length = 11) {
          callback(new Error("长度必须是11!"));
        }
        else {
          if (this.ruleForm.phone !== "") {
            this.$refs.ruleForm.validateField("phone");
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
          password: "",
          phone: "",
          id: "",
          name:"",
          email:"",
        },
        rules: {
          pass: [{ validator: validatePass, trigger: "blur" }],
          id: [{ validator: validateId, trigger: "blur" }],
        },
      };
    },
  created() {
    this.userid=localStorage.getItem("userid")
    let user_temp = {}
    user_temp.phone = this.userid
    this.$axios.post('http://localhost:8000/customer/query', user_temp)
        .then(res => {
          this.ruleForm = res.data.data[0]
        })
  },
  methods: {
      // 表单验证
      submitForm(formName) {
        this.$axios.post('http://localhost:8000/customer/updateInf',
            this.ruleForm)
            .then(res => {
              if (res.data.code==1) {
                this.loading = true;


                setTimeout(() => {
                  this.loading = false;
                  this.$message({
                    message: '信息修改成功',
                    type: 'success'
                  });
                  localStorage.setItem("userid" ,this.ruleForm.phone)
                }, 1000);

              } else {
                this.$message({
                  message: '信息修改失败',
                  type: 'danger'
                });
                return false;
              }
            });
      },

    },
  };
</script>

<style >
.pos{
  padding-top: 40px;
  margin: 0 auto;
  width: 50%;
}
</style>