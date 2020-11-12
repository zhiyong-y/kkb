<template>
  <div>
    <!-- 插槽用于放置yformiterm -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      form: this,
    };
  },
  props: {
    model: {
      type: Object,
      default: null,
      required: true,
    },
    rules: {
      type: Object,
    },
  },
  methods: {
    validate(callback) {
      // 获取所有的yformitem，且这些item必须要有prop属性
      const res = this.$children
        .filter((item) => item.prop) // 过滤掉没有prop（不需校验的yformitem）
        .map((item) => item.validate());

      // res返回的是一个Promise的数组
      // 使用Promise.all处理结果
      Promise.all(res)
        .then(() => {
          callback(true);
        })
        .catch(() => {
          callback(false);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>