<template>
  <div class="songsDetails">
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
            <div class="m-lycifo">
              <div class="clearfix" v-if="songsData">
                <div class="cvrwrap clearfix">
                  <div class="u-cover fl">
                    <img
                      class="img-auto"
                      :src="songsData.al.picUrl"
                      alt
                    />
                    <span class="msk"></span>
                  </div>
                </div>
                <div class="cnt">
                  <div class="hd">
                    <i class="lab u-icn"></i>
                    <div class="tit">
                      <em>{{songsData.name}}</em>
                    </div>
                  </div>
                  <p class="des">
                    歌手：
                    <span>
                      <a href>{{songsData.ar[0].name}}</a>
                    </span>
                  </p>
                  <p class="des">
                    所属专辑：
                    <span>
                      <a href>{{songsData.al.name}}</a>
                    </span>
                  </p>
                  <div class="btn clearfix">
                    <a href="javascript:;" class="u-btn" @click="playSongDetail(songsData.id,songsData)">
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
                        <span class="count">(187621)</span>
                      </i>
                    </a>
                  </div>
                  <div class="bd bd-open">
                    <p v-for="(item,index) in lyrics" :key="index">{{item.text}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="content">
          <h3 class="u-hd3">
            <span>包含这首歌的歌单</span>
          </h3>
          <ul class="m-rctlist clearfix">
            <li>
              <div class="cver u-cover">
                <a href>
                  <img
                    class="img-auto"
                    src="../../assets/images/19057835044326350.jpg"
                    alt
                  />
                </a>
              </div>
              <div class="info">
                <p class="f-p">
                  <a class="sname" href>华语百首 | 回忆伤人无声，唱不尽世间遗憾</a>
                </p>
                <p>
                  <span class="by">by</span>
                  <a class="nm" href>洒酒无牵挂</a>
                </p>
              </div>
            </li>
            <li>
              <div class="cver u-cover">
                <a href>
                  <img
                    class="img-auto"
                    src="../../assets/images/19057835044326350.jpg"
                    alt
                  />
                </a>
              </div>
              <div class="info">
                <p class="f-p">
                  <a class="sname" href>华语百首 | 回忆伤人无声，唱不尽世间遗憾</a>
                </p>
                <p>
                  <span class="by">by</span>
                  <a class="nm" href></a>
                </p>
              </div>
            </li>
            <li>
              <div class="cver u-cover">
                <a href>
                  <img
                    class="img-auto"
                    src="../../assets/images/19057835044326350.jpg"
                    alt
                  />
                </a>
              </div>
              <div class="info">
                <p class="f-p">
                  <a class="sname" href>华语百首 | 回忆伤人无声，唱不尽世间遗憾</a>
                </p>
                <p>
                  <span class="by">by</span>
                  <a class="nm" href></a>
                </p>
              </div>
            </li>
          </ul>
          <h3 class="u-hd3">
            <span>相似歌曲</span>
          </h3>
          <ul class="m-sglist clearfix">
            <li class="clearfix">
              <div class="txt">
                <div class="f-t">
                  <a href>七友</a>
                </div>
                <div class="f-t s-c">
                  <span>
                    <a class="s-c">梁汉文</a>
                  </span>
                </div>
              </div>
              <div class="opr clearfix">
                <a class="play" href></a>
                <a class="add" href></a>
              </div>
            </li>
            <li class="clearfix">
              <div class="txt">
                <div class="f-t">
                  <a href>七友</a>
                </div>
                <div class="f-t s-c">
                  <span>
                    <a class="s-c">梁汉文</a>
                  </span>
                </div>
              </div>
              <div class="opr clearfix">
                <a class="play" href></a>
                <a class="add" href></a>
              </div>
            </li>
            <li class="clearfix">
              <div class="txt">
                <div class="f-t">
                  <a href>七友</a>
                </div>
                <div class="f-t s-c">
                  <span>
                    <a class="s-c">梁汉文</a>
                  </span>
                </div>
              </div>
              <div class="opr clearfix">
                <a class="play" href></a>
                <a class="add" href></a>
              </div>
            </li>
            <li class="clearfix">
              <div class="txt">
                <div class="f-t">
                  <a href>七友</a>
                </div>
                <div class="f-t s-c">
                  <span>
                    <a class="s-c">梁汉文</a>
                  </span>
                </div>
              </div>
              <div class="opr clearfix">
                <a class="play" href></a>
                <a class="add" href></a>
              </div>
            </li>
            <li class="clearfix">
              <div class="txt">
                <div class="f-t">
                  <a href>七友</a>
                </div>
                <div class="f-t s-c">
                  <span>
                    <a class="s-c">梁汉文</a>
                  </span>
                </div>
              </div>
              <div class="opr clearfix">
                <a class="play" href></a>
                <a class="add" href></a>
              </div>
            </li>
          </ul>
          <div></div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    <router-view></router-view>
  </div>
</template>

<script>
import Footer from "../../components/Footer";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations } = createNamespacedHelpers("rankModule");
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
      detailSongPlaying:[]
    };
  },
  computed:{
    ...mapState(["isPlay","songsData","lyrics","currentSong"])
  },
  methods: {
    ...mapMutations(["changeisPlay","getSongsData","getLyric","getCurrentSong"]),
    liclick(o) {
      this.$router.push({ name: o });
    },
    playSongDetail(id,item){
      this.axios({
        method: "GET",
        url: "http://49.234.68.133:3000/song/url?id=" + id
      }).then(result => {
        // this.sUrl = result.data.data[0].url;
        // console.log("this.songsUrl", this.songsUrl);
        this.$store.dispatch("rankModule/getSongsUrl", result.data.data[0].url);
        //提交回vuex修改歌名歌手等
        // this.$store.dispatch("rankModule/getSongsData", item);

        // this.$store.dispatch("rankModule/getPlaySongs", item);
        //提交回vuex修改播放状态
        this.$store.commit("rankModule/changeisPlay", true);
        
        // 加入播放列表 需要过滤重复
        // let isExist = this.currentSong.some(items => {
        //   return items.id == id; //id为歌曲的id
        // });

        // if (!isExist) this.currentSong.push(item);
        // // console.log("this.currentSong", this.currentSong);

        // this.$store.dispatch("rankModule/getCurrentSong", this.currentSong);
        // window.localStorage.setItem(
        //   "currentSong",
        //   JSON.stringify(this.currentSong)
        // ); 

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

        window.localStorage.setItem("playSong", JSON.stringify(item));
      });
      
    }
  },
  components:{
    Footer
  },
  mounted(){
    let id = this.$route.query.id;
    // console.log('id',id);
    
  }
};
</script>

