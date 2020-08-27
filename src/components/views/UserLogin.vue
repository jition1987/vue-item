<template>
<div>
  <el-form  :model="model" :rules="rules" >
    <el-form-item label="用户名" prop="username">
      <el-input v-model="model.username" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="model.password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="mysum">提交</el-button>
      <el-menu ></el-menu>
    </el-form-item>
  </el-form>
</div>
</template>
<script>
export default {
  data () {
    return {
      model: {
        username: '',
        password: ''
      },
      rules: {
        username:
          { required: true,
            message: '用户名不能为空',
            trigger: 'blur'
          },
        password: {
          required: true,
          message: '密码不能为空',
          trigger: 'blur'
        }
      }
    }
  },
  methods: {
    mysum  () {
      console.log(' 获取当前用户：' + this.model.username + ':' + this.model.password)
      let uname = this.model.username
      let pass = this.model.password
      if (uname != null && uname.length !== 0 && pass != null && pass.length !== 0) {
        this.$router.push('/usermenue')
      }
    }
  }

}
</script>
<style scoped>
</style>
