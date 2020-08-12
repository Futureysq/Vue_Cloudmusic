<template>
  <!-- <div> -->
  <div class="right">
    <!-- v-if判断rankData数组是否有内容，如果不加，可以渲染出来但会报错 -->
    <div class="content" v-if="rankData[index1]">
      <div class="wrap1">
        <div class="m-info clearfix">
          <div class="u-c">
            <img class="auto-img" :src="rankData[index1].coverImgUrl" alt />
            <span class="msk"></span>
          </div>
          <div class="cnt">
            <div class="cnt-1">
              <div class="hd">
                <h2 class="ff">{{rankData[index1].name}}</h2>
              </div>
              <div class="user clearfix">
                <i class="u-icon"></i>
                <span class="s-f1">最近更新：{{forDate(rankData[index1].updateTime)}}</span>
                <span class="s-f2">（{{rankData[index1].updateFrequency}}）</span>
              </div>
              <div class="btn clearfix">
                <a href="javascript:;" class="u-btn" @click.stop="plSongSheet(rankListData)">
                  <i>
                    <em class="pl"></em>
                    播放
                  </i>
                </a>
                <a href class="u-btnt u-bt1"></a>
                <a href class="u-btnt u-bt2">
                  <i>({{rankData[index1].subscribedCount}})</i>
                </a>
                <a href class="u-btnt u-bt3">
                  <i>(8750)</i>
                </a>
                <a href class="u-btnt u-bt4">
                  <i>下载</i>
                </a>
                <a href class="u-btnt u-bt5">
                  <i>
                    <span class="count">(187621)</span>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wrap2">
        <div class="s-title clearfix">
          <h3 class="fl">
            <span class="f-ff">歌曲列表</span>
          </h3>
          <span class="sub fl">
            <span>{{rankData[index1].trackCount}}</span>首歌
          </span>
          <div class="more fr">
            播放：
            <strong class="s-fc">{{rankData[index1].playCount}}</strong>
            次
          </div>
        </div>
        <div class="song-list">
          <div class="s-l">
            <table class="s-table">
              <thead>
                <tr>
                  <th class="first w1"></th>
                  <th>
                    <div class="wp">标题</div>
                  </th>
                  <th class="w2-1">
                    <div class="wp">时长</div>
                  </th>
                  <th class="w3-1">
                    <div class="wp ww">歌手</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,index) in rankListData" :key="index">
                  <td>
                    <div class="hd">
                      <span class="num">{{index+1}}</span>
                      <div class="rk">
                        <span class="u-icn u-icn-75"></span>
                      </div>
                    </div>
                  </td>
                  <td class>
                    <div class="f-cb clearfix">
                      <div class="tt">
                        <a href>
                          <img class="rpic auto-img" :src="item.al.picUrl" v-if="index < 3" alt />
                        </a>
                        {{aa}}
                        <!-- active:playSongs && playSongs.id === item.id, -->
                        <span
                          :id="item.id"
                          class="ply1"
                          :class="{act:songsData && songsData.id === item.id}"
                          @click="playSong(item.id,item,index)"
                        >&nbsp;</span>
                        <div class="ttc">
                          <span class="txt">
                            <a href>
                              <b>{{item.name}}</b>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="s-fc3">
                    <span class="u-dur">{{formatTime(item.dt)}}</span>
                    <div class="opt hshow">
                      <a class="u-icn u-icn-81 icn-add" href="javascript:;"></a>
                      <span class="icn icn-fav" @click="likeSong(item,item.id)"></span>
                      <span class="icn icn-share"></span>
                      <span class="icn icn-dl"></span>
                    </div>
                  </td>
                  <td class>
                    <div class="text">
                      <span>
                        <a class href>{{item.ar[0].name}}</a>
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>

  <!-- </div> -->
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations } = createNamespacedHelpers("rankModule");
import { Toast } from "vant";
export default {
  data() {
    return {
      listIndex: 0,
      index1: 0,
      active: -1,
      songsUrl: null,
      songsData: {},
      playingSong: [],
      aa: null,
    };
  },

  computed: {
    ...mapState([
      "rankListData",
      "rankData",
      "tesedata",
      "rankHeadData",
      "progressWidth",
      "maskWidth",
      "playSongs",
      "currentSong",
      "likeSongs",
    ])
  },
  methods: {
    ...mapMutations([
      "getRankListData",
      "getRankData",
      "getRankHeadData",
      "getProgressWidth",
      "getMaskWidth",
      "getPlaySongs",
      "getCurrentSong",
      "getLikeSongs",
    ]),
    formatTime(m) {
      //将毫秒转换为秒
      var second = Math.floor((m / 1000) % 60);

      second = second >= 10 ? second : "0" + second;

      //将毫秒转换为分钟
      var minute = Math.floor(m / 1000 / 60);

      minute = minute >= 10 ? minute : "0" + minute;

      return minute + ":" + second;
    },

    forDate(n) {
      let timestr = new Date(parseInt(n));

      let month = timestr.getMonth() + 1;

      let date = timestr.getDate();

      // 　　然后再组装成时间：

      let datetime =
        (Array(2).join(0) + month).slice(-2) +
        "-" +
        (Array(2).join(0) + date).slice(-2);
      // console.log(datetime);
    },

    playSong(id, item, index) {
      this.songsData = item;
      this.$store.dispatch("rankModule/getIndex", index);
      this.axios({
        method: "GET",
        url: "http://49.234.68.133:3000/song/url?id=" + id
      }).then(result => {
        this.$store.dispatch("rankModule/getSongsUrl", result.data.data[0].url);

        //弹出后1秒关闭
        let timer = setTimeout(() => {
          this.$store.dispatch("rankModule/changeisShow", false);
          clearTimeout(timer);
        }, 5000);

        this.$store.dispatch("rankModule/getSongsData", item);
        this.$store.dispatch("rankModule/getSongsId", id);

        window.localStorage.setItem("playSong", JSON.stringify(item));

        this.$store.commit("rankModule/changeisPlay", true);

        //控制底部播放器的弹出
        this.$store.dispatch("rankModule/changeisShow", true);
        // 1.0
        
        //判断有没有数据，如果有执行下面语句，如果没有的话在else里面push进去
        if (this.currentSong.length) {
          for (let i = 0; i < this.currentSong.length; i++) {
            const element = this.currentSong[i];
            if (id == element.id) {
              break; //终止本次for循环  如果用return的话下麦呢的代码也不执行了
            }
            //这里是当循环到最后一项的时候（id和数组每一项对比），还是没找到相等id的时候push进去
            if (i == this.currentSong.length - 1) {
              this.currentSong.push(item);
            }
          }
        } else {
          //当数组没有数据的时候push进来
          this.currentSong.push(item);
        }
        console.log("this.currentSong", this.currentSong);
        // 2.0
        this.$store.dispatch("rankModule/getCurrentSong", this.currentSong);
        window.localStorage.setItem(
          "currentSong",
          JSON.stringify(this.currentSong)
        );
        // 3.0
        // 点击上一首下一首需要的下标值
        // this.currentSong.length是播放列表所有歌曲长度
        if (this.currentSong.length == 0) {
          this.$store.dispatch("rankModule/getIndex", 0);
        } else {
          //返回当前歌的下标值
          let index = this.currentSong.findIndex(items => items.id === id);
          if (index === -1) {
            this.$store.dispatch(
              "rankModule/getIndex",
              this.currentSong.length
            );
          } else {
            this.$store.dispatch("rankModule/getIndex", index);
          }
        }
      });
      //获取歌词
      this.axios({
        method: "GET",
        url: "http://49.234.68.133:3000/lyric?id=" + id
      })
        .then(result => {
          // console.log("歌词", result);
          this.$store.dispatch("rankModule/getLyric", result.data.lrc.lyric);
        })
        .catch(err => {
          // console.log("没找到歌词");
        });
    },
    likeSong(item, id) {
      // console.log("item", item);
      // this.likeSongs = JSON.parse(localStorage.getItem("likeSongs"));
      // console.log('this.likeSongs',this.likeSongs);
      // 1.0
      //判断有没有数据，如果有执行下面语句，如果没有的话在else里面push进去
      if (this.likeSongs.length) {
        for (let i = 0; i < this.likeSongs.length; i++) {
          const element = this.likeSongs[i];
          if (id == element.id) {
            break; //终止本次for循环  如果用return的话下麦呢的代码也不执行了
          }
          Toast({
            message: "已存在"
          });
          //这里是当循环到最后一项的时候（id和数组每一项对比），还是没找到相等id的时候push进去
          if (i == this.likeSongs.length - 1) {
            this.likeSongs.push(item);
            Toast({
              message: "收藏成功"
            });
          }
        }
      } else {
        //当数组没有数据的时候push进来
        this.likeSongs.push(item);
      }
      // console.log("this.likeSongs", this.likeSongs);
      this.$store.dispatch("rankModule/getLikeSongs", this.likeSongs);
      window.localStorage.setItem("likeSongs", JSON.stringify(this.likeSongs));
    },
  },
  mounted() {
    let currentSong = JSON.parse(window.localStorage.getItem("currentSong"));
    this.$store.dispatch("rankModule/getCurrentSong", currentSong);
    // console.log('playSong',playSongs);
    // this.aa = playSongs
  },
  created() {
    //截取路由参数

    let id = this.$route.params.rankList;
    // console.log("id==>", id);
    this.axios({
      method: "GET",
      url: "http://49.234.68.133:3000/playlist/detail?id=" + id
    }).then(result => {
      // console.log("res", result);
      // console.log("result=====", result.data.playlist.tracks);

      this.$store.dispatch(
        "rankModule/getRankListData",
        result.data.playlist.tracks
      );
    });
    // 截取路由query参数
    let Index = this.$route.query.index;
    // console.log("index", Index);

    // this.initSongConstruct();
  },
  beforeRouteUpdate(to, from, next) {
    //截取路由参数
    // let id = this.$route.params.rankList;
    let id = to.params.rankList;
    // console.log("id==>", id);
    // 截取路由query参数
    let Index = to.query.index;
    // console.log("index", Index);
    this.index1 = Index;

    this.axios({
      method: "GET",
      url: "http://49.234.68.133:3000/playlist/detail?id=" + id
    }).then(result => {
      // console.log("res", result);
      // console.log("result=====", result.data.playlist.tracks);
      this.$store.dispatch(
        "rankModule/getRankListData",
        result.data.playlist.tracks
      );
    });
    next();
  }
};
</script>

