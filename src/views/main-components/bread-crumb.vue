<style lang="less" scoped>
.bread-crumb-con {
  background: #030b21;
  //   opacity: 0.8;
  height: 40px;
  line-height: 40px;
  padding: 0 50px;
  box-shadow: 0px 0px 8px 2px #ccc inset;
  li {
    display: inline-block;
    float: left;
    color: #515a6e;
    a {
      transition: color 0.5s;
    }
    .active {
      cursor: pointer;
    }
    .active:hover {
      color: #2d8cf0;
    }
    .bold {
      font-weight: 700;
    }
    .divide {
      color: #ccc;
      padding: 0 5px;
    }
  }
}
</style>

<template>
  <ul class="bread-crumb-con">
    <li v-for="(item,idx) in list" :key="idx">
      <template v-if="list.length==1">
        <a class="bold">{{item.title}}</a>
      </template>
      <template v-else>
        <a
          :class="idx==0?'active':idx==list.length-1?'bold':''"
          @click="turnTo(item.to)"
        >{{item.title}}</a>
        <span v-if="idx<list.length-1" class="divide">/</span>
      </template>
    </li>
  </ul>
</template>
<script>
export default {
  name: "bread-crumb",
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  methods: {
    turnTo(name) {
      if (name) {
        this.$router.push({
          name: name
        });
      }
    }
  },
  mounted() {}
};
</script>

