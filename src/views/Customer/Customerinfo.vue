<template>
<div >
  <el-descriptions title="用户信息" column="2">
    <el-descriptions-item label="id">{{ user.id }}</el-descriptions-item>
    <el-descriptions-item label="用户名">{{ user.username }}</el-descriptions-item>
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
      user:''
    }
},
  created() {
    console.log(localStorage.getItem("userid"))
    this.axios.request({
      method: 'GET',
      url: 'http://localhost:8000/customer/query',
      params: {
        phone: localStorage.getItem("userid")
      }
    }).then(res => {
          this.user=res.data
        })
  }
}
</script>

<style scoped>

</style>