<template>
<el-container style="height: 500px; border: 1px solid #eee">
  <left></left>
  <div class="mainlist">
    <right-header></right-header>
    <right-main></right-main>
    <right-footer></right-footer>
  </div>
</el-container>
</template>

<style>
  .mainlist {
    width: auto;
  }
</style>
<script>
import Left from './Left'
import RightHeader from './RightHeader'
import RightMain from './RightMain'
import RightFooter from './RightFooter'
export default {
  components: {
    Left,
    RightHeader,
    RightMain,
    RightFooter
  },
  data () {
    return {
    }
  }
}
</script>
