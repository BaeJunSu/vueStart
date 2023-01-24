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
        targetName: this.getTarget,
      }
      this.$store.dispatch('MODIFY_TODOITEM', {
        preData: preData,
        newData: newData,
      })
      this.$emit('end', {})
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
</style>
