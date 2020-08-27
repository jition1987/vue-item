<template >
      <div>
        <div>{{msg}}</div>
        <span> <router-link to="/">返回</router-link></span>
        <span> <router-link to="/a">A页面</router-link></span>
        <span><router-link to="/a1">子页面1</router-link></span>
        <span><router-link to="/a2">子页面2</router-link></span>
    </div>
</template>

<script>
export default {
  /* 定义组件名称 */
  /* name: 'Todolist', */
  data () {
    return {
      msg: 'this frist modify'
    }
  }
}
</script>

<style scoped>

</style>
