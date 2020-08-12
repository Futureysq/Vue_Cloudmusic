<template>
  <div class="singerSongs">
    <div class="tabbar">
      <div class="wrapper">
        <div class="inner">
          <ul class="clearfix">
            <li v-for="(item,index) in tab" :key="index" @click="liclick(item.name,index)">
              <em>{{item.title}}</em>
              <i class="arr"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="details clearfix">
      <div class="inner">
        <div class="left">
          <div class="wrap">
            <div class="n-artist clearfix">
              <div class="btm">
                <h2 class="sname f-thide sname-max">{{singerInfo[indexx].name}}</h2>
                <h3 class="salias f-thide">{{singerInfo[indexx].alias[0]}}</h3>
              </div>
              <img
                :src="singerInfo[indexx].picUrl"
                alt
              />
            </div>
            <div class="n-artist1 clearfix">
              <div class="btm">
                <h2 class="sname f-thide sname-max">热门作品</h2>
                <div>
                  <div>
                    <div class="clearfix">
                      <table class="m-table">
                        <tbody>
                          <tr v-for="(item,index) in singerSongs" :key="index">
                            <td class="left">
                              <div class="hd">
                                <span
                                  class="ply"
                                  :class="{act:songsData && songsData.id === item.id}"
                                  @click="playSingerSongs(item.id,item)"
                                ></span>
                                <span class="num">{{index + 1}}</span>
                              </div>
                            </td>
                            <td>
                              <div class="clearfix">
                                <div class="tt">
                                  <div class="ttc">
                                    <span class="txt">
                                      <a href="#">
                                        <b>{{item.name}}</b>
                                      </a>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td class="s-fc3">
                              <span class="u-dur candel">{{formatTime(item.dt)}}</span>
                              <div class="opt hshow">
                                <a class="u-icn u-icn-81 icn-add" href="javascript:;"></a>
                                <span class="icn icn-fav"></span>
                                <span class="icn icn-share"></span>
                                <span class="icn icn-dl"></span>
                              </div>
                            </td>

                            <td class="s-fc4">
                              <div class="text">
                                <span>
                                  <a href="#">{{item.al.name}}</a>
                                </span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="content">
          <h3 class="u-hd3">
            <span>相似歌手</span>
          </h3>
          <!-- <ul class="m-hdlist clearfix">
            <li>
              <div class="hd">
                <a href="#">
                  <img
                    class="img-auto"
                    src="http://p1.music.126.net/1tSJODTpcbZvNTCdsn4RYA==/109951165034950656.jpg?param=50y50"
                    alt
                  />
                </a>
              </div>
              <p>
                <a href="#" class="nm nm-icn f-ib f-thide">薛之谦</a>
              </p>
            </li>
            <li>
              <div class="hd">
                <a href="#">
                  <img
                    class="img-auto"
                    src="http://p1.music.126.net/1tSJODTpcbZvNTCdsn4RYA==/109951165034950656.jpg?param=50y50"
                    alt
                  />
                </a>
              </div>
              <p>
                <a href="#" class="nm nm-icn f-ib f-thide">薛之谦</a>
              </p>
            </li>
            <li>
              <div class="hd">
                <a href="#">
                  <img
                    class="img-auto"
                    src="http://p1.music.126.net/1tSJODTpcbZvNTCdsn4RYA==/109951165034950656.jpg?param=50y50"
                    alt
                  />
                </a>
              </div>
              <p>
                <a href="#" class="nm nm-icn f-ib f-thide">薛之谦</a>
              </p>
            </li>
            <li>
              <div class="hd">
                <a href="#">
                  <img
                    class="img-auto"
                    src="http://p1.music.126.net/1tSJODTpcbZvNTCdsn4RYA==/109951165034950656.jpg?param=50y50"
                    alt
                  />
                </a>
              </div>
              <p>
                <a href="#" class="nm nm-icn f-ib f-thide">薛之谦</a>
              </p>
            </li>
          </ul> -->
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations } = createNamespacedHelpers("rankModule");
export default {
  data() {
    return {
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
      songsData: {}
    };
  },
  computed: {
    ...mapState(["singerSongs", "currentSong","singerInfo","indexx"])
  },
  methods: {
    ...mapMutations(["getSingerSongs", "getCurrentSong","getSingerInfo","getSingerIndexx"]),
    formatTime(m) {
      //将毫秒转换为秒
      var second = Math.floor((m / 1000) % 60);

      second = second >= 10 ? second : "0" + second;

      //将毫秒转换为分钟
      var minute = Math.floor(m / 1000 / 60);

      minute = minute >= 10 ? minute : "0" + minute;

      return minute + ":" + second;
    },
    liclick(o) {
      this.$router.push({ name: o });
    },
    playSingerSongs(id, item) {
      this.songsData = item;
      this.axios({
        method: "GET",
        url: "http://49.234.68.133:3000/song/url?id=" + id
      }).then(result => {
        this.$store.dispatch("rankModule/getSongsUrl", result.data.data[0].url);

        this.$store.dispatch("rankModule/getSongsData", item);
        window.localStorage.setItem("playSong", JSON.stringify(item));

        this.$store.commit("rankModule/changeisPlay", true);

        //控制底部播放器的弹出
        this.$store.dispatch("rankModule/changeisShow", true);
        //弹出后1秒关闭
        let timer = setTimeout(() => {
          this.$store.dispatch("rankModule/changeisShow", false);
          clearTimeout(timer);
        }, 5000);
        // 加入播放列表 需要过滤重复
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
        // console.log("this.currentSong", this.currentSong);
        // 2.0
        // this.$store.dispatch("rankModule/getCurrentSong", this.currentSong);
        window.localStorage.setItem(
          "currentSong",
          JSON.stringify(this.currentSong)
        );

        //点击上一首下一首需要的下标值
        //this.currentSong.length是播放列表所有歌曲长度
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
          //   console.log("歌词", result);
          this.$store.dispatch("rankModule/getLyric", result.data.lrc.lyric);
        })
        .catch(err => {
          // console.log("没找到歌词");
        });
    }
  }
};
</script>

