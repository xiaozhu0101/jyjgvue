<template>
<div >
  <el-descriptions title="用户信息" column="2">
    <el-descriptions-item label="id">{{ user.id }}</el-descriptions-item>
    <el-descriptions-item label="用户名">{{ user.name }}</el-descriptions-item>
    <el-descriptions-item label="手机号">{{ user.phone }}</el-descriptions-item>
    <el-descriptions-item label="邮箱">{{user.email}}</el-descriptions-item>
  </el-descriptions>
</div>
</template>

<script>
export default {
  name: "Customerinfo",
  data() {
    return {
      userid:'',
      user: {}
    }
},
  created() {
    this.userid=localStorage.getItem("userid")


    let user_temp = {}
    user_temp.phone = this.userid

    this.$axios.post('http://localhost:8000/customer/query', user_temp)
        .then(res => {
          this.user = res.data.data[0]
          // console.log(this.user)
        })
  }
}
</script>

<style scoped>

</style>