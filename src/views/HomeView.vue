
<template>
  <div class="homeview">
    <FormUi />
  </div>
</template>

<script>
import FormUi from "@/components/FormUi.vue";

export default {
  components: {
    FormUi,
  },
};
</script>

<style lang="scss">
.homeview {
  background-color: rgb(252, 251, 244);
}

body {
  margin: 0;
}
</style>