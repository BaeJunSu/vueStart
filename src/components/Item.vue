<template>
  <div @mouseup="editMouseUpHandler()">
    <div class="item">{{ description }}</div>
    <div class="item">{{ workName }}</div>
  </div>
</template>

<script>
export default {
  props: {
    targetName: String,
    workName: String,
    description: String,
  },
  methods: {
    editMouseUpHandler() {
      this.$emit('edit', {
        targetName: this.targetName,
        workName: this.workName,
        description: this.description,
      })
    },
  },
}
</script>

<style>
.item {
  pointer-events: none;
}
</style>
