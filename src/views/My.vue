<template>
  <div class="my">
    <div class="m-subnav m-subnav-up f-pr j-tflag"></div>
    <div class="g-mymusic">
      <div class="g-bd3 p-mymusic clearfix">
        <div class="g-sd3 u-scroll n-musicsd f-pr j-flag">
          <div>
            <h2 class="usersub">
              <a href="#" class="f-fs1 s-fc0 f-ff1">我的歌手(2)</a>
            </h2>
            <h2 class="usersub">
              <a href="#" class="f-fs1 s-fc0 f-ff1">我的视频(5)</a>
            </h2>
            <h2 class="usersub">
              <a href="#" class="f-fs1 s-fc0 f-ff1">我的电台(2)</a>
            </h2>
            <div class="n-minelst n-minelst-1" style="margin-top:8px;">
              <h2 class="f-ff1" @click="showHide1">
                <a href="#" class="u-btn u-btn-crt f-fr j-flag">
                  <i>新建</i>
                </a>
                <span class="rtitle f-pr">
                  <i class="tri tri1" :class="{active:isShow1}"></i>
                  <span>创建的歌单</span>
                  <span class="f-pa f-r-black-icon"></span>
                  <span class="f-r-icon-dis-5"></span>
                  <span>(</span>
                  <span class="j-flag">1</span>
                  <span>)</span>
                </span>
              </h2>
              <ul class="j-flag clearfix" v-show="isShow1">
                <li class="j-iflag z-selected">
                  <div class="item clearfix">
                    <div class="left">
                      <a href="#" class="avatar">
                        <img
                          src="../assets/images/109951165070608034.jpg"
                          alt
                        />
                      </a>
                    </div>
                    <p class="name f-thide">
                      <a href="#" class="s-fc0">我喜欢的音乐</a>
                    </p>
                    <p class="s-fc4 f-thide num">{{likeSongs.length}}首</p>
                  </div>
                  <span class="oper hshow">
                    <a href="#" class="u-icn u-icn-10"></a>
                    <a href="#" class="u-icn u-icn-11"></a>
                  </span>
                </li>
              </ul>
            </div>
            <div class="n-minelst n-minelst-1 n-minelst-hide">
              <h2 class="f-ff1" @click="showHide2">
                <span class="rtitle f-pr">
                  <i class="tri tri1" :class="{active:isShow2}"></i>
                  <span>收藏的歌单</span>
                  <span class="f-pa f-r-black-icon"></span>
                  <span class="f-r-icon-dis-5"></span>
                  <span>(</span>
                  <span class="j-flag">1</span>
                  <span>)</span>
                </span>
              </h2>
              <ul class="j-flag clearfix" v-show="isShow2">
                <li class="j-iflag">
                  <div class="item clearfix">
                    <div class="left">
                      <a href="#" class="avatar">
                        <img
                          src="../assets/images/18740076185638788.jpg"
                          alt
                        />
                      </a>
                    </div>
                    <p class="name f-thide">
                      <a href="#" class="s-fc0">网易原创歌曲榜</a>
                    </p>
                    <p class="s-fc4 f-thide num">100首 by 原创君</p>
                  </div>
                  <span class="oper hshow">
                    <a href="#" class="u-icn u-icn-11"></a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="g-mn3 f-pr j-flag">
          <div class="f-pr">
            <div class="j-flag">
              <div class="g-wrap">
                <div class="m-info clearfix">
                  <div class="cover u-cover u-cover-dj" v-if="likeSongs">
                    <img :src="likeSongs[0].al.picUrl" alt />
                    <span class="msk"></span>
                  </div>
                  <div class="cnt">
                    <div class="cntc m-info">
                      <div class="hd">
                        <i class="lab u-icn"></i>
                        <div class="tit">
                          <em>我喜欢的音乐</em>
                        </div>
                      </div>
                      <div class="user clearfix">
                        <a class="face" href="#">
                          <img
                            src="../assets/images/109951163253039183.jpg"
                          />
                        </a>
                        <span class="name f-thide">
                          <a href="#" class="s-fc7">我只是一片随风飘舞的叶子</a>
                        </span>
                        <span class="time s-fc4">2020-06-10&nbsp;创建</span>
                      </div>
                      <div class="btn clearfix">
                        <a href="javascript:;" class="u-btn">
                          <i>
                            <em class="pl"></em>
                            播放
                          </i>
                        </a>
                        <a href class="u-btnt u-bt1"></a>
                        <a href class="u-btnt u-bt2">
                          <i>收藏</i>
                        </a>
                        <a href class="u-btnt u-bt3">
                          <i>分享</i>
                        </a>
                        <a href class="u-btnt u-bt4">
                          <i>下载</i>
                        </a>
                        <a href class="u-btnt u-bt5">
                          <i>
                            <span class="count">评论</span>
                          </i>
                        </a>
                      </div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="s-title clearfix">
                <h3 class="fl">
                  <span class="f-ff">歌曲列表</span>
                </h3>
                <span class="sub fl">
                  <span>{{likeSongs.length}}</span>首歌
                </span>
                <div class="more fr">
                  播放：
                  <strong class="s-fc">60</strong>
                  次
                </div>
              </div>
            </div>
            <div class="j-flag">
              <div>
                <div class="j-flag">
                  <table class="m-table">
                    <thead>
                      <tr>
                        <th class="first w1"></th>
                        <th>
                          <div class="wp">歌曲标题</div>
                        </th>
                        <th class="w2-1">
                          <div class="wp">时长</div>
                        </th>
                        <th class="w3-1">
                          <div class="wp">歌手</div>
                        </th>
                        <th class="w4-1">
                          <div class="wp ww">专辑</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item,index) in likeSongs" :key="index" :id="item.id">
                        <td class="left">
                          <div class="hd">
                            <span
                              class="ply"
                              :class="{act:songsData && songsData.id === item.id}"
                              @click="playLikeSongs(item.id,item)"
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
                            <span
                              class="icn icn-del"
                              @click.stop="delLikeSongs(item.id,index,item)"
                            ></span>
                          </div>
                        </td>
                        <td>
                          <div class="text">
                            <span>
                              <a href="#">{{item.ar[0].name}}</a>
                            </span>
                          </div>
                        </td>
                        <td>
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
      isShow1: true,
      isShow2: false,
      songsData: {}
    };
  },
  computed: {
    ...mapState(["likeSongs", "currentSong"])
  },
  methods: {
    ...mapMutations(["getLikeSongs", "getCurrentSong"]),
    formatTime(m) {
      //将毫秒转换为秒
      var second = Math.floor((m / 1000) % 60);

      second = second >= 10 ? second : "0" + second;

      //将毫秒转换为分钟
      var minute = Math.floor(m / 1000 / 60);

      minute = minute >= 10 ? minute : "0" + minute;

      return minute + ":" + second;
    },
    showHide1() {
      this.isShow1 = !this.isShow1;
    },
    showHide2() {
      this.isShow2 = !this.isShow2;
    },
    playLikeSongs(id, item) {
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
          // console.log("歌词", result);
          this.$store.dispatch("rankModule/getLyric", result.data.lrc.lyric);
        })
        .catch(err => {
          // console.log("没找到歌词");
        });
    },
    //删除播放列表歌曲
    delLikeSongs(id, index, item) {
      if (item.id == id) {
        this.likeSongs.splice(index, 1);
        window.localStorage.setItem(
          "likeSongs",
          JSON.stringify(this.likeSongs)
        );
      }
      if (index <= this.index) {
        let index3 = this.index - 1;
        if (index3 == -1) {
          return;
        }
        // console.log("index3", index3);
        this.$store.dispatch("rankModule/getIndex", index3);
        // 获取音乐url
        this.axios({
          method: "GET",
          url: "http://49.234.68.133:3000/song/url?id=" + this.likeSongs[index3].id //播放列表里当前歌对应的id
        }).then(result => {
          // 把获取的songUrl赋值给sUrl
          // console.log("result", result);

          this.sUrl = result.data.data[0].url;
          //提交回vuex修改歌名歌手等
          this.$store.dispatch(
            "rankModule/getLikeSongs",
            this.likeSongs[index3]
          );
          //提交回vuex修改播放状态
          this.$store.commit("rankModule/changeisPlay", true);
        });
      }
    },
  },
  mounted() {
    //使刷新后收藏的歌曲还在
    let likeSongs = JSON.parse(window.localStorage.getItem("likeSongs"));
    this.$store.dispatch("rankModule/getLikeSongs", likeSongs);
    let currentSong = JSON.parse(window.localStorage.getItem("currentSong"));
    this.$store.dispatch("rankModule/getCurrentSong", currentSong);
  }
};
</script>

