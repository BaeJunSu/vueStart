<template>
  <div class="selection item_container">
    <div class="selection_title">{{ name }}</div>
    <hr />
    <Item
      v-for="(item, index) in childWork"
      :key="index"
      :targetName="item.targetName"
      :workName="item.workName"
      :description="item.description"
      @edit="editHandler"
    />
    <AddItem :target="name" />
  </div>
</template>

<script>
import Item from '@/components/Item.vue'
import AddItem from '@/components/AddItem.vue'
export default {
  props: {
    name: String,
  },
  components: { Item, AddItem },
  data: () => ({
    workList: [],
  }),
  mounted: () => {},
  computed: {
    childWork() {
      //const list = []
      const list = this.$store.getters.getItems
        ? this.$store.getters.getItems.filter((item) => item.targetName === this.name)
        : []
      return list
    },
  },
  methods: {
    editHandler(item) {
      console.log('editHandler', item)
      this.$emit('edit', item)
    },
  },
}
</script>

<style>
.selection {
  flex: 1;
  flex-direction: column;
  height: 100%;
  border: 1px solid lightgray;
}
.item_container {
  min-width: 200px;
}
hr {
  background: lightgray;
  height: 1px;
  border: 0;
}
</style>
