<template>
  <div class="tips-box" v-if="isShow">
    <div :class="['tips-item', type]">
      <span>{{ title }}</span>
      <span>{{ message }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "提示",
    },
    message: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "normal",
    },
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    show() {
      this.isShow = true;
      setTimeout(() => {
        this.hide()
      }, 3000);
    },
    hide() {
      this.isShow = false;
      // 用完销毁
      // create中提供一个remove方法
      this.remove();
    },
  },
};
</script>

<style scoped>
.tips-item {
  width: 500px;
  height: 40px;
  margin: auto;
  position: absolute;
  top: 10px;
  left: 50%;
  margin-left: -250px;
  border-radius: 4px;
}
.tips-item span{
  display: inline-block;
  padding: 5px;
  height: calc(100% - 10px);
  line-height: 30px;
  color: #fff;
}
.normal {
  background-color: rgba(50, 150, 200, .7);
}
.success {
  background-color: rgba(0, 204, 102, .7);
}
.error {
  background-color: rgba(255, 0, 50, .7);
}
</style>