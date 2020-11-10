<template>
  <div class="index">
    <img alt="Vue logo" src="../assets/logo.png" />

    <YForm :model="user" :rules="rules">
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
    </YForm>
  </div>
</template>

<script>
// @ is an alias to /src
import YInput from "@/components/form/YInput";
import YFormItem from "@/components/form/YFormItem";
import YForm from "@/components/form/YForm";

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
  components: {
    YInput,
    YFormItem,
    YForm,
  },
};
</script>
