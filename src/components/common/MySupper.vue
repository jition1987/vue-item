<!-- 父组件 -->
<template>
  <div>
<!--
    <my-child :parentMessage="parentMessage"></my-child>
-->
    <mychilder></mychilder>
  </div>
</template>

<script>
import MyChild from '@/components/common/MyChild'
import Mychilder from '../supperTosub/Mychilder'
export default {
  components: {
    MyChild,
    Mychilder
  },
  data () {
    return {
      msg: ''
    }
  }
}
</script>