<style lang="less" scoped>
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
.details {
  background-image: url("../../assets/images/wrap4.png");
  width: 979px;
  min-height: 700px;
  margin: 0 auto;
  border-right: 1px solid #d3d3d3;
  border-width: 0 1px;
  .inner {
    float: left;
    width: 100%;
    margin-right: -270px;
    .left {
      margin-right: 271px;
      .wrap {
        padding: 47px 30px 40px 39px;
        .n-artist {
          position: relative;
          zoom: 1;
          height: 333px;
          margin-top: -20px;
          .btm {
            .sname-max {
              max-width: 75%;
            }
            .sname {
              float: left;
              max-width: 100%;
              height: 34px;
              line-height: 24px;
              font-weight: normal;
              font-size: 24px;
              color: #333;
            }
            .f-thide {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              word-wrap: normal;
            }
            .salias {
              float: left;
              max-width: 23%;
              padding-left: 10px;
              font-size: 14px;
              line-height: 32px;
              color: #999;
              font-weight: normal;
            }
          }
          img {
            display: block;
            width: 640px;
            height: 300px;
            background-size: auto;
          }
        }
        .n-artist1 {
          .btm {
            .sname-max {
              max-width: 75%;
            }
            .sname {
              text-align: left;
              max-width: 100%;
              margin: 10px 0;
              height: 34px;
              line-height: 34px;
              font-weight: normal;
              font-size: 18px;
              color: #333;
            }
            .f-thide {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              word-wrap: normal;
            }
            table {
              border-collapse: collapse;
              border-spacing: 0;
              table-layout: fixed;
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
                      .ply {
                        float: right;
                        width: 17px;
                        height: 17px;
                        cursor: pointer;
                        background-position: 0 -103px;
                        background-image: url("../../assets/images/table.png");
                      }
                      .ply:hover {
                        background-position: 0 -128px;
                        background-image: url("../../assets/images/table.png");
                      }
                      .ply.act {
                        background-position: -20px -128px;
                        background-image: url("../../assets/images/table.png");
                      }
                      .num {
                        float: left;
                        width: 25px;
                        font-size: 12px;
                        margin-left: 0;
                        text-align: center;
                        color: #999;
                      }
                    }
                    .tt {
                      float: left;
                      width: 100%;
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
                  .left {
                    width: 74px;
                  }
                  .s-fc3 {
                    position: relative;
                    width: 69px;
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
                        background: url("../../assets/images/icon.png?eb1a0498709dda04dcecc67de318ef62");
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
                  .s-fc4 {
                    width: 20%;
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
              }
            }
            .m-table {
              width: 100%;
            }
          }
        }
      }
    }
  }
  .right {
    position: relative;
    float: right;
    width: 270px;
    .content {
      padding: 20px 40px 40px 30px;
      .u-hd3 {
        text-align: left;
        position: relative;
        height: 23px;
        margin-bottom: 20px;
        border-bottom: 1px solid #ccc;
        color: #333;
        font-size: 12px;
        .span {
          float: left;
        }
      }
      .m-hdlist {
        margin-left: -25px;
        li {
          float: left;
          width: 50px;
          height: 92px;
          padding-left: 25px;
          .hd {
            width: 50px;
            height: 50px;
            a {
              text-decoration: none;
              color: #333;
              cursor: pointer;
              img {
                width: 50px;
                height: 50px;
              }
            }
          }
          p {
            margin-top: 7px;
            text-align: center;
            a {
              color: #333;
              font-size: 12px;
            }
            a:hover{
                text-decoration: underline;
                color: #333;
            }
            .nm {
              width: 50px;
              vertical-align: middle;
              display: inline-block;
            }
            .f-thide {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              word-wrap: normal;
            }
          }
        }
      }
    }
  }
}
</style>