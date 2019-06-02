<style lang="less" scoped>
.header {
  height: 3.75rem;
  border-bottom: 1px solid #f6f6f6;
  > div {
    display: inline-block;
    vertical-align: top;
  }
  .logo {
    margin: 0.9375rem 1.875rem 0;
    img {
      width: 1.875rem;
      height: 1.5625rem;
    }
  }
  .search-con {
    margin-top: 0.9375rem;
    width: 12.5rem;
    height: 1.875rem;
    border: 0.0625rem solid #f6f6f6;
    border-radius: 0.9375rem;
    background: 0.625rem 0.3125rem url("../../images/home/search.png") no-repeat;
    background-size: 1.25rem 1.25rem;
    text-align: center;
    padding-left: 0.3125rem;
    input {
      border: none;
      outline: none;
      line-height: 1.875rem;
    }
  }
}
.main-con {
  padding: 0.75rem;
  background: #eeeeee;
  .swipe {
    .carousel-item {
      width: 100%;
      height: 5.625rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  // 链接
  .link-con {
    height: 11.25rem;
    margin-top: 1rem;
    &-list {
      list-style: none;
      li {
        display: inline-block;
        width: 5.4375rem;
        height: 5rem;
        float: left;
        cursor: pointer;
        p {
          text-align: center;
          color: #333;
          line-height: 2rem;
        }
        p:nth-child(1) {
          width: 2.5rem;
          height: 2.5rem;
          background: #fff;
          border-radius: 1.25rem;
          text-align: center;
          margin-left: 1.5rem;
          img {
            width: 1.375rem;
            height: 1.375rem;
            margin-top: 0.5625rem;
          }
        }
      }
    }
  }
  .block-title {
    font-size: 0.9375rem;
    line-height: 2.5rem;
    height: 2.5rem;
    padding: 0 0.625rem;

    .btn-more {
      float: right;
      text-align: center;
      font-size: 0.75rem;
      color: #4e14d6;
      cursor: pointer;
    }
  }
  // 特价
  .bargin-con {
    height: 13.125rem;
    &-list {
      list-style: none;
      height: 11.25rem;
      li {
        background: #fff;
        border-radius: 0.3125rem;
        width: 10.375rem;
        height: 10rem;
        float: left;
        margin-right: 0.5rem;
        .img-card {
          width: 9rem;
          height: 5.625rem;
          border-radius: 0.3125rem;
          margin: 0.625rem;
          background: url("../../images/home/item.png") no-repeat;
          background-size: 100% 100%;
          position: relative;
          p {
            position: absolute;
            color: #fff;
            bottom: 0;
            left: 0.3125rem;
            font-size: 0.8rem;
          }
        }
        > p {
          padding-left: 0.75rem;
        }
        .item-name {
          color: #333;
          font-size: 0.875rem;
        }
        .item-price {
          font-size: 1rem;
          b {
            color: #7143de;
          }
        }
      }
    }
  }
  // 精品
  .boutique-con {
    &-list {
      list-style: none;
      li {
        background: #fff;
        border-radius: 0.3125rem;
        width: 10.375rem;
        height: 13rem;
        // float: left;
        display: inline-block;
        margin-right: 0.5rem;
        margin-top: 0.625rem;
        .img-card {
          width: 9rem;
          height: 5.625rem;
          border-radius: 0.3125rem;
          margin: 0.625rem;
          background: url("../../images/home/item2.png") no-repeat;
          background-size: 100% 100%;
          p {
            color: #fff;
            font-size: 0.8rem;
            margin-top: 1rem;
            line-height: 5.625rem;
            text-align: center;
          }
        }
        > p {
          padding-left: 0.75rem;
        }
        .item-name {
          color: #333;
          font-size: 0.875rem;
        }
        .item-price {
          font-size: 1rem;
          b {
            color: #7143de;
          }
        }
        .item-tag {
          margin-top: 0.625rem;
          color: #333;
          font-size: 0.7rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
}
</style>

<template>
  <div>
    <div class="header">
      <div class="logo">
        <img src="@/images/logo.png" alt>
      </div>
      <div class="search-con">
        <input type="text" placeholder="搜索域名">
      </div>
    </div>
    <div class="main-con">
      <!-- banner -->
      <div class="swipe">
        <Carousel>
          <CarouselItem>
            <div class="carousel-item">
              <img src="@/images/home/banner.png" alt>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="carousel-item">
              <img src="@/images/home/banner.png" alt>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="carousel-item">
              <img src="@/images/home/banner.png" alt>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="carousel-item">
              <img src="@/images/home/banner.png" alt>
            </div>
          </CarouselItem>
        </Carousel>
      </div>
      <!-- link -->
      <div class="link-con">
        <ul class="link-con-list">
          <li v-for="(item,idx) in aLink" :key="idx" @click="turnTo(item.key)">
            <p>
              <img :src="item.img" alt>
            </p>
            <p>{{item.name}}</p>
          </li>
        </ul>
      </div>
      <!-- 每日特价 -->
      <div class="bargin-con">
        <p class="block-title">每日特价</p>
        <ul class="bargin-con-list">
          <li v-for="(item,idx) in aBargin" :key="idx">
            <div class="img-card">
              <p>{{item.status?item.date:'已结束'}}</p>
            </div>
            <p class="item-name">{{item.name}}</p>
            <p class="item-price">
              价格：
              <b>{{item.num}}</b>
            </p>
          </li>
        </ul>
      </div>
      <!-- 精品域名 -->
      <div class="boutique-con">
        <p class="block-title">
          精品域名
          <span class="btn-more" @click="turnTo('boutique')">更多></span>
        </p>
        <ul class="boutique-con-list">
          <li v-for="(item,idx) in aBoutique" :key="idx">
            <div class="img-card">
              <p>{{item.name}}</p>
            </div>
            <p class="item-name">{{item.name}}</p>
            <p class="item-price">
              价格：
              <b>{{item.num}}</b>
            </p>
            <p class="item-tag">域名行业：{{item.tags.join('、')}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      aBoutique: [
        {
          id: 23,
          name: "00000",
          num: 888,
          tags: ["sdf", "232", "sdfsdf", "232", "sdfsdf", "232", "sdfsdf"],
          imgUrl: "sdfsdfsdf"
        },
        {
          id: 23,
          name: "11111",
          num: 888,
          tags: ["sdf", "232", "sdfsdf", "232", "sdfsdf", "232", "sdfsdf"],
          imgUrl: "sdfsdfsdf"
        },
        {
          id: 23,
          name: "22222222",
          num: 888,
          tags: ["sdf", "232", "sdfsdf", "232", "sdfsdf", "232", "sdfsdf"],
          imgUrl: "sdfsdfsdf"
        },
        {
          id: 23,
          name: "3333",
          num: 888,
          tags: ["sdf", "232", "sdfsdf", "232", "sdfsdf", "232", "sdfsdf"],
          imgUrl: "sdfsdfsdf"
        }
      ],

      aBargin: [
        {
          name: "sdfsdf.com",
          num: 34,
          status: 1,
          date: "2018-2-34"
        },
        {
          name: "sdfsdf.com",
          num: 34,
          status: 0,
          date: "2018-2-34"
        }
      ],
      domain: "",
      rangeValue: 10,
      aLink: [
        {
          name: "首页",
          key: "home",
          img: require("@/images/home/icon1.png")
        },
        {
          name: "淘域名",
          key: "home",
          img: require("@/images/home/icon2.png")
        },
        {
          name: "精品",
          key: "home",
          img: require("@/images/home/icon3.png")
        },
        {
          name: "平价",
          key: "home",
          img: require("@/images/home/icon4.png")
        },
        {
          name: "委托",
          key: "entrust",
          img: require("@/images/home/icon5.png")
        },
        {
          name: "咨询",
          key: "consult",
          img: require("@/images/home/icon6.png")
        },
        {
          name: "快讯",
          key: "latest",
          img: require("@/images/home/icon7.png")
        },
        {
          name: "新闻",
          key: "industry",
          img: require("@/images/home/icon8.png")
        }
      ]
    };
  },
  methods: {
    handleSubmit() {
      console.log("a");
    },
    turnTo(name, id) {
      let params = null;
      if (id) {
        params = {
          id: id
        };
      }
      this.$router.push({
        name: name,
        params: params
      });
    }
  },
  mounted() {}
};
</script>