<style lang="less" scoped>
.m-subnav-up {
  height: 5px;
  border-bottom: none;
}
.m-subnav {
  z-index: 90;
  box-sizing: border-box;
  background-color: #c20c0c;
}
.f-pr {
  position: relative;
  zoom: 1;
}
.g-mymusic {
  //   overflow-x: hidden;
  //   overflow-y: scroll;
  position: relative;
  text-align: left;
  zoom: 1;
  .g-bd3 {
    width: 980px;
    margin: 0 auto;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
    background: url("../assets/images/wrap3.png")
      repeat-y center 0;
    .g-sd3 {
      float: left;
      width: 240px;
      position: fixed;
      //   overflow-y: auto;
      //   overflow-x: hidden;
    }
    .n-musicsd {
      padding-bottom: 50px;
      padding-top: 40px;
      .usersub {
        position: relative;
        height: 36px;
        line-height: 36px;
        a {
          display: block;
          padding: 0 5px 2px 35px;
          cursor: pointer;
        }
        .s-fc0 {
          color: #000;
        }
        .f-fs1 {
          font-size: 14px;
        }
        .f-ff1 {
          font-family: simsun, \5b8b\4f53;
        }
      }
      .n-minelst {
        h2 {
          padding: 0 10px 12px 15px;
          font-size: 14px;
          color: #000;
          .rtitle {
            cursor: pointer;
            .tri1 {
              border: 8px solid #ccc;
              border-color: transparent transparent transparent #ccc;
              border-style: dashed dashed dashed solid;
              margin-right: 0;
            }
            .tri1.active {
              border-color: #ccc transparent transparent;
              border-style: solid dashed dashed;
              border-width: 8px 7px 0;
            }
            .tri {
              display: inline-block;
              vertical-align: middle;
              margin: 0 2px 0 5px;
              cursor: pointer;
              font-size: 0;
              height: 0;
              line-height: 0;
            }
            i {
              font-style: normal;
              text-align: left;
            }
            .f-r-black-icon {
              display: inline-block;
              width: 8px;
              height: 8px;
              background-size: cover;
              background-image: url("../assets/images/black-r-icon@3x.png");
            }
            .f-pa {
              position: absolute;
            }
            .f-r-icon-dis-5 {
              display: inline-block;
              width: 10px;
            }
          }
          .f-pr {
            position: relative;
          }
        }

        .f-ff1 {
          font-family: simsun, \5b8b\4f53;
          .f-fr {
            float: right;
            cursor: pointer;
          }
          .u-btn-crt {
            width: 52px;
            height: 22px;
            background-position: 0 -96px !important;

            i {
              display: inline-block;
              line-height: 22px;
              overflow: hidden;
              padding-left: 20px;
              color: #515151;
              font-size: 12px;
              font-style: normal;
              font-weight: normal;
            }
          }
          .u-btn {
            display: inline-block;
            background: url("../assets/images/button.png")
              no-repeat 0 9999px;
          }
        }
        ul * {
          cursor: pointer;
          vertical-align: middle;
        }
        li {
          position: relative;
          zoom: 1;
          height: 42px;
          padding: 6px 0 6px 20px;
          .item {
            padding-left: 50px;
            .left {
              display: inline;
              float: left;
              margin-left: -50px;
              overflow: hidden;
              width: 40px;
              .avatar {
                display: block;
                position: relative;
                width: 40px;
                height: 40px;
                img {
                  width: 40px;
                  height: 40px;
                }
              }
            }
            .name {
              width: 150px;
              overflow: hidden;
              margin-top: 2px;
              margin-bottom: 8px;
              a {
                white-space: nowrap;
              }
              .s-fc0 {
                color: #000;
                font-size: 12px;
              }
            }
            .f-thide {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .num {
              width: 130px;
            }
            .s-fc4 {
              color: #999;
              font-size: 12px;
            }
          }
          .oper {
            position: absolute;
            bottom: 7px;
            right: 0;
            .u-icn {
              float: left;
              margin-right: 10px;
              display: inline-block;
              overflow: hidden;
              background: url("../assets/images/icon.png")
                no-repeat 0 9999px;
            }
            .u-icn-10 {
              width: 13px;
              height: 13px;
              background-position: 0 -270px;
            }
            .u-icn-11 {
              width: 13px;
              height: 14px;
              background-position: 0 -284px;
            }
          }
        }
        li.z-selected {
          background: #e6e6e6;
        }
        li.z-selected:hover {
          background: #f4f2f2;
        }
      }
      .n-minelst-1 {
        margin-top: 5px;
      }
    }
    .g-mn3 {
      position: relative;
      height: 100%;
      float: right;
      width: 740px;
      padding-bottom: 50px;
      .f-pr {
        position: relative;
        zoom: 1;
        .g-wrap {
          padding: 40px;
          .cover {
            float: left;
            position: relative;
            display: inline;
            margin: 0 -220px 0 0;
            img {
              display: block;
              width: 100%;
              height: 100%;
            }
          }
          .u-cover-dj {
            width: 200px;
            height: 200px;
            .msk {
              position: absolute;
              width: 208px;
              height: 208px;
              background-position: 0 -1285px;
              top: -4px;
              left: -4px;
              background-image: url("../assets/images/coverall.png");
              background-color: #000;
              opacity: 0.2;
            }
          }
          .cnt {
            float: right;
            width: 100%;
            .cntc {
              margin-left: 230px;
              .hd {
                position: relative;
                margin: 0 0 12px;
                line-height: 24px;
                em,
                i {
                  font-style: normal;
                  text-align: left;
                  font-size: inherit;
                }
                .lab {
                  position: relative;
                  top: 3px;
                  width: 54px;
                  height: 24px;
                  background-position: 0 -243px;
                  float: left;
                  margin-right: 6px;
                }
                .u-icn {
                  display: inline-block;
                  overflow: hidden;
                  vertical-align: middle;
                  background-image: url("../assets/images/icon.png");
                }
                .tit {
                  line-height: 24px;
                  font-size: 20px;
                  color: #333;
                  font-weight: normal;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
                }
              }
              .user {
                margin: 0 0 20px;
                line-height: 35px;
                .face {
                  margin-right: 10px;
                  float: left;
                  width: 35px;
                  height: 35px;
                  cursor: pointer;
                  text-decoration: none;
                  color: #333;
                  img {
                    float: left;
                    width: 35px;
                    height: 35px;
                  }
                }
                .name {
                  max-width: 210px;
                  float: left;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  .s-fc7 {
                    color: #0c73c2;
                    font-size: 12px;
                  }
                }
                .time {
                  margin-left: 15px;
                }
                .s-fc4 {
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
                  background-image: url("../assets/images/button2.png");
                  i {
                    padding: 0 7px 0 8px;
                    color: #fff;
                    font-size: 12px;
                    background-position: 0 -387px;
                    background-image: url("../assets/images/button2.png");
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
                      background-image: url("../assets/images/button2.png");
                      overflow: hidden;
                    }
                  }
                }
                .u-btnt {
                  margin-right: 6px;
                  background-image: url("../assets/images/button2.png");
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
                  background-image: url("../assets/images/button2.png");
                  i {
                    color: #bebebe;
                    font-size: 12px;
                    font-style: normal;
                    background-position: 0 -1149px;
                    cursor: default;
                    padding-right: 2px;
                    padding-left: 28px;
                    float: left;
                    height: 31px;
                    line-height: 30px;
                    min-width: 23px;
                    background-image: url("../assets/images/button2.png");
                  }
                }
                .u-bt3 {
                  background-position: right -1020px;
                  background-image: url("../assets/images/button2.png");
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
                    background-image: url("../assets/images/button2.png");
                  }
                }
                .u-bt4 {
                  background-position: right -1020px;
                  background-image: url("../assets/images/button2.png");
                  i {
                    background-position: 0 -2761px;
                    background-image: url("../assets/images/button2.png");
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
                  background-image: url("../assets/images/button2.png");
                  i {
                    background-position: 0 -1465px;
                    background-image: url("../assets/images/button2.png");
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
        .s-title {
          height: 33px;
          padding: 0 10px 0 32px;
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
        table {
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
                width: 74px;
                border-right: 1px solid #ccc;
              }
              .w2-1 {
                width: 111px;
              }
              .w3-1 {
                width: 14%;
              }
              .w4-1 {
                width: 20%;
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
                  .ply {
                    float: right;
                    width: 17px;
                    height: 17px;
                    cursor: pointer;
                    background-position: 0 -103px;
                    background-image: url("../assets/images/table.png");
                  }
                  .ply:hover {
                    background-position: 0 -128px;
                    background-image: url("../assets/images/table.png");
                  }
                  .ply.act {
                    background-position: -20px -128px;
                    background-image: url("../assets/images/table.png");
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
                    background: url("../assets/images/table.png");
                  }
                  .u-icn {
                    display: inline-block;
                    overflow: hidden;
                    vertical-align: middle;
                    background: url("../assets/images/icon.png");
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
                  .icn-del {
                    background-position: 0 -217px;
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
          }
        }
        .m-table {
          width: 100%;
          border: 1px solid #d9d9d9;
        }
      }
    }
  }
}
</style>