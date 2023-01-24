<template>
  <div v-if="!isEditMode">
    <button type="button" class="plus_add_button" value="" @mouseup="addMouseUpHandler()">
      <span class="icon_add" aria-hidden="true">
        <svg width="13" height="13">
          <path
            d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"
            fill="currentColor"
            fill-rule="evenodd"
          />
        </svg>
      </span>
      작업 추가
    </button>
  </div>
  <div v-else>
    <br />
    <div
      contenteditable="true"
      ref="workName"
      aria-multiline="true"
      role="textbox"
      data-typist-editor="true"
      placeholder="작업이름"
      class="workName"
    ></div>
    <div
      contenteditable="true"
      ref="workDetail"
      aria-multiline="true"
      role="textbox"
      data-typist-editor="true"
      placeholder="설명"
      class="workDetail"
    ></div>
    <button :disabled="btnEnable" @mouseup="editMouseUpHandler()">취소</button>
    <button :disabled="btnEnable" @mouseup="applyMouseUpHandler()">작업 추가</button>
  </div>
</template>

<script>
export default {
  props: {
    target: String,
  },
  components: {},
  data: () => ({
    isEditMode: false,
  }),
  computed: {
    btnEnable() {
      return this.isEditMode && this.$refs.workName?.innerText && this.$refs.workDetail?.innerText
    },
  },
  methods: {
    addMouseUpHandler() {
      this.isEditMode = !this.isEditMode
    },
    applyMouseUpHandler() {
      const data = {
        workName: this.$refs.workName?.innerText,
        description: this.$refs.workDetail.innerText,
        targetName: this.target,
      }
      this.$store.dispatch('SET_TODOITEM', data)
      this.isEditMode = !this.isEditMode
    },
  },
}
</script>

<style>
.lb_work {
  display: inline;
}
[placeholder]:empty:before {
  content: attr(placeholder);
  color: lightgray;
}
p {
  outline: none !important;
}
</style>
