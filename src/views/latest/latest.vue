<style lang="less" scoped>
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
            <i class="icon_share"></i>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
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

