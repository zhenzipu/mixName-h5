<style lang="less">
@import "./main.less";
.content-main {
  background: #f8f8f8;
  min-width: 1200px;
  .content-con {
    width: 1200px;
    margin: 0 auto;
  }
}
</style>
<template>
  <div>
    <router-view></router-view>
    <!-- <header-main/>
    <div class="content-main">
      <div class="content-con" :style="{width:$route.name=='consult'?'100%':'1200px'}">
      </div>
    </div>
    <footer-main/>-->
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
  created() {}
};
</script>
