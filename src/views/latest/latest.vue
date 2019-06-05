<style lang="less">
.ivu-modal {
  width: 100% !important;
}
.ivu-modal-footer {
  padding: 0;
}
.ivu-modal-content {
  border-radius: 0;
}
.ivu-modal {
  margin: 0;
}
.latest {
  .title-date {
    background: #eeeeee;
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: 0.875rem;
    color: #4e14d6;
    text-align: center;
  }
  .latest-con {
    padding: 0.9375rem;
    .news-list {
      list-style: none;
      li {
        padding: 0 0.825rem;
        border-left: 1px solid #ccc;
        .item-date {
          font-size: 0.625rem;
          color: #999;
          line-height: 3rem;
        }
        .item-title {
          font-size: 0.875rem;
          line-height: 1.125rem;
          font-weight: bold;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .item-con {
          margin-top: 0.625rem;
          font-size: 0.875rem;
          line-height: 1.125rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
        }
        .item-btn{
          font-size: 0.875rem;
          margin-top: 0.625rem;
          color: #999;
          .icon_share{
            width: 20px;
            height: 20px;
            display: inline-block;
            float: right;
            background: url('../../images/share.png') no-repeat;
          }
        }
      }
    }
  }
}

.modal-main {
  .logo-con {
    text-align: center;
    .logo {
      width: 5.3125rem;
      display: inline-block;
      margin: 0.625rem auto;
    }
  }
}

.modal-con {
  height: 17.625rem;
  padding: 1.4375rem;
  p {
    color: #333;
  }
  &-text {
    font-size: 0.75rem;
    line-height: 0.9375rem;
    color: #333333;
  }
  &-name {
    font-size: 1.25rem;
    line-height: 1.875rem;
    font-weight: bold;
  }
  &-p {
    font-size: 0.8125rem;
    line-height: 1.25rem;
    b {
      color: #4e14d6;
    }
  }
  &-b {
    margin-top: 0.5rem;
    span {
      color: #a0a0a0;
      font-size: 0.625rem;
    }
    span:nth-child(2) {
      float: right;
    }
  }
  .art-con {
    height: 5rem;
    margin-top: 1rem;
    div {
      p {
        line-height: 1.25rem;
        font-size: 0.875rem;
        color: #666666;
      }
    }
  }
  .code-con {
    margin-top: 1rem;
    height: 7rem;
    img {
      width: 5.3125rem;
      height: 5.3125rem;
      float: left;
    }
    div {
      margin-left: 1rem;
      float: left;
      padding-top: 1rem;
      p {
        line-height: 1.25rem;
        font-size: 0.875rem;
      }
    }
  }
}

.detail-bt {
  height: 3.75rem;
  background: #eee;
  padding: 0.625rem;
  .btn {
    display: inline-block;
    vertical-align: top;
    background: #fff;
    margin: 0 0.3rem;
    cursor: pointer;
  }
  .rect {
    width: 5rem;
    height: 2.5rem;
    border-radius: 0.3125rem;
    line-height: 2.5rem;
    text-align: center;
    color: #333;
  }
  .rect-r {
    margin-right: 1.5rem;
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
    .icon_qq {
      width: 1.4625rem;
      height: 1.5625rem;
      margin-top: 0.5rem;
      background: url("../../images/detail/qq.png") no-repeat;
      background-size: 100% 100%;
    }
    .icon_zone {
      width: 1.5625rem;
      height: 1.5625rem;
      margin-top: 0.5rem;
      background: url("../../images/detail/zone.png") no-repeat;
      background-size: 100% 100%;
    }
    .icon_wxq {
      width: 1.5625rem;
      height: 1.5625rem;
      margin-top: 0.5rem;
      background: url("../../images/detail/wxq.png") no-repeat;
      background-size: 100% 100%;
    }
    .icon_download {
      width: 1.5625rem;
      height: 1.5625rem;
      margin-top: 0.5rem;
      background: url("../../images/detail/download.png") no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>

<template>
  <div class="latest">
    <p class="title-date">今天：{{nowDate}}</p>
    <div class="latest-con">
      <ul class="news-list">
        <li v-for="(item,idx) in aNews" :key="idx">
          <p class="item-date">{{item.date}}</p>
          <p class="item-title">{{item.title}}</p>
          <p class="item-con">{{item.con}}</p>
          <p class="item-btn">
            <span>查看原文</span>
            <i class="icon_share" @click="handleOpenShare"></i>
          </p>
        </li>
      </ul>
    </div>



    <Modal v-model="bShowShare" :closable="false">
      <div class="modal-main">
        <div class="logo-con">
          <img class="logo" src="@/images/logo_long.png" alt>
        </div>
        <div class="modal-con">
          <p class="modal-con-text">{{res.title}}</p>
          <p class="modal-con-b">
            <span>{{res.date}}</span>
            <span>{{res.count}}次浏览</span>
          </p>
          <div class="art-con">
            <div>
              <p>{{res.con}}</p>
            </div>
          </div>
          <div class="code-con">
            <img src="@/images/detail/code.png" alt>
            <div>
              <p>长按或者扫码二维码</p>
              <p>添加好友</p>
              <p>咨询域名最低价</p>
            </div>
          </div>
        </div>
      </div>
      <div slot="footer">
        <div class="detail-bt">
          <p class="btn dot">
            <i class="icon_qq"></i>
          </p>
          <p class="btn dot">
            <i class="icon_zone"></i>
          </p>
          <p class="btn dot">
            <i class="icon_wx"></i>
          </p>
          <p class="btn dot">
            <i class="icon_wxq"></i>
          </p>
          <p class="btn dot">
            <i class="icon_phone"></i>
          </p>
          <p class="btn dot">
            <i class="icon_sina"></i>
          </p>
          <p class="btn dot">
            <i class="icon_download"></i>
          </p>
        </div>
      </div>
    </Modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bShowShare: false,
      res: {
        id: 23,
        count: 888,
        date: "2019-02-14",
        id: 12,
        date: "21:32",
        title: "格力电器15%股权谁接盘？25家有意，不排斥管理层或外资 拷贝 4",
        num: 32,
        con:
          "36氪讯，近日据彭博报道，腾讯旗下的水滴公司正在寻求新一轮融资，估值超过10亿美元。水滴公司对此回应称...... 拷贝 4"
      },
      nowDate: "",
      aNews: [
        {
          id: 12,
          date: "23:13",
          title: "水滴回应“寻求新一轮融资”对于融资一直都是开放心态",
          con:
            "36氪讯，近日据彭博报道，腾讯旗下的水滴公司正在寻求新一轮融资，估值超过10亿美元。水滴公司对此回应称，在融资方面水滴的态度一 拷贝 3"
        },
        {
          id: 13,
          date: "23:13",
          title: "水滴回应“寻求新一轮融资”对于融资一直都是开放心态",
          con:
            "36氪讯，近日据彭博报道，腾讯旗下的水滴公司正在寻求新一轮融资，估值超过10亿美元。水滴公司对此回应称，在融资方面水滴的态度一 拷贝 3"
        },
        {
          id: 14,
          date: "23:13",
          title: "水滴回应“寻求新一轮融资”对于融资一直都是开放心态",
          con:
            "36氪讯，近日据彭博报道，腾讯旗下的水滴公司正在寻求新一轮融资，估值超过10亿美元。水滴公司对此回应称，在融资方面水滴的态度一 拷贝 3"
        },
        {
          id: 15,
          date: "23:13",
          title: "水滴回应“寻求新一轮融资”对于融资一直都是开放心态",
          con:
            "36氪讯，近日据彭博报道，腾讯旗下的水滴公司正在寻求新一轮融资，估值超过10亿美元。水滴公司对此回应称，在融资方面水滴的态度一 拷贝 3"
        }
      ]
      //
    };
  },
  methods: {
    handleOpenShare() {
      this.bShowShare = true;
    },
    getDate() {
      var d = new Date();
      var y = d.getFullYear();
      var m = d.getMonth() + 1;
      var ds = d.getDate();
      if (ds <= 9) {
        ds = "0" + ds;
      }
      var h = d.getHours();
      if (h <= 9) {
        h = "0" + h;
      }
      var f = d.getMinutes();
      if (f <= 9) {
        f = "0" + f;
      }
      var s = d.getSeconds();
      if (s <= 9) {
        s = "0" + s;
      }
      var days = d.getDay();
      switch (days) {
        case 1:
          days = "星期一";
          break;
        case 2:
          days = "星期二";
          break;
        case 3:
          days = "星期三";
          break;
        case 4:
          days = "星期四";
          break;
        case 5:
          days = "星期五";
          break;
        case 6:
          days = "星期六";
          break;
        case 0:
          days = "星期日";
          break;
      }
      let str = m + "月" + ds + "日 " + days;
      return str;
    }
  },
  mounted() {
    this.nowDate = this.getDate();
  }
};
</script>

