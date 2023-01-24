<template>
  <!-- 헤더-->
  <div class="selection_container">
    <!-- 메인 3개 column -->
    <Section v-for="(selection, index) in SelectionList" :key="index" :name="selection.name" />
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
        name: 'ToDo',
      },
      {
        name: 'Doing',
      },
      {
        name: 'Complate',
      },
    ],
  }),
  mounted() {
    const sesstionData = sessionStorage.getItem('todolist')
    sessionStorage.setItem(
      'todolist',
      JSON.stringify([
        {
          workName: 'test1',
          description: 'empty',
          targetName: 'ToDo',
        },
      ]),
    )
    if (!!sesstionData) {
      this.$store.dispatch('SET_TODOLIST', JSON.parse(sesstionData))
    } else {
      this.$store.dispatch('SET_TODOLIST', [
        {
          workName: 'test1',
          description: 'empty',
          targetName: 'ToDo',
        },
      ])
    }
  },
  computed: {
    SelectionList() {
      return this.defaultSection
    },
  },
}
</script>

<style>
.selection_container {
  display: flex;
  flex-direction: row;
  border: solid 1px gray;
}
body {
  user-select: none;
}
</style>
