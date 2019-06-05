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
.domain-detail {
  .img-con {
    height: 12.1875rem;
    background: #eee;
    text-align: center;
    .img {
      width: 8.4375rem;
      height: 6.25rem;
      margin-top: 2.6875rem;
      display: inline-block;
      background: url("../../images/detail/img.png") no-repeat;
      background-size: 100% 100%;
      p {
        line-height: 6.25rem;
        color: #fff;
        text-align: center;
        font-size: 0.9375rem;
      }
    }
  }

  .detail-con {
    height: 17.1875rem;
    padding: 1.4375rem;
    p {
      color: #333;
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
      margin-top: 3.125rem;
      span {
        color: #a0a0a0;
        font-size: 0.625rem;
      }
      span:nth-child(2) {
        float: right;
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
  height: 15.625rem;
  padding: 1.4375rem;
  p {
    color: #333;
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
    margin-top: 3.125rem;
    span {
      color: #a0a0a0;
      font-size: 0.625rem;
    }
    span:nth-child(2) {
      float: right;
    }
  }
  .code-con {
    margin-top: 1rem;
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

.large-btn {
  height: 2.5rem;
  margin: auto;
  border-radius: 0.3125rem;
  line-height: 2.5rem;
  text-align: center;
  color: #fff;
  background: linear-gradient(to right, blue, purple);
}

.form-con {
  height: 19rem;
  padding: 1.4375rem;
  .form-label {
    line-height: 1.5rem;
  }
  p {
    color: #333;
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
    margin-bottom: 1rem;
  }
}
.must {
  color: red;
}
</style>

<template>
  <div class="domain-detail">
    <!-- img -->
    <div class="img-con">
      <div class="img">
        <p>{{res.name}}</p>
      </div>
    </div>

    <!-- detail -->
    <div class="detail-con">
      <p class="detail-con-name">{{res.name}}</p>
      <p class="detail-con-p">
        价格：
        <b>{{res.num}}</b>
      </p>
      <p class="detail-con-p">域名行业：{{res.tags.join('、')}}</p>
      <p class="detail-con-p">域名后缀：{{res.last}}</p>
      <p class="detail-con-p">域名长度：{{res.len}}</p>
      <p class="detail-con-p">域名分类：{{res.type}}</p>
      <p class="detail-con-b">
        <span>{{res.date}}注册</span>
        <span>{{res.count}}次浏览</span>
      </p>
    </div>

    <!-- bottom -->
    <div class="detail-bt">
      <p class="btn rect" @click="handleOpenForm">在线资讯</p>
      <p class="btn rect rect-r">拨打电话</p>

      <p class="btn dot" @click="handleOpenShare">
        <i class="icon_wx"></i>
      </p>
      <p class="btn dot" @click="handleOpenShare">
        <i class="icon_sina"></i>
      </p>
      <p class="btn dot" @click="handleOpenShare">
        <i class="icon_phone"></i>
      </p>
    </div>

    <Modal v-model="bShowShare" :closable="false">
      <div class="modal-main">
        <div class="logo-con">
          <img class="logo" src="@/images/logo_long.png" alt>
        </div>
        <div class="modal-con">
          <p class="modal-con-name">{{res.name}}</p>
          <p class="modal-con-p">
            价格：
            <b>{{res.num}}</b>
          </p>
          <p class="modal-con-b">
            <span>{{res.date}}注册</span>
            <span>{{res.count}}次浏览</span>
          </p>
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

    <Modal v-model="bShowForm" :closable="false">
      <div class="form-con">
        <p class="form-con-name">{{res.name}}</p>
        <p class="form-con-p">
          价格：
          <b>{{res.num}}</b>
        </p>

        <div>
          <p class="form-label">
            姓名
            <b class="must">*</b>
          </p>
          <p>
            <Input v-model="objForm.name" placeholder="请输入姓名"/>
          </p>
        </div>
        <div>
          <p class="form-label">
            手机号码
            <b class="must">*</b>
          </p>
          <p>
            <Input v-model="objForm.name" placeholder="请输入手机号码"/>
          </p>
        </div>
        <div>
          <p class="form-label">备注</p>
          <p>
            <Input type="textarea" :rows="4" v-model="objForm.name" placeholder="请输入备注"/>
          </p>
        </div>
      </div>
      <div slot="footer">
        <p class="large-btn" @click="handleSubmit">提交信息</p>
      </div>
    </Modal>
  </div>
</template>
<script>
export default {
  name: "domain-detail",
  data() {
    return {
      bShowShare: false,
      bShowForm: false,
      objForm: {
        name: ""
      },
      res: {
        id: 23,
        name: "sdf.com",
        num: 888,
        tags: ["sdf", "232", "sdfsdf", "232", "sdfsdf", "232", "sdfsdf"],
        last: ".com",
        len: 3,
        type: "字母-纯字母",
        date: "2019-02-14",
        count: 123,
        imgUrl: "sdfsdfsdf"
      }
    };
  },
  methods: {
    handleOpenForm() {
      this.bShowForm = true;
    },
    handleOpenShare() {
      this.bShowShare = true;
    },
    handleSubmit() {
      console.log("a", this.objForm);
    }
  }
};
</script>

