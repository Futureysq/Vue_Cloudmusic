<template>
  <div class="rank">
    <div class="wrapper clearfix">
      <div class="left">
        <div class="rank-list">
          <h2 class="teserank">云音乐特色榜</h2>
          <ul class="teseul clearfix">
            <li
              v-for="(item,index) in teseData"
              :key="index"
              :id="item.id"
              class="lirank"
              :class="index == active ? 'active' : ''"
              @click="liclick(item.id,index)"
            >
              <div class="item clearfix">
                <div class="left-1">
                  <a class="atr">
                    <img class="auto-img" :src="item.coverImgUrl" alt />
                  </a>
                </div>
                <p class="name">
                  <a href class="s-fc">{{item.name}}</a>
                </p>
                <p class="s-fc1">{{item.updateFrequency}}</p>
              </div>
            </li>
          </ul>
          <h2 class="teserank globalrank">全球媒体榜</h2>
          <ul class="globalul clearfix">
            <li
              v-for="(item1,index) in mediaData"
              :key="index"
              :id="item1.id"
              :class="index+4 == active ? 'active' : ''"
              @click="liclick1(item1.id,index+4)"
            >
              <div class="item clearfix">
                <div class="left-1">
                  <a href class="atr">
                    <img class="auto-img" :src="item1.coverImgUrl" alt />
                  </a>
                </div>
                <p class="name">
                  <a href class="s-fc">{{item1.name}}</a>
                </p>
                <p class="s-fc1">{{item1.updateFrequency}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../../components/Footer"
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations } = createNamespacedHelpers("rankModule");
export default {
  data() {
    return {
      ins: 0,
      ins1: 100,
      act: false,
      active: 0
    };
  },
  computed: {
    ...mapState(["rankData", "teseData", "mediaData", "selectActive"])
  },
  methods: {
    ...mapMutations(["getRankData", "changeActive"]),
    liclick(id, index) {
      this.active = index;
      // this.ins = num;
      // this.$store.commit('rankModule/changeActive', true);
      this.$router.push({
        name: "rankList",
        params: { rankList: id },
        query: { index }
      });

      this.axios({
        method: "GET",
        url: "http://49.234.68.133:3000/playlist/detail?id=" + id
      }).then(result => {
        // console.log("res", result);
        window.localStorage.setItem(
          "allSongsList",
          JSON.stringify(result.data.playlist.tracks)
        );
        this.$store.dispatch("rankModule/getAllSongsList", result.data.playlist.tracks);
      });
      // console.log("sss");
    },
    liclick1(id, index) {
      this.active = index;
      // this.ins1 = num;
      // this.act = true;
      this.$router.push({
        name: "rankList",
        params: { rankList: id },
        query: { index }
      });

      this.axios({
        method: "GET",
        url: "http://49.234.68.133:3000/playlist/detail?id=" + id
      }).then(result => {
        // console.log("res", result);
        window.localStorage.setItem(
          "allSongsList",
          JSON.stringify(result.data.playlist.tracks)
        );
        this.$store.dispatch("rankModule/getAllSongsList", result.data.playlist.tracks);
      });
    }
  },
  components:{
    Footer
  },
  mounted() {
    this.axios({
      method: "GET",
      url: "http://49.234.68.133:3000/toplist"
    })
      .then(result => {
        // console.log("rankData-->result", result);
        this.$store.dispatch("rankModule/getRankData", result.data.list);

        // 排行榜右侧顶部数据

        // this.$store.dispatch("rankModule/getRankHeadData", result.data.list);

        // result.data.list.forEach(e => {
        //   let id = e.id;
        //   console.log("id================>", id);
        // });
      })
      .catch(err => {
        // console.log(err);
      });
  }
};
</script>

<style lang="less" scoped>
.rank {
  .wrapper {
    min-height: 700px;
    width: 980px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
    background: url("../../assets/images/wrap3.png")
      repeat-y center 0;
    .left {
      position: static;
      float: left;
      width: 240px;
      .rank-list {
        margin-top: 40px;
        width: 240px;
        .teserank {
          text-align: left;
          padding: 0 10px 12px 15px;
          font-size: 14px;
          color: #000;
        }
        li {
          text-align: left;
          padding: 10px 0 10px 20px;
          position: relative;
          zoom: 1;
          height: 42px;
          cursor: pointer;
          .item {
            padding-left: 50px;
            .left-1 {
              display: inline;
              float: left;
              margin-left: -50px;
              overflow: hidden;
              width: 40px;
            }
            .name {
              width: 150px;
              overflow: hidden;
              margin-top: 2px;
              margin-bottom: 8px;
              .s-fc {
                white-space: nowrap;
                color: #000;
                font-size: 12px;
              }
            }
            .s-fc1 {
              color: #999;
              font-size: 12px;
            }
          }
        }
        li.active {
          background: #e6e6e6;
        }
        li:hover {
          background-color: #f4f2f2;
        }
        .globalrank {
          margin-top: 20px;
          padding: 0 10px 12px 15px;
          font-size: 14px;
          color: #000;
        }
      }
    }
  }
}
</style>