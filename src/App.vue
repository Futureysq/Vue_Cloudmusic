<template>
  <div id="app" class="app">
    <div class="navigation">
      <div class="nav clearfix">
        <div class="logo fl">
          <h1>
            <a href>聆听音乐</a>
          </h1>
        </div>
        <div class="tag fl">
          <ul class="clearfix">
            <li
              v-for="(item,index) in li"
              :key="index"
              @click="linkTO(item.name,index)"
              :class="{active:index==ins1}"
            >
              {{item.title}}
              <i :class="{acti:index==ins1 && ins1 < 3 }"></i>
            </li>
          </ul>
        </div>
        <div class="right fl clearfix">
          <div class="search">
            <van-search
              v-model="value"
              shape="round"
              background="#242424"
              @search="onSearch"
              @blur="onBlur"
              placeholder="音乐/视频/电台/用户"
            />
            <div class="u-lstlay" v-show="isBlur">
              <div class="m-schlist">
                <div class="rap">
                  <div class="itm">
                    <div>
                      <h3 class="h3 fl">单曲</h3>
                      <ul class="clearfix">
                        <li
                          v-for="(item,index) in searchSongsData"
                          :key="index"
                          :id="item.id"
                          @mousedown="toSongDetail(item.id,item,index)"
                        >
                          <template v-if="index <= 4">
                            <a href="javascript:;" class="s-fc0 f-thide xtag">
                              <span class="s-fc7 f-tdn">{{item.singerName1}}</span>
                              <span>{{item.singerName2}}</span>
                              <span>{{item.singerName3}}</span>
                              {{item.artists[0].name}}
                            </a>
                          </template>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 class="h3 fl">歌手</h3>
                      <ol class="clearfix">
                        <li
                          v-for="(item,index) in singerData"
                          :key="index"
                          :id="item.id"
                          @mousedown="toSingerSongs(item.id,item,index)"
                        >
                          <template v-if="index <= 4">
                            <a href="javascript:;" class="s-fc0 f-thide xtag">
                              <span class="s-fc7 f-tdn">{{item.name}}</span>
                            </a>
                          </template>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="center fl">
            <span>创作者中心</span>
          </div>
          <div class="user">
            <div class="head">
              <img
                src="http://p1.music.126.net/pa6u4YeJfWATR_1goouoSQ==/109951163253039183.jpg?param=80y80"
                alt
              />
              <i class="msg fl abs">54</i>
            </div>
            <div v-if="$store.state.username">
              <a class="link s-fc3" v-text="$store.state.username"></a>
            </div>
            <div v-else>
              <a class="link s-fc3" @click="login">登录</a>
            </div>

            <div class="m-tlist clearfix">
              <div class="arr"></div>
              <ul class="f-cb lb mg">
                <li>
                  <a class="itm-1">
                    <i class="icn icn-hm"></i>
                    <em>我的主页</em>
                  </a>
                </li>
                <li>
                  <a class="itm-2">
                    <i class="icn icn-msg"></i>
                    <em>我的消息</em>
                    <span class="msg abs">54</span>
                  </a>
                </li>
                <li>
                  <a class="itm-2">
                    <i class="icn icn-lv"></i>
                    <em>我的等级</em>
                  </a>
                </li>
                <li>
                  <a href="#" class="itm-2">
                    <i class="icn icn-mbr"></i>
                    <em>VIP会员</em>
                  </a>
                </li>
              </ul>
              <ul class="f-cb ltb mg">
                <li>
                  <a class="itm-2">
                    <i class="icn icn-st"></i>
                    <em>个人设置</em>
                  </a>
                </li>
                <li>
                  <a class="itm-2">
                    <i class="icn icn-verify"></i>
                    <em>实名认证</em>
                  </a>
                </li>
              </ul>
              <ul class="f-cb lt">
                <li>
                  <a class="itm-3" href="#">
                    <i class="icn icn-ex"></i>
                    <em>退出</em>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FloorControl :songsUrl="songsUrl" :songsId="songsId"></FloorControl>
    <router-view></router-view>
  </div>
</template>

