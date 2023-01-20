<template>
  <!-- 헤더-->
  <div class="selection_container">
    <!-- 메인 3개 column -->
    <Section />
  </div>
</template>

<script>
import Section from '@/components/Section.vue'
export default {
  components: {
    Section,
  },
  data: () => ({
    defaultSection: [
      {
        name: 'TODO',
      },
      {
        name: 'DOING',
      },
      {
        name: 'Complated',
      },
    ],
  }),
}
</script>

<style>
.selection_container {
  display: flex;
  flex-direction: row;
  border: solid 1px gray;
}
</style>
