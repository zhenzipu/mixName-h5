<style lang="less">
.consult {
  .con1 {
    height: 8.125rem;
    background: url("../../images/consult/top.png") no-repeat;
    background-size: 100% 100%;
  }

  .con2 {
    height: 4.6875rem;
    background: #eeeeee;
    padding: 0.75rem;
    line-height: 0.875rem;
  }

  .con3 {
    text-align: center;
    .carousel-item {
      padding-top: 2rem;
      height: 8.125rem;
      p:nth-child(1) {
        line-height: 2.5rem;
        font-size: 1.625rem;
      }
      p:nth-child(2) {
        font-size: 1rem;
        line-height: 1.875rem;
      }
    }
    .act {
      background: url("../../images/consult/icon_2.png") no-repeat;
      background-size: 100% 100%;
      color: #fff;
    }
  }

  .con4 {
    p {
      font-size: 1rem;
      line-height: 2rem;
      font-weight: bold;
      text-align: center;
    }
    div {
      display: inline-block;
      background-size: 100% 100%;
    }
    .con4_l {
      width: 15rem;
      height: 8.75rem;
      background: url("../../images/consult/company.png");
      background-size: 100% 100%;
      margin-right: 0.625rem;
    }
    .con4_r {
      width: 6.25rem;
      height: 8.75rem;
      background: url("../../images/consult/name.png");
      background-size: 100% 100%;
    }
  }

  .con5 {
    p {
      font-size: 1rem;
      line-height: 2rem;
      font-weight: bold;
      text-align: center;
      color: #fff;
    }
    height: 15rem;
    background: url("../../images/consult/bg.png");
    background-size: 100% 100%;
    .con5-img {
      margin: 2rem auto;
      height: 9.0625rem;
      width: 21.875rem;
      background: url("../../images/consult/media2.png");
      background-size: 100% 100%;
    }
  }

  .con6 {
    p {
      font-size: 1rem;
      line-height: 2rem;
      font-weight: bold;
      text-align: center;
    }
    height: 15rem;
    background: #f8f8f8;
    .con6-img {
      margin: 2rem auto;
      height: 9.0625rem;
      width: 21.875rem;
      background: url("../../images/consult/company2.png");
      background-size: 100% 100%;
    }
  }
}
</style>

<template>
  <div class="consult">
    <!-- con1 -->
    <div class="con1"></div>
    <!-- con2 -->
    <div class="con2">MIX小投行深度垂直于区块链行业，面向区块链创业者，提供一站式的注册、法律、财务、社群、活动、媒体、咨询、投行投顾投资等一站式全球落地服务。</div>
    <!-- con3 -->
    <div class="con3">
      <Carousel dots="outside" @on-change="handleChangeCarousel">
        <CarouselItem v-for="(item,idx) in aSwipe" :key="idx">
          <div :class="idx==actIdx?'carousel-item act':'carousel-item'">
            <p>{{item.title}}</p>
            <p>{{item.con}}</p>
          </div>
        </CarouselItem>
      </Carousel>
    </div>

    <!-- con4 -->
    <div class="con4">
      <p>资本合作伙伴</p>
      <div class="con4_l"></div>
      <div class="con4_r"></div>
    </div>

    <!-- con5 -->
    <div class="con5">
      <p>媒体合作伙伴</p>
      <div class="con5-img"></div>
    </div>

    <!-- con6 -->
    <div class="con6">
      <p>交易合作伙伴</p>
      <div class="con6-img"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      actIdx: 0,
      aSwipe: [
        {
          title: "资本对接",
          con: "推荐基石、私募投资、VC"
        },
        {
          title: "交易所对接",
          con: "交易所推荐、上币策略、融资"
        },
        {
          title: "品牌打造",
          con: "媒体报道、PR策略、直播、活动策划"
        },
        {
          title: "市值管理",
          con: "量化交易、基金托管、策略套利"
        }
      ]
      //
    };
  },
  methods: {
    handleChangeCarousel(oldValue, value) {
      console.log("oldValue", oldValue);
      this.actIdx = value;
      console.log("value", value);
    }
  }
};
</script>