<script>
import FloorControl from "./components/FloorControl";
// import Register from "./components/Register";
// import Login from "./components/Login";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations } = createNamespacedHelpers("rankModule");
export default {
  data() {
    return {
      ins1: 0,
      value: "",
      li: [
        {
          name: "find",
          title: "发现音乐"
        },
        {
          name: "my",
          title: "我的音乐"
        },
        {
          name: "friend",
          title: "朋友"
        },
        {
          name: "shop",
          title: "商城"
        },
        {
          name: "musician",
          title: "音乐人"
        },
        {
          name: "client",
          title: "下载客户端"
        }
      ],
      isActive: false,
      searchSongsData: [],
      singerData: [],
      isBlur: false
    };
  },
  computed: {
    ...mapState([
      "songsData",
      "songsUrl",
      "isPlay",
      "songsId",
      "isShow5"
    ])
  },
  watch: {
    //监听路由跳转
    $route(to, from) {
      //解决tab的active在手动刷新之后默认回到第一个tab。但是这个有bug，会与recommend页面的query路由冲突，即会同步active
      // window.localStorage.setItem("index1", this.$route.query.index1);
    },
    value(val) {
      if (val == "") {
        this.isBlur = false;
        return;
      } else {
        this.onSearch(val);
        this.isBlur = true;
      }
    }
  },
  components: {
    FloorControl
    // Register,
    // Login
  },
  methods: {
    ...mapMutations([
      "getSongsData",
      "changeisShow5"
    ]),
    linkTO(obj, index) {
      this.$router.push({
        name: obj,
        // params: { recommend },
        //传index以用来解决tab的active在手动刷新之后默认回到第一个tab。
        query: { index }
      });
      //存index本地以用来解决tab的active在手动刷新之后默认回到第一个tab。
      window.localStorage.setItem("index", index);
      this.ins1 = index;
    },
    login() {
      this.$router.push("/login");
      this.$store.commit("rankModule/changeisShow3", true);
    },
    //绑定的方法为mousedown,这是因为blur时间和click事件冲突了。
    toSongDetail(id, item, index) {
      this.$router.push({
        name: "songsDetails",
        query: { id }
      });
      //获取歌曲详细信息
      this.axios({
        method: "GET",
        url: "http://49.234.68.133:3000/song/detail?ids=" + id
      }).then(result => {
        // 把获取的songUrl赋值给sUrl
        // this.sUrl = result.data.data[0].url;
        //提交回vuex修改歌名歌手等
        // console.log("sssss", result);

        this.$store.dispatch("rankModule/getSongsData", result.data.songs[0]);
        //提交回vuex修改播放状态
        // this.$store.commit("rankModule/changeisPlay", true);
      });
      this.axios({
        method: "GET",
        url: "http://49.234.68.133:3000/lyric?id=" + id
      })
        .then(res => {
          // console.log("歌词", res);
          this.$store.dispatch("rankModule/getLyric", res.data.lrc.lyric);
        })
        .catch(err => {
          // console.log("没找到歌词");
        });
    },
    toSingerSongs(id, item, index) {
      this.$router.push({
        name: "singerSongs",
        query: { id }
      });
      //获取50首歌曲
      this.axios({
        method: "GET",
        url: "http://49.234.68.133:3000/artist/top/song?id=" + id
      }).then(result => {
        // console.log('result',result);
        this.$store.dispatch("rankModule/getSingerSongs", result.data.songs);
        this.$store.dispatch("rankModule/getSingerIndexx", index);
      });

      // //获取相似歌手
      // this.axios({
      //   method: "GET",
      //   url: "http://localhost:3000/simi/artist?id=" + id
      // }).then(result => {
      //   console.log('result',result);
      // });

    },

    onSearch() {
      this.axios({
        method: "GET",
        url: "http://49.234.68.133:3000/search?keywords=" + this.value + "&limit=10"
      }).then(res => {
        // console.log("this.searchSongsData", res.data.result.songs);
        res.data.result.songs.forEach((e, i) => {
          let str = e.name;
          console.log("str", str);
          let str1 = str.substring(0, this.value.length);
          console.log("str1", str1);

          // if (str1 != this.value) {
          //   res.data.result.songs.splice(i, 1);

          // }
          if (str1 != this.value) {
            e.artists[0].name = "";
            e.singerName3 = "";
            return;
          }

          // str1 = str1.replace(!this.value, "");
          // console.log("str1", str1);
          let str2 = str.substring(this.value.length);
          if (str2 == 0) {
            e.singerName2 = "";
          }
          //给请求到的数据加上三个属性
          e.singerName1 = str1;
          e.singerName2 = str2;
          e.singerName3 = "-";
          //提交到data
          this.searchSongsData = res.data.result.songs;
          // console.log("this.searchSongsData", this.searchSongsData);
        });
      });

      this.axios({
        method: "GET",
        url:
          "http://49.234.68.133:3000/search?keywords=" +
          this.value +
          "&limit=10" +
          "&type=100"
      }).then(res => {
        console.log("this.searchSongsData", res);
        this.$store.dispatch(
        "rankModule/getSingerInfo",
        res.data.result.artists
      );
        res.data.result.artists.forEach((e, i) => {
          console.log('i',i);
          
          let str = e.name;
          console.log("str", str);
          let str1 = str.substring(0, this.value.length);
          console.log("str1", str1);
          //提交到data
          this.singerData = res.data.result.artists;

          console.log("this.singerData", this.singerData);
        });
      });
    },

    onBlur() {
      // console.log("likai");
      this.isBlur = false;
    }
  },
  mounted() {
    this.$store.state.isShow5 = true;
    //获取存好的index
    this.ins1 = window.localStorage.getItem("index");
    // console.log('this.songsUrl',this.songsUrl);
    // 2.0
    // let id = JSON.parse(window.localStorage.getItem("locaSongsId"));
    // let id = this.songsId
    // console.log('id',this.songsId);
    // this.songsId
    // this.axios({
    //   method: "GET",
    //   url: "http://localhost:3000/song/url?id=" + this.songsId
    // }).then(result => {
    //   console.log("result-----", result);
    //   // console.log("result-------------", result.data.data[0].url);
    //   // let songsId = result.data.data[0].id;
    //   // console.log('songsId',songsId)
    //   this.songsUrl = result.data.data[0].url;
    //   console.log("songsUrl", this.songsUrl);
    //   // let aa = this.rankListData[0].name;
    //   // console.log("歌曲名=====", aa);
    //   let songsData = localStorage.getItem("loginIn");
    //   songsData = songsData ? JSON.parse(songsData) : {};
    //   console.log("songsData", songsData);
    // });
    // 1.0
    // // 取出本地的数据
    // let songsData1 = JSON.parse(window.localStorage.getItem("loginIn"));
    // //把拿到的本地传回store/state里面的songsData,这样就避免了刷新的时候数据消失了。因为store/state里面的songsData在点击播放的时候是存进了数据的，但是一刷新就没有了，这是刚好把本地的存进去，完美解决。
    // this.$store.dispatch("rankModule/getSongsData", songsData1);
    //获取进度条宽度
    // let progressWidth = this.$refs.progress.clientWidth;
    // console.log("progressWidth", progressWidth);
    // this.$store.commit("rankModule/getProgressWidth", progressWidth);
    // this.$store.commit("rankModule/getMaskWidth", maskWidth);
  }
};
</script>
<style lang="less">
.app {
  width: 100%;
  height: 100%;
  .mid-tanBox {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 500px;
    margin-left: -250px;
    margin-top: -250px;
    z-index: 1000;
    background: #fff;
    border: 1px solid red;
    // .box{
    //   width: 300px;
    //   height: 300px;
    //   background-color: #0c73c2;
    // }
  }
  .navigation {
    height: 70px;
    background-color: #242424;
    .nav {
      width: 1100px;
      height: 100%;
      margin: 0 auto;
      .logo {
        height: 100%;
        h1 {
          margin: 0;
          height: 100%;
          line-height: 70px;
          a {
            float: left;
            width: 157px;
            height: 100%;
            padding-right: 20px;
            color: aliceblue;
            font-size: 24px;
            font-weight: normal;
            text-decoration: none;
          }
        }
      }
      .tag {
        ul {
          list-style: none;
          margin: 0;
          li {
            position: relative;
            float: left;
            color: #ccc;
            height: 70px;
            font-size: 14px;
            line-height: 70px;
            padding: 0 19px;
            i {
              position: absolute;
              display: inline-block;
              margin-top: 20px;
              top: 34px;
              left: 50%;
              transform: translateX(-50%);
              z-index: 999;
            }
            i.acti {
              width: 0px;
              height: 0px;
              border-left: 8px solid transparent;
              border-bottom: 12px solid #c20c0c;
              border-right: 8px solid transparent;
              border-top: 8px solid transparent;
            }
          }
          li.active {
            color: #fff;
            background: #000;
          }
          li:hover {
            color: #fff;
            background: #000;
          }
        }
      }
      .right {
        .search {
          position: relative;
          margin-top: 19px;
          float: left;
          margin-right: 12px;
        }
        .van-search {
          width: 158px;
          height: 32px;
          .van-icon-clear {
            display: none;
          }
        }
        .u-lstlay {
          clear: both;
          top: 40px;
          width: 240px;
          position: absolute;
          z-index: 120;
          left: 12px;
          box-sizing: border-box;
          border: 1px solid #bebebe;
          border-radius: 4px;
          background: #fff;
          box-shadow: 0 4px 7px #555;
          text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);
          .h3 {
            width: 30px;
            margin-right: -31px;
            padding: 10px 0 0 5px;
            line-height: 20px;
            font-weight: normal;
            font-size: 12px;
            border-top: 1px solid #e2e2e2;
          }
          ul {
            text-align: left;
            margin-left: 38px;
            margin-top: -1px;
            padding: 6px 0 5px;
            border-top: 1px solid #e2e2e2;
            border-left: 1px solid #e2e2e2;
            li {
              width: 100%;
              float: left;
              a {
                display: block;
                width: 100%;
                text-indent: 12px;
                line-height: 24px;
                color: #000;
                font-size: 12px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                cursor: pointer;
                .s-fc7 {
                  color: #0c73c2;
                }
              }
            }
            li:hover{
              background-color: #e2e2e2;
            }
          }
          ol {
            text-align: left;
            margin-left: 38px;
            margin-top: -1px;
            padding: 6px 0 5px;
            border-top: 1px solid #e2e2e2;
            border-left: 1px solid #e2e2e2;
            li {
              width: 100%;
              float: left;
              a {
                display: block;
                width: 100%;
                text-indent: 12px;
                line-height: 24px;
                color: #000;
                font-size: 12px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                cursor: pointer;
                .s-fc7 {
                  color: #000;
                }
              }
            }
            li:hover{
              background-color: #e2e2e2;
            }
          }
        }
        .van-search__content {
          padding-left: 0;
          width: 158px;
          height: 32px;
        }
        .van-cell {
          padding-left: 0;
          width: 158px;
          height: 32px;

          input {
            font-size: 12px;
            color: #9b9b9b;
          }
        }
        .van-icon {
          padding-left: 8px;
        }
        .center span {
          float: right;
          width: 90px;
          height: 32px;
          margin: 19px 0 0 12px;
          box-sizing: border-box;
          padding-left: 16px;
          font-size: 12px;
          background-color: #242424;
          border: 1px solid #4f4f4f;
          background-position: 0 -140px;
          line-height: 33px;
          text-align: left;
          color: #ccc;
          border-radius: 20px;
        }
        .user {
          position: relative;
          float: right;
          height: 45px;
          margin: 19px 0 0 20px;
          padding: 0 22px 0 0;
          background-position: right -47px;
          background-image: none;
          .link {
            display: block;
            width: 28px;
            margin-top: 7px;
            color: #787878;
            font-size: 12px;
          }
          .head {
            margin-top: 1px;
            border-radius: 50%;
            overflow: hidden;
            display: none;
          }
          .m-tlist {
            display: none;
            position: absolute;
            top: 38px;
            right: -43px;
            width: 158px;
            background: #2b2b2b;
            border: 1px solid #202020;
            box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.5);
            border-radius: 4px;
            .f-cb:after {
              clear: both;
              content: ".";
              display: block;
              height: 0;
              visibility: hidden;
            }
            .arr {
              position: absolute;
              top: -8px;
              left: 0;
              right: 0;
              margin-left: auto;
              margin-right: auto;
              margin: 0 auto;
              width: 0px;
              height: 0px;
              border-left: 8px solid transparent;
              border-bottom: 14px solid #2b2b2b;
              border-right: 8px solid transparent;
            }
          }
          .head:hover + .m-tlist {
            display: block;
          }
          .m-tlist:hover {
            display: block;
          }

          ul {
            margin: 0;
            padding: 0;
            list-style: none;
            li {
              float: left;
              box-sizing: border-box;
              width: 100%;
              a {
                text-decoration: none;
                color: #333;
                float: left;
                box-sizing: border-box;
                width: 100%;
                height: 34px;
                line-height: 34px;
                position: relative;
                height: 38px;
                box-sizing: border-box;
                overflow: hidden;
                // padding-left: 24px;
                color: #ccc;

                line-height: 39px;
                em {
                  font-style: normal;
                }
                .msg {
                  position: absolute;
                  top: 10px;
                  margin-left: 100px;
                  display: inline-block;
                  min-width: 17px;
                  height: 17px;
                  padding: 0 4px;
                  box-sizing: border-box;
                  background: #c20c0c;
                  border-radius: 18px;
                  border: 1px solid #242424;
                  line-height: 16px;
                  font-size: 12px;
                  font-style: normal;
                  white-space: nowrap;
                  color: #fff;
                  text-align: center;
                }
              }
            }
          }
          .head img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
          }
          .msg {
            display: inline-block;
            min-width: 17px;
            height: 17px;
            padding: 0 4px;
            box-sizing: border-box;
            background: #c20c0c;
            border-radius: 18px;
            border: 1px solid #242424;
            line-height: 16px;
            font-size: 12px;
            font-style: normal;
            white-space: nowrap;
            color: #fff;
            text-align: center;
          }
          .abs {
            position: absolute;
            top: -5px;
            left: 20px;
          }
        }
      }
    }
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-style: normal;
}
.clearfix::after {
  display: block;
  content: "";
  clear: both;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.auto-img {
  width: 100%;
  display: block;
}
html,
body {
  height: 100%;
  background-color: #f5f5f5;
  margin: 0;
}
body,
html,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
li,
dl,
dt,
dd,
header,
menu,
section,
p,
input,
td,
th,
ins {
  padding: 0;
  margin: 0;
}
</style>
