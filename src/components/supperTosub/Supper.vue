<template >
<div>
  <div>
    <span><input v-model="inputvlaue"></span>
    <span><button @click="submititem">提交</button></span>
  </div>
  <ul>
    <!--父类与子类通信息通过属性传值 content和index属性传给子类，属性必须绑定并且必须监听子类$emit中的@方法，子类通过props接收-->
    <subitem
      v-for="(item ,index) in list"
      :key="index"
      :supmessage="item"
      :itemid="index"
      @deleteitem="deletemsg"
    ></subitem>
  </ul>
</div>
</template>
<script>
/* 父组件引用子组件 1.引入组件和申明组件 */
import Subitem from './Subitem'
export default {
  /* 2.使用components申明组件 */
  components: {
    Subitem
  },
  data () {
    return {
      inputvlaue: '',
      list: []
    }
  },
  methods: {
    submititem () {
      // eslint-disable-next-line no-unused-expressions,no-undef,no-sequences
      this.list.push(this.inputvlaue),
      this.inputvlaue = ''
    },
    deletemsg (index) {
      this.list.splice(index, 1)
    }
  }
}
</script>
<style scoped>
</style>
