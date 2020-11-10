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
        form: this
    }
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
};
</script>

<style lang="scss" scoped>
</style>