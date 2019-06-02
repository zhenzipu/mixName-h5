<style lang="less" scoped>
.link-con {
  width: 270px;
  height: 150px;
  .link-list {
    list-style: none;
    li {
      width: 80px;
      margin: 5px;
      display: inline-block;
      float: left;
      .link-img {
        width: 50px;
        height: 50px;
      }
      .link-text {
        line-height: 30px;
        font-size: 12px;
      }
    }
  }
}
</style>
<template>
  <Poptip placement="bottom-end">
    <Icon size="26" type="md-apps" style="color:#fff;"/>
    <div slot="content" class="link-con">
      <ul class="link-list">
        <li v-for="(item,index) in aMenuList" :key="index">
          <Card :padding="5">
            <div style="text-align:center">
              <a :href="item.link" target="_blank">
                <!-- <img class="link-img" :src="item.icon"> -->
                <p class="link-text">{{item.title}}</p>
              </a>
            </div>
          </Card>
        </li>
      </ul>
    </div>
  </Poptip>
</template>

<script>
export default {
  name: "link-btn",
  data() {
    return {
      //子菜单
      aMenuList: [
        {
          link: "http://test.benchmark.tco.jd.com",
          title: "服务器测试",
        //   icon: require("../../images/server.jpg")
        },
        {
          link: "http://benchmark.tco.jd.com",
          title: "网络测试",
        //   icon: require("../../images/network.png")
        }
      ]
    };
  }
};
</script>

