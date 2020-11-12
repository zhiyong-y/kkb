<template>
  <div class="index">
    <img alt="Vue logo" src="../assets/logo.png" />

    <YForm :model="user" :rules="rules" ref="loginForm">
      <YFormItem label="Username:" prop="username">
        <YInput
          type="text"
          v-model="user.username"
          maxlength="10"
          placeholder="Please input username"
          ref="username"
        ></YInput>
      </YFormItem>
      <YFormItem label="Password:" prop="password">
        <YInput
          type="password"
          v-model="user.password"
          maxlength="10"
          placeholder="Please input password"
        ></YInput>
      </YFormItem>
      <YFormItem>
        <YButton type="primary" class="new-btn" @click="login">登陆</YButton>
      </YFormItem>
    </YForm>
  </div>
</template>

<script>
// @ is an alias to /src
import YInput from "@/components/form/YInput";
import YFormItem from "@/components/form/YFormItem";
import YForm from "@/components/form/YForm";
import YButton from "@/components/button/YButton";

// 引进tips弹窗-----后期修改，不需要引入组件也可以实现
// import Tips from "@/components/popWindow/Tips";
// import create from '@/plugins/create'

export default {
  name: "Home",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ required: true, message: "please input username" }],
        password: [{ required: true, message: "please input username" }],
      },
    };
  },
  methods: {
    login() {
      // 通过refs获取到当前表单，添加校验方法
      this.$refs.loginForm.validate(valid => {
        console.log(this);
        // console.log(this.create());
        if(valid){
          // alert('Submit Success!')
          // 创建tips
          this.$tips({
            title:'test',
            message: '校验通过',
            type: 'success'
          }).show();
        }else{
          //alert('Submit Failed!')
          this.$tips({
            message: '校验失败',
            type: 'error'
          }).show();
          this.$alert()
        }
      })
    }
  },
  components: {
    YInput,
    YFormItem,
    YForm,
    YButton
  },
};
</script>
<style scoped>
.new-btn input {
  width: 340px;
  height: 40px;
  margin: 0 auto;
}
</style>