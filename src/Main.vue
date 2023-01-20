<template>
  <!-- 헤더-->
  <div class="selection_container">
    <!-- 메인 3개 column -->
    <Selection />
  </div>
</template>

<script>
import Selection from './components/Selection.vue'
export default {
  computed: {
    Selection,
  },
}
</script>

<style>
.selection_container {
  display: flex;
  flex-direction: row;
  border: solid 1px gray;
}
</style>
