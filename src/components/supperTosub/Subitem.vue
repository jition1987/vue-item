<template>
  <div>
  <li @click="delmes">{{ supmessage }}</li>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '删除成功！'
    }
  },
  methods: {
    delmes () {
      console.log(' 选择id为：' + this.itemid)
      /* 子类通过$emit通知父类,父类必须在组件上进行监听 */
      this.$emit('deleteitem', this.itemid)
    }
  },
  /* 父类传递到子类中是通过绑定属性方式 */
  props: ['itemid', 'supmessage']

}
</script>
<style scoped>
</style>
