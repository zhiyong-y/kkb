<template>
  <div>
      <button v-bind="$attrs" class="btn iconfont" ref="button" @click="handler">
          <slot></slot>
      </button>
  </div>
</template>

<script>

export default {
  inheritAttrs: false,
  data() {
    return {
      size: "",
      type: "",
      isDisabled: false,
      icons: "iconfont ",
    };
  },
  props: {},
  mounted() {
    const _btn = this.$refs.button;
    !this.$attrs.size ? _btn.classList.add("btn-normal") : _btn.classList.add("btn-"+this.$attrs.size);
    !this.$attrs.type ? _btn.classList.add("btn-primary") : _btn.classList.add("btn-"+this.$attrs.type);
    this.$attrs.disabled ? _btn.classList.add("btn-disabled") : _btn.classList.remove("btn-disabled");
    this.$attrs.icon ? _btn.classList.add(this.$attrs.icon) : _btn.classList.remove(this.$attrs.icon);
  },
  methods: {
    handler() {
      this.$emit('click')
    }
  },
};
</script>

<style scoped>
@import 'https://at.alicdn.com/t/font_2170330_qrz3v2wtsig.css';
.btn {
  border-radius: 4px;
  background: transparent;
  border: 0px solid #e3e3e3;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px !important;
}

.btn-disabled {
  cursor: not-allowed;
}

.btn-normal {
  width: 80px;
  height: 40px;
}

.btn-small {
  width: 60px;
  height: 30px;
}

.btn-large {
  width: 100px;
  height: 50px;
}

.btn-primary {
  background-color: #00a3cc;
  color: #ffffff;
  transition: background-color 0.6s;
}

.btn-primary:hover {
  background-color: rgba(0, 163, 203, 0.8);
  color: #ffffff;
  transition: background-color 0.6s;
}

.btn-success {
  background-color: #64d96f;
  color: #ffffff;
  transition: background-color 0.6s;
}

.btn-success:hover {
  background-color: rgba(100, 217, 111, 0.8);
  color: #ffffff;
  transition: background-color 0.6s;
}

.btn-warning {
  background-color: #ff6d48;
  color: #ffffff;
  transition: background-color 0.6s;
}

.btn-warning:hover {
  background-color: rgba(255, 109, 72, 0.8);
  color: #ffffff;
  transition: background-color 0.6s;
}

.btn-error {
  background-color: #c63300;
  color: #ffffff;
  transition: background-color 0.6s;
}

.btn-error:hover {
  background-color: rgba(198, 51, 0, 0.8);
  color: #ffffff;
  transition: background-color 0.6s;
}
</style>