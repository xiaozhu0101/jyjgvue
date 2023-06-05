<template>

  <div >
    <el-descriptions title="管理员信息" column="2">
      <el-descriptions-item label="id">{{ user.id }}</el-descriptions-item>
      <el-descriptions-item label="用户名">{{ user.name }}</el-descriptions-item>
      <el-descriptions-item label="手机号">{{ user.phone }}</el-descriptions-item>
      <el-descriptions-item label="邮箱">{{user.email}}</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  name: "AdministratorsInfoView"
}
</script>

<style scoped>

</style>