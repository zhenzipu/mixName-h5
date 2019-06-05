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
.news {
  &-list {
    list-style: none;
    &-item {
      border-bottom: 0.0625rem solid #ccc;
      padding: 0 0.75rem;
      margin: 0.625rem 0;
      .item-t {
        > div {
          display: inline-block;
          vertical-align: top;
        }
        .item-l {
          width: 7rem;
          height: 5rem;
          margin-right: 0.9375rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .item-r {
          width: 14rem;
          p:nth-child(1) {
            font-size: 0.8125rem;
            line-height: 0.9375rem;
            font-weight: bold;
            color: #333;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          p:nth-child(2) {
            font-size: 0.6875rem;
            line-height: 0.9375rem;
            margin-top: 0.3rem;
            color: #333;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
        }
      }
      .item-b {
        margin: 0.3rem 0;
        .icon_share {
          margin-top: 0.2rem;
          margin-right: 2rem;
          width: 1.25rem;
          height: 1.25rem;
          display: inline-block;
          float: right;
          cursor: pointer;
          background: url("../../images/share.png") no-repeat;
        }
        .btn_zan {
          float: right;
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
    img {
      width: 6.3125rem;
      height: 4.3125rem;
      float: left;
    }
    div {
      margin-left: 1rem;
      float: left;
      p {
        width: 10.5rem;
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
  <div class="news">
    <ul class="news-list">
      <li v-for="(item,idx) in aNews" :key="idx" class="news-list-item">
        <div class="item-t">
          <div class="item-l">
            <img src="@/images/icon_img.png" alt>
          </div>
          <div class="item-r">
            <p>{{item.title}}</p>
            <p>{{item.con}}</p>
          </div>
        </div>
        <p class="item-b">
          <span class="item.date">{{item.date}}</span>
          <span class="btn_zan">
            <i class="icon_zan"></i>
            {{item.num}}
          </span>
          <i class="icon_share" @click="handleOpenShare"></i>
        </p>
      </li>
    </ul>

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
            <img src="@/images/icon_img.png" alt>
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
  name: "news",
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
      aNews: [
        {
          id: 12,
          date: "21:32",
          title: "格力电器15%股权谁接盘？25家有意，不排斥管理层或外资 拷贝 4",
          num: 32,
          con:
            "5月22日晚间，格力电器（000651）披露了意向投资者见面会活动记录表显示，包括百度、淡马锡、高瓴资本、厚朴投资在内的25家 拷贝 4"
        },
        {
          id: 12,
          date: "21:32",
          title: "格力电器15%股权谁接盘？25家有意，不排斥管理层或外资 拷贝 4",
          num: 32,
          con:
            "5月22日晚间，格力电器（000651）披露了意向投资者见面会活动记录表显示，包括百度、淡马锡、高瓴资本、厚朴投资在内的25家 拷贝 4"
        },
        {
          id: 12,
          date: "21:32",
          title: "格力电器15%股权谁接盘？25家有意，不排斥管理层或外资 拷贝 4",
          num: 32,
          con:
            "5月22日晚间，格力电器（000651）披露了意向投资者见面会活动记录表显示，包括百度、淡马锡、高瓴资本、厚朴投资在内的25家 拷贝 4"
        },
        {
          id: 12,
          date: "21:32",
          title: "格力电器15%股权谁接盘？25家有意，不排斥管理层或外资 拷贝 4",
          num: 32,
          con:
            "5月22日晚间，格力电器（000651）披露了意向投资者见面会活动记录表显示，包括百度、淡马锡、高瓴资本、厚朴投资在内的25家 拷贝 4"
        }
      ]
    };
  },
  methods: {
    handleOpenShare() {
      this.bShowShare = true;
    }
  }
};
</script>

