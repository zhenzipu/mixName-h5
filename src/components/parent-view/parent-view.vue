<template>
  <keep-alive :include="[]" :exclude="[]">
    <router-view/>
  </keep-alive>
</template>
<script>
export default {
  name: 'ParentView',
  computed: {
    tagNavList () {
      return this.$store.state.app.tagNavList
    },
  }
}
</script>
