<style lang="less" scoped>
.news-detail {
  padding: 1.25rem;
  .title {
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #333333;
    font-weight: bold;
  }

  .btn-con {
    margin: 0.5rem 0;
    span {
      display: inline-block;
      vertical-align: top;
    }
    .date {
      line-height: 1.25rem;
      margin-right: 2rem;
    }
    .icon_share {
      margin-top: 0.2rem;
      margin-right: 2rem;
      width: 1.25rem;
      height: 1.25rem;
      display: inline-block;
      cursor: pointer;
      background: url("../../images/share.png") no-repeat;
    }
    .btn_zan {
      .icon_zan {
        cursor: pointer;
        width: 1.25rem;
        height: 1.25rem;
        display: inline-block;
        background: url("../../images/zan.png") no-repeat;
        background-size: 100% 100%;
      }
    }
  }
  .con-text {
    font-size: 0.8125rem;
    line-height: 1.1875rem;
    color: #333333;
    margin-bottom: 1.5625rem;
  }
  .item-img {
    width: 20rem;
    height: 10.3125rem;
    margin: 0.5rem auto;
  }
}

.detail-bt {
  height: 3.75rem;
  width: 100%;
  background: #eee;
  padding: 0.625rem;
  >div{
    display: inline-block;
    vertical-align: top;
  }
  .bt-l {
    padding-top: .7rem;
    padding-left: 2rem;
    img {
      width: 4.375rem;
      height: 0.9375rem;
      margin: auto;
    }
  }

  .bt-r {
    float: right;
    .btn {
      display: inline-block;
      vertical-align: top;
      background: #fff;
      margin: 0 0.3rem;
      cursor: pointer;
    }
    .dot {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 1.25rem;
      text-align: center;
      i {
        display: inline-block;
      }
      .icon_wx {
        width: 1.5625rem;
        height: 1.4375rem;
        margin-top: 0.5rem;
        background: url("../../images/detail/wx.png") no-repeat;
        background-size: 100% 100%;
      }
      .icon_sina {
        width: 1.5625rem;
        height: 1.5625rem;
        margin-top: 0.5rem;
        background: url("../../images/detail/sina.png") no-repeat;
        background-size: 100% 100%;
      }
      .icon_phone {
        width: 1.1rem;
        margin-top: 0.5rem;
        height: 1.75rem;
        background: url("../../images/detail/phone.png") no-repeat;
        background-size: 100% 100%;
      }
      .icon_up {
        width: 1.5625rem;
        height: 1.5625rem;
        margin-top: 0.5rem;
        background: url("../../images/detail/up.png") no-repeat;
        background-size: 100% 100%;
      }
    }
  }
}
</style>

<template>
  <div>
    <div class="news-detail">
      <p class="title">{{res.title}}</p>
      <p class="btn-con">
        <span class="date">{{res.date}}</span>
        <span class="icon_share"></span>
        <span class="btn_zan">
          <i class="icon_zan"></i>
          {{res.num}}
        </span>
      </p>
      <p class="con-text">{{res.con}}</p>
      <p class="con-text">{{res.con}}</p>
      <p class="con-text">{{res.con}}</p>
      <p class="con-text">{{res.con}}</p>
      <img class="item-img" src="@/images/detail/news_img.png" alt>
    </div>

    <div class="detail-bt">
      <div class="bt-l">
        <img src="@/images/logo_long.png" alt>
      </div>
      <div class="bt-r">
        <p class="btn dot">
          <i class="icon_wx"></i>
        </p>
        <p class="btn dot">
          <i class="icon_phone"></i>
        </p>
        <p class="btn dot">
          <i class="icon_sina"></i>
        </p>
        <p class="btn dot">
          <i class="icon_up"></i>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      res: {
        title: "格力电器15%股权谁接盘？25家有意，不排斥管理层或外资",
        date: "2019-02-31",
        num: 23,
        con:
          "5月22日晚间，格力电器（000651）披露了意向投资者见面会活动记录表显示，包括百度、淡马锡、高瓴资本、厚朴投资在内的25家"
      }
    };
  }
};
</script>

