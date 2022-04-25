<template>
  <p>this is login page</p>
  <van-button @click="$router.push('/')">登录</van-button>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  components: {},
  setup() {},
});
</script>
