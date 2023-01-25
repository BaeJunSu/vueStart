<template>
  <!-- 헤더-->
  <div class="selection_container">
    <!-- 메인 3개 column -->
    <Section
      v-for="(selection, index) in selectionList"
      :key="index"
      :name="selection.name"
      @edit="startEdit"
    />
    <EditItem v-if="isEditMode" :editData="editData" @end="endEdit" />
  </div>
</template>

<script>
import Section from '@/components/Section.vue'
import EditItem from '@/components/EditItemDialog.vue'
export default {
  components: {
    Section,
    EditItem,
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
    isEditMode: false,
    editData: {},
  }),
  watch: {
    selectionList: function (newVal, oldVal) {
      this.defaultSection = newVal
    },
  },
  mounted() {
    this.$store.dispatch('SET_TODOLIST', [
      {
        workName: 'test1',
        description: 'empty',
        targetName: 'ToDo',
      },
    ])
    this.$store.state.targetList = this.defaultSection
  },
  computed: {
    selectionList() {
      return this.$store.getters.getTargets
    },
  },
  methods: {
    startEdit(item) {
      this.editData = item
      this.isEditMode = true
    },
    endEdit(item) {
      this.isEditMode = false
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
