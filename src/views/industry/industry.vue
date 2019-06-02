<style lang="less" scoped>
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
      .item-b{
        margin: 0.3rem 0;
          .icon_share{
            margin-top: 0.2rem;
            margin-right: 2rem;
            width: 1.25rem;
            height: 1.25rem;
            display: inline-block;
            float: right;
            cursor: pointer;
            background: url('../../images/share.png') no-repeat;
          }
          .btn_zan{
            float: right;
            .icon_zan{
              cursor: pointer;
            width: 1.25rem;
            height: 1.25rem;
            display: inline-block;
            background: url('../../images/zan.png') no-repeat;
            background-size: 100% 100%;
            }
          }
      }
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
          <i class="icon_share"></i>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "news",
  data() {
    return {
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
  }
};
</script>

