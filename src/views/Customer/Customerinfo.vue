<template>
<div >
  <el-descriptions title="用户信息" column="2">
    <el-descriptions-item label="用户名">{{ username }}</el-descriptions-item>
    <el-descriptions-item label="手机号">{{ phone }}</el-descriptions-item>
    <el-descriptions-item label="邮箱">{{mail}}</el-descriptions-item>
    <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
  </el-descriptions>
</div>
</template>

<script>
export default {
  name: "Customerinfo",
  data() {
    return {
      username:'小明',
      phone: "13392734321",
      mail: "11111111111@gmail.com"
    }
}
}
</script>

<style scoped>

</style>