<template>
  <div class="bg">
    <div class="editBox">
      <h2>{{ getName }}</h2>
      <div
        contenteditable="true"
        ref="workDetail"
        aria-multiline="true"
        role="textbox"
        data-typist-editor="true"
        placeholder="설명"
        class="workDetail"
      >
        {{ getDetail }}
      </div>
      <div class="targetBox" v-for="(item, index) in getTargets" :key="index">
        <input type="radio" @change="change(item)" name="radio" :checked="item === getTarget" />
        <label>{{ item }}</label>
      </div>
      <br />
      <button :disabled="btnEnable" @mouseup="cancelHandler()">취소</button>
      <button :disabled="btnEnable" @mouseup="applyMouseUpHandler()">변경</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    editData: {
      workName: String,
      description: String,
    },
  },
  data: () => ({
    target: null,
  }),
  computed: {
    getName() {
      return this.editData?.workName ? this.editData?.workName : ''
    },
    getDetail() {
      return this.editData?.description ? this.editData?.description : ''
    },
    getTarget() {
      return this.editData?.targetName ? this.editData?.targetName : ''
    },
    btnEnable() {
      return this.$refs.workDetail?.innerText
    },
    getTargets() {
      const list = []
      this.$store.getters.getTargets.forEach((element) => {
        list.push(element['name'])
      })
      console.log('getTargets', list)
      return list
    },
  },
  methods: {
    cancelHandler() {
      this.$emit('end', {})
    },
    applyMouseUpHandler() {
      const preData = {
        workName: this.getName,
        description: this.getDetail,
        targetName: this.getTarget,
      }
      const newData = {
        workName: this.getName,
        description: this.$refs.workDetail.innerText,
        targetName: this.target ? this.target : this.getTarget,
      }
      this.$store.dispatch('MODIFY_TODOITEM', {
        preData: preData,
        newData: newData,
      })
      this.$emit('end', {})
    },
    change(item) {
      this.target = item ? item : this.getTarget
      console.log('change!!!', this.target)
    },
  },
}
</script>

<style>
.bg {
  position: fixed;
  isolation: isolate;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 100px;
}
.editBox {
  padding: 10px;
  background-color: white;
}
.targetBox {
  overflow: auto;
  display: inline;
  margin-right: 10px;
}
</style>
