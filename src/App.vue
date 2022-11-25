<template>
  <div id="app">
<router-view></router-view>
  </div>
</template>

<script>
import payment from "@/view/payment";
import user from "@/view/user";
import purOrder from "@/view/purOrder";

export default {
  name: 'App',
  components: {
payment,user,purOrder
  }
}
</script>

<style>
</style>
