<template>
  <div class="input-box">
    <input
      :type="type"
      :value="value"
      @input="onInput"
      v-bind="$attrs"
      ref="input"
      class="y-input"
    />
  </div>
</template>

<script>
export default {
  // 只要父组件使用了provide，子组件/孙子组件都可使用inject接收
  inject: ["form"],
  inheritAttrs: false,
  data() {
    return {
      // maxlength: null
      error: '123'
    };
  },
  props: {
    value: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    }
    // 对于非绑定属性，可以直接在元素上使用v-bind="$attrs"直接展开$attrs
    // placeholder: {
    //   type: String,
    //   default: "",
    // },
  },
  mounted() {
    // 已经使用了v-bind='$attrs'展开了未使用props传递的参数
    //this.maxlength = this.$attrs.maxlength;
  },
  methods: {
    onInput(e) {
      // 派发事件，实现双向绑定
      this.$emit("input", e.target.value);

      // 谁派发谁监听
      this.$parent.$emit('validate')
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.input-box {
  display: inline;
  .y-input {
    width: auto;
    min-width: 200px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    cursor: pointer;
    transition: border 0.5s;
    font-size: 14px;
    text-indent: 10px;
    &:hover {
      border: 1px solid #c0c4cc;
      transition: border 0.5s;
    }
  }
}
.error {
    border: 1px solid #CF261D !important;
}
.error::placeholder {
    color: #CF261D;
}
</style>