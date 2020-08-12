<template>
  <div class="find">
    <div class="tabbar">
      <div class="wrapper">
        <div class="inner">
          <ul class="clearfix">
            <li v-for="(item,index) in tab" :key="index" @click="liclick(item.name,index)">
              <em :class="{act:index==ins}">{{item.title}}</em>
              <i class="arr"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ins: 0,
      tab: [
        {
          name: "recommend",
          title: "推荐"
        },
        {
          name: "rank",
          title: "排行榜"
        },
        {
          name: "songSheet",
          title: "歌单"
        },
        {
          name: "anchorStation",
          title: "主播电台"
        },
        {
          name: "singer",
          title: "歌手"
        },
        {
          name: "newDiscs",
          title: "新碟上架"
        }
      ],
      Images: [
        {
          img:
            "http://p1.music.126.net/NWoO7w6ewms0VoESXYZO-g==/109951165107884591.jpg?imageView&quality=89"
        },
        {
          img:
            "http://p1.music.126.net/EVxzbSruJ5kPa31RHa0CxA==/109951165108187064.jpg?imageView&quality=89"
        },
        {
          img:
            "http://p1.music.126.net/-JVsm8B4Rat0gzNFT3jttg==/109951165108374813.jpg?imageView&quality=89"
        }
      ]
    };
  },
  methods: {
    liclick(o, index) {
      this.$router.push({
        name: o,
        //传index以用来解决tab的active在手动刷新之后默认回到第一个tab。
        query: { index }
      });
      this.ins = index;
    }
  },
  mounted() {
    //解决tab的active在手动刷新之后默认回到第一个tab。
    if (this.$route.query.index) {
      this.ins = this.$route.query.index;
    } else {
      this.ins = 0;
    }
  }
};
</script>

<style lang="less" scoped>
.find {
  .tabbar {
    width: 100%;
    height: 35px;
    background-color: #c20c0c;
    .wrapper {
      width: 1100px;
      height: 35px;
      margin: 0 auto;
      .inner {
        width: 100%;

        ul {
          padding-left: 180px;
          list-style: none;
          li {
            float: left;
            color: #ccc;
            height: 35px;
            font-size: 14px;
            line-height: 35px;
            // padding: 0 19px;
            em {
              display: inline-block;
              height: 20px;
              padding: 0 13px;
              margin: 7px 17px 0;
              border-radius: 20px;
              line-height: 21px;
              font-style: normal;
              text-align: left;
              font-size: 12px;
              color: #fff;
              border-radius: 50px;
            }
            em.act {
              color: #fff;
              background: #9b0909;
            }
            em:hover {
              color: #fff;
              background: #9b0909;
            }
          }
        }
      }
      .clearfix::after {
        content: "";
        display: block;
        height: 0;
        clear: both;
        opacity: 1;
      }
    }
  }
}
</style>