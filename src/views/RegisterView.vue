<template>
<!--  注册用户-->
  <div class="allmain">
    <div class="admin" >
      <div class="pos" v-loading="loading">
        <h1 class="adminh1">用户注册</h1>
        <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
        >
          <el-form-item label="*手机号：" prop="id">
            <el-input
                prefix-icon="el-icon-user"
                type="text"
                v-model="ruleForm.phone"
                autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="*密 码：" prop="pass">
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
          <el-form-item label="*用户类型:">
            <el-radio-group v-model="userkind">
              <el-radio label="1">学员</el-radio>
              <el-radio label="2">招生员</el-radio>
            </el-radio-group>
          </el-form-item>

            <el-button type="primary" @click="submitForm('ruleForm')"
            >注册</el-button
            >
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
        callback(new Error("请输入手机号"));
      } else {
        if (this.ruleForm.phone !== "") {
          this.$refs.ruleForm.validateField("id");
        }
        callback();
      }
    };
    var validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入姓名"));
      } else {
        if (this.ruleForm.name !== "") {
          this.$refs.ruleForm.validateField("id");
        }
        callback();
      }
    };
    var validateMail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else {
        if (this.ruleForm.email !== "") {
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
      userkind:'1',
      ruleForm: {
        password: "",
        phone: "",
        name:"",
        email:"",
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        phone: [{ validator: validateId, trigger: "blur" }],
        name: [{ validator: validateName, trigger: "blur" }],
        email: [{ validator: validateMail, trigger: "blur" }],


      },
    };
  },
  methods: {
    // 表单验证
    submitForm(formName) {

      this.$axios.post('http://localhost:8000/customer/register', this.ruleForm

    )
        .then(res => {
          if (res.data.code == 1) {
            this.loading = true;
            setTimeout(() => {
              this.loading = false;

              this.$message({
                message: '恭喜你，注册成功',
                type: 'success'
              });

              this.$router.push("/login")
            }, 500);

          } else {
            this.loading = true;
            setTimeout(() => {
              this.loading = false;
              this.$message.error('注册失败');
              return false;
            }, 2000);

          }
        })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    EnrollmentPlan(){
      this.$router.push("/enrollmentplan")
    }
  },
};
</script>

<style>



.admin {

  margin-left: 20%;
  margin-right: 20%;
  width: 60%;
  height: 480px;
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