<style lang="less" scoped>
.right {
  height: 100%;
  float: right;
  width: 740px;
  padding-bottom: 50px;
  .content {
    height: 100%;
    width: 100%;
    .wrap1 {
      padding: 40px;
      .u-c {
        width: 150px;
        height: 150px;
        float: left;
        position: relative;
        display: inline;
        margin: 0 -220px 0 0;
        padding: 3px;
        border: 1px solid #ccc;
        .msk {
          position: absolute;
          width: 150px;
          height: 150px;
          background-position: -230px -380px;
          top: 3px;
          left: 3px;
          background-image: url("../../assets/images/coverall.png");
        }
      }
      .cnt {
        float: right;
        width: 100%;
        .cnt-1 {
          margin-left: 187px;
          .hd {
            position: relative;
            margin: 16px 0 4px;
            line-height: 24px;
            text-align: left;
            .ff {
              line-height: 24px;
              font-size: 20px;
              font-weight: normal;
            }
          }
          .user {
            margin: 0 0 20px;
            line-height: 35px;
            text-align: left;
            i {
              float: left;
              margin: 11px 0 0 3px;
              width: 13px;
              height: 13px;
              background-position: -18px -682px;
              display: inline-block;
              overflow: hidden;
              vertical-align: middle;
              font-style: normal;
              text-align: left;
              font-size: inherit;
              background-image: url("../../assets/images/icon.png");
            }
            .s-f1 {
              color: #666;
              font-size: 12px;
              margin-left: 5px;
            }
            .s-f2 {
              color: #999;
              font-size: 12px;
            }
          }
          .btn {
            margin-bottom: 25px;
            margin-right: -10px;
            .u-btn {
              float: left;
              color: #fff;
              background-position: right -428px;
              text-decoration: none;
              padding: 0 5px 0 0;
              white-space: nowrap;
              display: inline-block;
              height: 31px;
              line-height: 31px;
              overflow: hidden;
              vertical-align: top;
              text-align: center;
              cursor: pointer;
              background-image: url("../../assets/images/button2.png");
              i {
                padding: 0 7px 0 8px;
                color: #fff;
                font-size: 12px;
                background-position: 0 -387px;
                background-image: url("../../assets/images/button2.png");
                pointer-events: none;
                display: inline-block;
                height: 31px;
                line-height: 31px;
                font-style: normal;
                overflow: hidden;
                vertical-align: top;
                text-align: center;
                cursor: pointer;
                em {
                  float: left;
                  width: 20px;
                  height: 18px;
                  margin: 6px 2px 2px 0;
                  background-position: 0 -1622px;
                  background-image: url("../../assets/images/button2.png");
                  overflow: hidden;
                }
              }
            }
            .u-btnt {
              margin-right: 6px;
              background-image: url("../../assets/images/button2.png");
              color: #333;
              text-decoration: none;
              padding: 0 5px 0 0;
              white-space: nowrap;
              float: left;
              height: 31px;
              line-height: 30px;
              min-width: 23px;
              cursor: pointer;
            }
            .u-bt1 {
              margin-right: 5px;
              width: 31px;
              margin-left: -3px;
              padding-right: 0;
              background-position: 0 -1588px;
            }
            .u-bt2 {
              cursor: default;
              background-position: right -1192px;
              background-image: url("../../assets/images/button2.png");
              i {
                color: #333;
                font-size: 12px;
                font-style: normal;
                background-position: 0 -977px;
                cursor: default;
                padding-right: 2px;
                padding-left: 28px;
                float: left;
                height: 31px;
                line-height: 30px;
                min-width: 23px;
                background-image: url("../../assets/images/button2.png");
              }
            }
            .u-bt3 {
              background-position: right -1020px;
              background-image: url("../../assets/images/button2.png");
              i {
                background-position: 0 -1225px;
                padding-right: 2px;
                padding-left: 28px;
                font-size: 12px;
                color: #333;
                font-style: normal;
                float: left;
                height: 31px;
                line-height: 30px;
                min-width: 23px;
                cursor: pointer;
                background-image: url("../../assets/images/button2.png");
              }
            }
            .u-bt4 {
              background-position: right -1020px;
              background-image: url("../../assets/images/button2.png");
              i {
                background-position: 0 -2761px;
                background-image: url("../../assets/images/button2.png");
                padding-right: 2px;
                padding-left: 28px;
                float: left;
                height: 31px;
                font-size: 12px;
                font-style: normal;
                color: #333;
                line-height: 30px;
                min-width: 23px;
                cursor: pointer;
              }
            }
            .u-bt5 {
              background-position: right -1020px;
              background-image: url("../../assets/images/button2.png");
              i {
                background-position: 0 -1465px;
                background-image: url("../../assets/images/button2.png");
                padding-right: 2px;
                padding-left: 28px;
                float: left;
                height: 31px;
                font-size: 12px;
                font-style: normal;
                color: #333;
                line-height: 30px;
                min-width: 23px;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
    .wrap2 {
      padding: 0 30px 40px 40px;
      .s-title {
        height: 33px;
        border-bottom: 2px solid #c20c0c;
        h3 {
          font-size: 20px;
          line-height: 28px;
          float: left;
          font-weight: normal;
          .f-ff {
            font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
          }
        }
        .sub {
          margin: 9px 0 0 20px;
          color: #666;
          font-size: 12px;
        }
        .more {
          margin-top: 5px;
          color: #666;
          font-size: 12px;
          strong {
            color: #c20c0c;
            font-weight: bold;
          }
        }
      }
      .song-list {
        .s-l {
          .s-table {
            width: 100%;
            border: 1px solid #d9d9d9;
            border-collapse: collapse;
            border-spacing: 0;
            table-layout: fixed;
            thead {
              display: table-header-group;
              vertical-align: middle;
              border-color: inherit;
              tr {
                display: table-row;
                vertical-align: inherit;
                border-color: inherit;
                border-bottom: 1px solid #ccc;
                .first {
                  width: 77px;
                  border-right: 1px solid #ccc;
                }
                .w2-1 {
                  width: 91px;
                }
                .w3-1 {
                  width: 26%;
                }
                th {
                  height: 33px;
                  background-color: #f7f7f7;

                  vertical-align: top;
                  text-align: left;
                  font-size: 12px;
                  font-weight: normal;
                  color: #666;

                  .wp {
                    height: 18px;
                    line-height: 18px;
                    padding: 8px 10px;
                    border-right: 1px solid #ccc;
                  }
                  .ww {
                    border-right: 0;
                  }
                }
              }
            }
            tbody {
              display: table-row-group;
              vertical-align: middle;
              border-color: inherit;
              tr {
                display: table-row;
                vertical-align: inherit;
                border-color: inherit;
                td {
                  padding: 6px 10px;
                  line-height: 18px;
                  text-align: left;
                  display: table-cell;
                  vertical-align: inherit;
                  .hd {
                    height: 18px;
                    .num {
                      float: left;
                      width: 25px;
                      font-size: 12px;
                      margin-left: 0;
                      text-align: center;
                      color: #999;
                    }
                    .rk {
                      float: right;
                      width: 32px;
                      margin-right: -5px;
                      text-align: center;
                      .u-icn-75 {
                        display: block;
                        float: none;
                        margin: 0 auto;
                        padding-left: 0;
                        width: 16px;
                        height: 17px;
                        background-position: -67px -283px;
                        overflow: hidden;
                        vertical-align: middle;
                        background-image: url("../../assets/images/icon.png");
                      }
                    }
                  }
                  .tt {
                    float: left;
                    width: 100%;
                    .rpic {
                      float: left;
                      width: 50px;
                      height: 50px;
                      margin-right: 14px;
                    }
                    .ply1.active {
                      margin-right: 8px;
                      float: left;
                      width: 17px;
                      height: 17px;
                      cursor: pointer;
                      background-position: -20px -128px;
                      background-image: url("../../assets/images/table.png");
                    }
                    .ply1.act {
                      background-position: -20px -128px;
                      background-image: url("../../assets/images/table.png");
                    }
                    .ply1 {
                      margin-right: 8px;
                      float: left;
                      width: 17px;
                      height: 17px;
                      cursor: pointer;
                      background-position: 0 -103px;
                      background-image: url("../../assets/images/table.png");
                    }
                    .ply1:hover {
                      background-position: 0 -128px;
                      background-image: url("../../assets/images/table.png");
                    }
                    .ttc {
                      height: 18px;
                      margin-right: 20px;
                      .txt {
                        max-width: 88%;
                        position: relative;
                        display: inline-block;
                        padding-right: 25px;
                        margin-right: -25px;
                        height: 20px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        border: 0;
                        white-space: nowrap;
                        a {
                          text-decoration: none;
                          color: #333;
                          b {
                            margin: 0;
                            padding: 0;
                            font-size: 12px;
                            font-weight: normal;
                            .soil {
                              position: absolute;
                              text-indent: -9999em;
                            }
                          }
                        }
                      }
                    }
                  }
                }
                .s-fc3 {
                  position: relative;
                  .u-dur {
                    // position: absolute;
                    color: #666;
                    font-size: 12px;
                  }
                  .opt {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-10px);
                    display: none;
                    float: left;
                    .icn {
                      float: left;
                      width: 18px;
                      height: 16px;
                      margin: 2px 0 0 4px;
                      overflow: hidden;
                      text-indent: -999px;
                      cursor: pointer;
                      background: url("../../assets/images/table.png");
                    }
                    .u-icn {
                      display: inline-block;
                      overflow: hidden;
                      vertical-align: middle;
                      background: url("../../assets/images/icon.png");
                    }
                    .u-icn-81 {
                      float: left;
                      margin-top: 2px;
                      width: 13px;
                      height: 13px;
                      background-position: 0 -700px;
                    }
                    .icn-fav {
                      background-position: 0 -174px;
                    }
                    .icn-share {
                      background-position: 0 -195px;
                    }
                    .icn-dl {
                      background-position: -81px -174px;
                    }
                  }
                }
                .text {
                  width: 100%;
                  position: relative;
                  zoom: 1;
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  a {
                    color: #333;
                    font-size: 12px;
                    .soil {
                      position: absolute;
                      text-indent: -9999em;
                    }
                  }
                }
              }
              tr:hover .opt {
                display: block;
              }
              tr:hover .u-dur {
                color: transparent;
              }
              tr:nth-child(2n - 1) {
                background-color: #f7f7f7;
              }
              tr:nth-child(-n + 3) {
                .ply1 {
                  margin-top: 16.5px;
                  margin-right: 8px;
                  float: left;
                }
                .ply {
                  margin-top: 16.5px;
                  margin-right: 8px;
                  float: left;
                }
                .ttc {
                  margin-top: 16px;
                  height: 18px;
                  margin-right: 20px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>