<style lang="less" scoped>
.songsDetails {
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
          .m-lycifo {
            margin-top: -10px;
            .cvrwrap {
              float: left;
              width: 206px;
              margin-right: -226px;
              position: relative;
              .u-cover {
                width: 198px;
                height: 198px;
                position: relative;
                display: block;
                img {
                  width: 130px;
                  height: 130px;
                  margin: 34px;
                  display: block;
                  border: 0;
                }
                .msk {
                  width: 206px;
                  height: 205px;
                  top: -4px;
                  left: -4px;
                  background-position: -140px -580px;
                  position: absolute;
                  background-image: url("../../assets/images/coverall.png");
                }
              }
            }
            .cnt {
              float: right;
              width: 414px;
              text-align: left;
              .hd {
                .lab {
                  float: left;
                }
                .u-icn {
                  width: 54px;
                  height: 24px;
                  background-position: 0 -463px;
                  background-image: url("../../assets/images/icon.png");
                  display: inline-block;
                  overflow: hidden;
                  vertical-align: middle;
                  font-style: normal;
                  text-align: left;
                  font-size: inherit;
                }
                .tit {
                  margin-left: 64px;
                  position: relative;
                  top: -6px;
                  font-size: 24px;
                  text-align: left;
                  em {
                    margin-right: 7px;
                    vertical-align: middle;
                    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
                    font-style: normal;
                    text-align: left;
                    font-size: 24px;
                  }
                }
              }
              .des {
                text-align: left;
                margin: 10px 0;
                color: #999;
                font-size: 12px;
                span {
                  color: #333;
                  a {
                    color: #0c73c2;
                  }
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
              .bd {
                height: auto;
                margin-top: 13px;
                line-height: 23px;
                word-break: break-word;
                white-space: normal;
                display: inline-block;
                font-size: 12px;
                color: #333;
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
        .m-rctlist {
          margin-bottom: 25px;
          li {
            float: left;
            width: 200px;
            height: 50px;
            margin-bottom: 15px;
            line-height: 24px;
            .cver {
              margin-right: -60px;
              float: left;
              width: 50px;
              height: 50px;
              position: relative;
              display: block;
              a {
                cursor: pointer;
                text-decoration: none;
                color: #333;
              }
            }
            .info {
              margin-left: 60px;
              line-height: 24px;
              p {
                width: 140px;
                a {
                  color: #000;
                  font-size: 14px;
                  cursor: pointer;
                }
                .by {
                  float: left;
                  color: #999;
                  font-size: 12px;
                }
                .nm {
                  float: left;
                  max-width: 106px;
                  margin: 0 2px 0 4px;
                  color: #666;
                  font-size: 12px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
              }
              .f-p {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
            }
          }
        }
        .m-sglist {
          margin-bottom: 25px;
          li {
            margin-top: 10px;
            .txt {
              float: left;
              width: 156px;
              line-height: 16px;
              text-align: left;
              .f-t {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                a {
                  color: #333;
                  font-size: 12px;
                }
                .s-c {
                  color: #999;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  font-size: 12px;
                }
              }
              .s-c {
                color: #999;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
            }
            .opr {
              float: right;
              position: relative;
              top: 10px;
              line-height: 32px;
              a {
                float: left;
                width: 10px;
                color: #333;
                height: 11px;
                background: url("../../assets/images/icon2.png");
                opacity: 0.9;
              }
              .play {
                margin-right: 16px;
                background-position: -69px -455px;
              }
              .add {
                background-position: -87px -454px;
              }
            }
          }
        }
      }
    }
  }
}
</style>