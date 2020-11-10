<template>
  <div class="y-form-item">
    <label v-if="label" v-text="label"></label>
    <slot ref="a"></slot>
    <!-- 校验后存放提示信息 -->
    <p v-if="error" v-text="error" style="margin: 0; color: red"></p>
  </div>
</template>

<script>
// 引入第三方校验库
import Schema from "async-validator";
export default {
  inject: ["form"],
  data() {
    return {
      error: "",
    };
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: {
      type: String,
      default: "",
    },
  },
  mounted() {
    // 谁派发谁监听原则，在子组件中进行了派发
    // 自动监听
    this.$on("validate", () => {
      this.validate();
    });
  },
  methods: {
    validate() {
      // 校验规则是什么？
      //console.log(this.form.rules[this.prop]);
      const rules = this.form.rules[this.prop];
      // 校验哪些值
      //console.log(this.form.model[this.prop]);
      const value = this.form.model[this.prop];

      // 创建校验描述对象
      const desc = {
        [this.prop]: rules,
      };

      // 开始校验
      const schema = new Schema(desc);
      schema.validate(
        {
          [this.prop]: value,
        },
        (errors) => {
          if (errors) {
            this.$nextTick(() => {});
            this.$children[0].$refs.input.classList.add("error");
            // this.error = errors[0].message;
          } else {
            // this.error = "";
            this.$children[0].$refs.input.classList.remove("error");
          }
        }
      );
    },
  },
};
</script>

<style scoped>
label {
  display: inline-block;
  width: 120px;
  height: 40px;
  line-height: 40px;
  text-align: right;
  padding: 0 10px 0 10px;
}
.y-form-item {
  width: 100%;
  height: 100%;
  margin: 10px 0 10px 0;
}
</style>