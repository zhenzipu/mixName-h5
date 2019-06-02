<style lang="less" scoped>
.footer-main {
  min-width: 1200px;
  background: #272233;
  .foot-con {
    width: 1200px;
    padding: 50px 0;
    margin: 0 auto;
    .foot-detail {
      height: 400px;
      li {
        list-style: none;
        width: 300px;
        float: left;
        .foot-title{
            color: #fff;
            padding-left: 5px;
        }
        .foot-detial-con{
            li{
                line-height: 50px;
                color: #666;
                cursor: pointer;
                list-style: none;
                width: 130px;
                float: left;
                margin: 5px;
            }
        }
        .join-us li {
            width: 280px;
        }
        // 二维码
        .code-img{
            margin-top: 10px;
        }
      }
    }
    .copy-right {
      color: #fff;
      margin: 0 auto;
      font-size: 12px;
      width: 650px;
      background: url("../../images/logo_deep.png") no-repeat;
      padding-left: 190px;
      line-height: 34px;
      height: 34px;
    }
  }
}
</style>

<template>
  <div class="footer-main">
    <div class="foot-con">
      <ul class="foot-detail">
        <li>
          <p class="foot-title">友情链接</p>
          <ul class="foot-detial-con">
              <li>快米网</li>
              <li>人人实验</li>
              <li>阿里巴巴</li>
              <li>氪空间</li>
              <li>淘宝网</li>
              <li>聚美优品</li>
              <li>人人都是产品经理</li>
              <li>中粮集团</li>
              <li>微信社群</li>
              <li>安徽卫视</li>
          </ul>
        </li>
        <li>
          <p class="foot-title">关于我们</p>
          <ul class="foot-detial-con join-us">
              <li>联系我们</li>
              <li>加入我们</li>
              <li>免责声明</li>
              <li>邮箱：invest@mixname.com</li>
              <li>电话：010-88911388</li>
          </ul>
        </li>
        <li>
          <p class="foot-title">合作伙伴</p>
          <ul class="foot-detial-con join-us">
              <li><img src="@/images/foot_icon/icon_ali.png" alt=""></li>
              <li><img src="@/images/foot_icon/icon_team.png" alt=""></li>
              <li><img src="@/images/foot_icon/icon_youpai.png" alt=""></li>
              <li><img src="@/images/foot_icon/icon_getui.png" alt=""></li>
              <li><img src="@/images/foot_icon/icon_gau.png" alt=""></li>
              <li><img src="@/images/foot_icon/icon_xingqiu.png" alt=""></li>
          </ul>
        </li>
        <li>
          <p class="foot-title">关注公众号</p>
          <img class="code-img" src="@/images/foot_icon/code.png" alt="">
        </li>
      </ul>
      <p class="copy-right">Copyright © 2005-2018[域名商城] yuming Technology Co.，Ltd.京ICP备1803</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "footer-main",
  data() {
    return {
      //
    };
  }
};
</script>

