<template>
  <component :is="layout">
    <!-- load each page content -->
    <RouterView /> 
  </component>

</template>

<script>
import Main from "./layouts/main.vue"
import Default from "./layouts/default.vue"

export default {
  components: 
  {
    Main,
    Default
  },
  computed:
  {
    layout() 
    {
      return this.$route.meta.layout || Default;
    }
  }
}

</script>