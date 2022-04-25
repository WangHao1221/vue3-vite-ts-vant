<template>
  <p>this is home page</p>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import { computed, defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  components: { HelloWorld },
  setup() {},
});
</script>
