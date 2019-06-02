<style lang="less" scoped>
.header-main {
  a {
    text-decoration: none;
    :active {
      color: #333;
    }
  }
  min-width: 1200px;
  height: 100px;
  border-bottom: 1px solid #ccc;
  .header-con {
    width: 1200px;
    margin: 0 auto;
    .logo-con {
      margin-top: 30px;
      float: left;
      display: inline-block;
    }
    .head-menu {
      float: left;
      li {
        list-style: none;
        float: left;
        margin: 0 10px;
        line-height: 100px;
        cursor: pointer;
        a {
          line-height: 30px;
          height: 30px;
          padding: 0 7px;
          margin-top: 35px;
          display: block;
          color: #333;
        }
      }
      .act-menu {
        a {
          color: #fff;
          border-radius: 7px;
          background: linear-gradient(to right, blue, purple);
        }
      }
    }
    .search-con {
      background: url("../../images/search.png") 10px 9px no-repeat;
      float: left;
      width: 300px;
      height: 30px;
      border-radius: 15px;
      margin-top: 35px;
      margin-left: 10px;
      border: 1px solid #bea8f0;
      .search-input {
        margin: 6px 0 0 30px;
        width: 250px;
        border: none;
        outline: none;
      }
    }
    .lan-con {
      float: right;
      margin-top: 35px;
      margin-right: 35px;
      cursor: pointer;
    }
    .head-btn {
      float: right;
      span {
        border: 1px solid #6f4bdc;
        display: inline-block;
        border-radius: 5px;
        height: 28px;
        width: 70px;
        text-align: center;
        line-height: 28px;
        margin: 34px 5px 0;
        color: #4e14d6;
        cursor: pointer;
      }
      span:nth-child(2) {
        background: #4e14d6;
        color: #fff;
      }
    }
  }
}
</style>

<template>
  <div class="header-main">
    <div class="header-con">
      <a href="#/home" class="logo-con">
        <img src="@/images/logo.png" alt>
      </a>
      <ul class="head-menu">
        <li
          :class="item.name==$route.name?'act-menu':''"
          v-for="(item,idx) in aMenu"
          :key="idx"
          @click="turnTo(item,idx)"
        ><a>{{item.title}}</a></li>
      </ul>
      <div class="search-con">
        <input class="search-input" type="text" placeholder="请输入bit、coin、chaint等关键字搜索">
      </div>
      <div class="head-btn">
        <span>登录</span>
        <span>注册</span>
      </div>
      <div class="lan-con">
        <img src="@/images/lan.png" alt>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "header-con",
  data() {
    return {
      actIdx: 0,
      aMenu: [
        {
          title: "首页",
          name: "home"
        },
        {
          title: "精品域名",
          name: "boutique"
        },
        {
          title: "平价域名",
          name: "flat"
        },
        {
          title: "咨询",
          name: "consult"
        },
        {
          title: "快讯",
          name: "latest"
        },
        {
          title: "行业资讯",
          name: "industry"
        }
      ]
    };
  },
  watch: {
    $route() {
      console.log(this.$route);
    }
  },
  methods: {
    turnTo(obj, idx) {
      this.actIdx = idx;
      this.$router.push({
        name: obj.name
      });
    }
  },
  mounted() {}
};
</script>

