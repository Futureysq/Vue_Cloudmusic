<template>
  <div>
    <audio
      ref="audio"
      :src="sUrl"
      @pause="pause"
      @play="onPlay"
      autoplay
      @timeupdate="onTimeUpdate"
    ></audio>
    <div class="g-btmbar">
      <div
        class="m-playbar m-playbar-unlock clearfix"
        v-if="currentSong"
        ref="mPlaybar"
        :class="{active: isShow}"
      >
        <div class="updn clearfix">
          <div class="left fl">
            <a href="javascript:;" class="btn" @click="lock" :class="{active: isLock}"></a>
          </div>
          <div class="right fl"></div>
        </div>
        <div class="bg"></div>
        <div class="hand" title="展开播放条"></div>
        <div class="wrap clearfix" v-if="songsData">
          <div class="btns fl">
            <a href="javascript:;" class="prv" title="上一首" @click="prev">上一首</a>
            <a
              href="javascript:;"
              class="ply"
              :class="{active: isPlay}"
              @click="zanting"
              title="播放/暂停(p)"
            >播放/暂停</a>
            <a href="javascript:;" class="nxt" title="下一首" @click="next">下一首</a>
          </div>
          <div class="head fl" @click="toSongDetail">
            <img :src="songsData.al.picUrl" />
            <a href="#" hidefocus="true" class="mask"></a>
          </div>
          <div class="play fl">
            <div class="clearfix words">
              <a hidefocus="true" class="f-thide name fc1 fl" title>{{songsData.name}}</a>
              <span class="by f-thide fl">
                <span title>
                  <a>{{songsData.ar[0].name}}</a>
                </span>
              </span>
              <a class="src" title="来自榜单"></a>
            </div>
            <div class="m-pbar" data-action="noop">
              <div class="barbg" ref="progress">
                <div class="rdy"></div>
                <div ref="progressActive" class="cur">
                  <span class="btn f-tdn f-alpha" ref="mask">
                    <i></i>
                  </span>
                </div>
                <div class="layer" ref="layer"></div>
              </div>
              <span class="time">
                <em ref="ct">{{defaultTime}}</em>
                / {{formatTime(songsData.dt)}}
              </span>
            </div>
          </div>
          <div class="oper fl">
            <a
              href="javascript:;"
              hidefocus="true"
              data-action="like"
              class="icn icn-add j-flag"
              title="收藏"
            ></a>
            <a
              href="javascript:;"
              hidefocus="true"
              data-action="share"
              class="icn icn-share"
              title="分享"
            ></a>
          </div>
          <div class="ctrl fl f-pr j-flag">
            <div class="m-vol">
              <div class="barbg"></div>
              <div class="vbg j-t">
                <div class="curr j-t"></div>
                <span class="btn f-alpha j-t"></span>
              </div>
            </div>
            <a href="javascript:;" class="icn icn-vol"></a>
            <a href="javascript:;" class="icon1" @click="changeMode">
              <i v-if="mode === 0" href="#" class="icn icn-loop"></i>
              <i v-if="mode === 1" href="#" class="icn icn-shuffle"></i>
              <i v-if="mode === 2" href="#" class="icn icn-one"></i>
            </a>
            <span class="add f-pr">
              <span class="tip" style="display: none;">已开始播放</span>
              <a
                href="javascript:;"
                title="播放列表"
                hidefocus="true"
                data-action="panel"
                class="icn icn-list s-fc3"
                @click="playListIcon"
              >{{currentSong.length}}</a>
            </span>
            <div class="tip tip-1" style="display:none;">随机</div>
          </div>
        </div>
        <div class="list" v-show="playListStatus">
          <div class="listhd">
            <div class="listhdc">
              <h4>
                播放列表(
                <span>78</span>
                )
              </h4>
              <a href="#" class="addall" @click="likeAll(currentSong)">
                <span class="ico ico-add"></span>
                收藏全部
              </a>
              <span class="line">|</span>
              <a href="#" class="clear" @click="clear">
                <span class="ico icn-del"></span>
                清除
              </a>
              <p class="lytit">{{songsData.name}}</p>
              <span class="close" @click="close">关闭</span>
            </div>
          </div>
          <div class="listbd">
            <img class="imgbg" :src="songsData.al.picUrl" alt />
            <div class="msk"></div>
            <div class="listbdc" ref="listbdc">
              <ul class="clearfix" ref="ul">
                <li
                  v-for="(item,index) in currentSong"
                  :key="index"
                  :id="item.id"
                  :class="{active: currentSong[index] && currentSong[index].id === songsData.id}"
                  @click="playSong(item.id,item,index)"
                >
                  <div class="col col-1"></div>
                  <div class="col col-2">{{currentSong[index].name}}</div>
                  <div class="col col-3">
                    <div class="icns">
                      <!-- stop阻止冒泡 -->
                      <i class="ico icn-del" @click.stop="delCurrentSong(item.id,index,item)"></i>
                      <i class="ico ico-dl"></i>
                      <i class="ico ico-share"></i>
                      <i class="j-t ico ico-add" @click.stop="addCurrentSong(item.id,index,item)"></i>
                    </div>
                  </div>
                  <div class="col col-4">
                    <span>
                      <a href>{{currentSong[index].ar[0].name}}</a>
                    </span>
                  </div>
                  <div class="col col-5">{{formatTime(currentSong[index].dt)}}</div>
                  <div class="col col-6">
                    <a href class="ico ico-src"></a>
                  </div>
                </li>
              </ul>
            </div>
            <div class="bline" ref="bline">
              <span class="scrol" ref="scrol"></span>
            </div>
            <div class="ask">
              <a href class="ico ico-ask"></a>
            </div>
            <div class="ms"></div>
            <div class="msk2" ref="msk2">
              <div class="listlyric" ref="listlyric">
                <p
                  v-for="(item,index) in lyrics"
                  :key="index"
                  :class="{active: index===currentLyricIndex}"
                  ref="p"
                >{{item.text}}</p>
              </div>
            </div>

            <div class="bline bline-1">
              <span class="scrol scrol-1"></span>
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
import { Toast } from "vant";
export default {
  data() {
    return {
      isActive: false,
      songsData1: [],
      defaultTime: "00:00",
      currentTime: 0,
      duration: 0,
      isFirstPlay: false,
      x: 0,
      ex: 0,
      progressWidth: 0,
      maskWidth: 0,
      minLeft: 0,
      maxLeft: 0,
      left: 0,
      audioTime: 0,
      isLeave: false,
      isDown: false,
      currentLyricIndex: 0,
      moveIndex: 0,
      sUrl: null,
      mode: 0,
      inex: 0,
      playListStatus: false,
      isLock: false
    };
  },
  computed: {
    ...mapState([
      "songsData",
      "isPlay",
      "lyrics",
      "currentSong",
      "allSongsList",
      "index",
      "isShow",
      "likeSongs"
    ])
  },
  // 侦听播放暂停的状态到store
  watch: {
    isPlay(newValue, oldValue) {
      if (newValue) {
        //如果不写以下这些步骤那么会报“DOMException: The play() request was interrupted by a call to pause().”----->在调用 Audio 的 play() 方法之后就立即被之后一次调用 pause() 方法中断了。错误提示中明确指出了调用 play 方法是返回了一个Promise对象。那么上述的问题就有了解决方法： 在 play() 执行成功后，播放音频，然后执行后续操作。
        let playPromise;
        playPromise = this.$refs.audio.play();
        if (playPromise) {
          playPromise
            .then(() => {
              // 音频加载成功
              // 音频的播放需要耗时
              setTimeout(() => {
                // 后续操作
                // console.log("done.");
              }, this.$refs.audio.duration * 1000); // this.$refs.audio.duration 为音频的时长单位为秒
            })
            .catch(e => {
              // 音频加载失败
            });
        }
      } else {
        this.$refs.audio.pause();
      }
    },
    //监听歌曲的新值，因为songsUrl是props取来的，然后还有一个url是本页面的播放列表点击获取的，如果本页面获取的也用this.songsUrl，那么会和props的songsUrl冲突，或报错，因此使用监听解决
    songsUrl(newValue, oldValue) {
      this.sUrl = newValue;
    }
  },
  props: ["songsUrl"],

  methods: {
    ...mapMutations([
      "getSongsData",
      "changeisPlay",
      "getLyric",
      "getCurrentSong",
      "getAllSongsList",
      "getIndex",
      "changeisShow",
      "getLikeSongs"
    ]),
    formatTime(m) {
      //将毫秒转换为秒
      let second = Math.floor((m / 1000) % 60);

      second = second >= 10 ? second : "0" + second;

      //将毫秒转换为分钟
      let minute = Math.floor(m / 1000 / 60);

      minute = minute >= 10 ? minute : "0" + minute;

      return minute + ":" + second;
    },

    toSongDetail() {
      // console.log(this.isPlay);
      this.$router.push("/songsDetails");
    },
    zanting() {
      this.isActive = !this.isActive;
      // console.log("pause");

      // 提交播放暂停的状态到store
      this.$store.commit("rankModule/changeisPlay", !this.isPlay);
    },
    onTimeUpdate(e) {
      if (isNaN(e.target.duration)) {
        return;
      }

      this.currentTime = e.target.currentTime;
      this.duration = e.target.duration;
      let ct = this.formatTime(this.currentTime * 1000);
      // console.log("ct");

      this.$refs.ct.innerText = ct;

      //当前时间与总时间的百分比
      let percent = this.currentTime / this.duration;

      // 进度条填充的宽度
      let width = Math.floor(this.progressWidth * percent);
      // console.log("width", width);

      //设置拿到的宽度值给填充层
      this.$refs.progressActive.style.width = width + "px";

      // 移动滑块
      this.$refs.mask.style.left = width + "px";

      // //滚动歌词
      // let index;
      // for(let i = 0; i < this.lyrics.length; i++) {
      //   if(this.$refs.audio.currentTime + 0.15 < this.lyrics[i].time) {
      //     index = i - 1;
      //     break;
      //   }
      // }
      // if (index === undefined) {
      //   index = this.lyrics.length - 1;
      // }
      // this.currentLyricIndex = index;

      //移动歌词
      // console.log("this.lyrics.length", this.lyrics.length);
      // let currentLiTime =this.lyrics[0].time;
      //    console.log('currentLiTime ==> ', currentLiTime);
      let index;
      for (let i = 0; i < this.lyrics.length; i++) {
        if (i >= this.lyrics.length + 1) {
          index = i;
        }
        // let currentLiTime = this.lyrics[i - 1].time;
        // if (currentLiTime > this.currentTime) {
        //   break;
        // }

        // let nextLiTime = this.lyrics[i + 1].time;
        // console.log("nextLiTime", nextLiTime);

        // nextLiTime = nextLiTime === undefined ? Number.MAX_VALUE : nextLiTime;
        // console.log("1111=>", this.currentTime);

        if (
          this.lyrics[i].time <= this.currentTime &&
          this.lyrics[i + 1].time > this.currentTime
        ) {
          let offsetX = this.$refs.p[i].clientHeight * i - 96;
          // console.log("offsetX", offsetX);

          document.querySelector(".msk2").scrollTop = offsetX;

          // if(offsetX < 0)
          // console.log(
          //   "this.$refs.p[i].clientHeight * i -300",
          //   this.$refs.p[i].clientHeight * i
          // );

          index = i;
          // console.log("scrollTop", scrollTop);
          break;
        }
      }
      if (index !== this.currentLyricIndex) {
        this.currentLyricIndex = index;
      }
    },
    pause() {},
    onPlay() {
      // console.log("歌曲首次播放 isFirstPlay ==> ", this.isFirstPlay);
    },
    changeProgress(e) {
      let isLeave = true;

      //获取相对元素的鼠标坐标
      this.x = e.offsetX;

      let left = this.x;
      //控制left的范围
      left =
        left > this.maxLeft
          ? this.maxLeft
          : left < this.minLeft
          ? this.minLeft
          : left;
      //移动mask
      this.$refs.mask.style.left = left + "px";
      //设置激活进度条的宽度
      this.$refs.progressActive.style.width = this.x + "px";
      // console.log("this.duration", this.duration);

      this.audioTime = (left / this.maxLeft) * this.duration;
      // console.log("audioTime", this.audioTime);

      if (isLeave) {
        //修改音频的播放进度
        // this.currentTime = audioTime;
        // console.log("this.currentTime", this.currentTime);
        isLeave = false;
        let aa = this.formatTime(this.audioTime * 1000);
        // console.log("aa", aa);
        this.$refs.audio.currentTime = this.audioTime;
        // this.$refs.ct.innerText = aa
      }
    },
    //播放播放列表的歌曲
    playSong(id, item, index) {
      this.axios({
        method: "GET",
        url: "http://49.234.68.133:3000/song/url?id=" + id
      }).then(result => {
        this.sUrl = result.data.data[0].url;
        // console.log("this.songsUrl", this.songsUrl);
        //提交回vuex修改歌名歌手等
        this.$store.dispatch("rankModule/getSongsData", item);
        this.$store.dispatch("rankModule/getPlaySongs", item);
        //提交回vuex修改播放状态
        this.$store.commit("rankModule/changeisPlay", true);
        window.localStorage.setItem("playSong", JSON.stringify(item));
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
      // 传当前歌曲下标回vuex以用来做单曲循环
      this.$store.dispatch("rankModule/getIndex", index);
    },
    //上一首
    prev() {
      // this.currentSong.length播放列表所以歌曲的长度;
      if (this.currentSong.length === 1) {
        //如果只有一首歌那么循环播放
        this.$refs.audio.loop();
        return;
      } else {
        //每次i点击上一首按钮，下标值减一
        this._index = this.index - 1;
        if (this._index === -1) {
          //点击上一首一直到播放列表里第一首之前的时候，从列表歌曲的后面 - 1,如此循环
          this._index = this.currentSong.length - 1;
        }
        // 提交最新的下标值去vuex
        this.$store.dispatch("rankModule/getIndex", this._index);
        //获取音乐url
        this.axios({
          method: "GET",
          url:
            "http://49.234.68.133:3000/song/url?id=" +
            this.currentSong[this._index].id //播放列表里当前歌对应的id
        }).then(result => {
          // 把获取的songUrl赋值给sUrl
          this.sUrl = result.data.data[0].url;
          //提交回vuex修改歌名歌手等
          this.$store.dispatch(
            "rankModule/getSongsData",
            this.currentSong[this._index]
          );
          //提交回vuex修改播放状态
          this.$store.commit("rankModule/changeisPlay", true);
        });
        //获取歌词
        this.axios({
          method: "GET",
          url:
            "http://49.234.68.133:3000/lyric?id=" +
            this.currentSong[this._index].id
        })
          .then(result => {
            // console.log("歌词", result);
            this.$store.dispatch("rankModule/getLyric", result.data.lrc.lyric);
          })
          .catch(err => {
            // console.log("没找到歌词");
          });
      }
    },
    //下一首
    next() {
      // this.currentSong.length播放列表所以歌曲的长度;
      // console.log("this.currentSong", this.currentSong);
      if (this.currentSong.length === 1) {
        //如果只有一首歌那么循环播放
        this.loop();
        return;
      } else {
        //每次i点击上一首按钮，下标值加一
        this._index = this.index + 1;
        if (this._index === this.currentSong.length) {
          //点击上一首一直到播放列表里第一首之前的时候，从列表歌曲的后面 - 1,如此循环
          this._index = 0;
        }
        // 提交最新的下标值去vuex
        this.$store.dispatch("rankModule/getIndex", this._index);
        //获取音乐url
        this.axios({
          method: "GET",
          url:
            "http://49.234.68.133:3000/song/url?id=" +
            this.currentSong[this._index].id //播放列表里当前歌对应的id
        }).then(result => {
          // 把获取的songUrl赋值给sUrl
          this.sUrl = result.data.data[0].url;
          //提交回vuex修改歌名歌手等
          this.$store.dispatch(
            "rankModule/getSongsData",
            this.currentSong[this._index]
          );
          //提交回vuex修改播放状态
          this.$store.commit("rankModule/changeisPlay", true);
        });
        //获取歌词
        this.axios({
          method: "GET",
          url:
            "http://49.234.68.133:3000/lyric?id=" +
            this.currentSong[this._index].id
        })
          .then(result => {
            // console.log("歌词", result);
            this.$store.dispatch("rankModule/getLyric", result.data.lrc.lyric);
          })
          .catch(err => {
            // console.log("没找到歌词");
          });
      }
    },
    //顺序,随机，循环播放
    changeMode() {
      this.mode += 1;
      if (this.mode > 2) {
        this.mode = 0;
      }
      // console.log("this.mode", this.mode);
      this.currentStatus();
    },
    //打乱数组，返回随机的下标值
    shuffle(randomList) {
      let len = randomList.length;
      let index;
      if (len > 0) {
        index = Math.floor(Math.random() * len);
      }
      // console.log("indexss", index);
      return index;
    },
    //单曲循环
    loop() {
      this.$refs.audio.currentTime = 0;
      this.$refs.audio.play();
    },
    //点击上一首或下一首时随机，循环，顺序播放
    currentStatus1() {
      // let _this = this;
      // let audio = this.$refs.audio;
      // console.log("audio", audio);
      // switch (this.mode) {
      //   case 0:
      //     // console.log("this.index", this.index);
      //     let _index = (this.index += 1);
      //     this.$store.dispatch("rankModule/getIndex", _index);
      //     if (_index > this.currentSong.length - 1) {
      //       _index = 0;
      //     }
      //     this.$store.dispatch("rankModule/getIndex", _index);
      //     //获取音乐url
      //     this.axios({
      //       method: "GET",
      //       url:
      //         "http://localhost:3000/song/url?id=" + this.currentSong[_index].id //播放列表里当前歌对应的id
      //     }).then(result => {
      //       // 把获取的songUrl赋值给sUrl
      //       this.sUrl = result.data.data[0].url;
      //       //提交回vuex修改歌名歌手等
      //       this.$store.dispatch(
      //         "rankModule/getSongsData",
      //         this.currentSong[_index]
      //       );
      //       //提交回vuex修改播放状态
      //       this.$store.commit("rankModule/changeisPlay", true);
      //     });
      //     //获取歌词
      //     this.axios({
      //       method: "GET",
      //       url: "http://localhost:3000/lyric?id=" + this.currentSong[_index].id
      //     })
      //       .then(result => {
      //         // console.log("歌词", result);
      //         this.$store.dispatch(
      //           "rankModule/getLyric",
      //           result.data.lrc.lyric
      //         );
      //       })
      //       .catch(err => {
      //         // console.log("没找到歌词");
      //       });
      //     break;
      //   case 1:
      //     let index1 = this.shuffle(this.currentSong);
      //     this.$store.dispatch("rankModule/getIndex", index1);
      //     let randomSong = this.currentSong[index1];
      //     // console.log("randomSong", randomSong);
      //     if (audio.src.indexOf(randomSong.id) != -1) {
      //       index1 = this.shuffle(this.currentSong);
      //       randomSong = this.currentSong[index1];
      //     }
      //     this.axios({
      //       method: "GET",
      //       url: "http://localhost:3000/song/url?id=" + randomSong.id //播放列表里当前歌对应的id
      //     }).then(result => {
      //       // 把获取的songUrl赋值给sUrl
      //       this.sUrl = result.data.data[0].url;
      //       //提交回vuex修改歌名歌手等
      //       this.$store.dispatch("rankModule/getSongsData", randomSong);
      //       //提交回vuex修改播放状态
      //       this.$store.commit("rankModule/changeisPlay", true);
      //     });
      //     //获取歌词
      //     this.axios({
      //       method: "GET",
      //       url: "http://localhost:3000/lyric?id=" + randomSong.id
      //     })
      //       .then(result => {
      //         // console.log("歌词", result);
      //         this.$store.dispatch(
      //           "rankModule/getLyric",
      //           result.data.lrc.lyric
      //         );
      //       })
      //       .catch(err => {
      //         // console.log("没找到歌词");
      //       });
      //     break;
      //   case 2:
      //     // console.log("this.index22222222", this.index);
      //     this.$store.dispatch("rankModule/getIndex", this.index);
      //     // 获取音乐url
      //     this.axios({
      //       method: "GET",
      //       url:
      //         "http://localhost:3000/song/url?id=" +
      //         this.currentSong[this.index].id //播放列表里当前歌对应的id
      //     }).then(result => {
      //       // 把获取的songUrl赋值给sUrl
      //       this.sUrl = result.data.data[0].url;
      //       // console.log("this.sUrl", this.sUrl);
      //       this.loop();
      //       // audio.play()
      //       //提交回vuex修改歌名歌手等
      //       this.$store.dispatch(
      //         "rankModule/getSongsData",
      //         this.currentSong[this.index]
      //       );
      //       //提交回vuex修改播放状态
      //       this.$store.commit("rankModule/changeisPlay", true);
      //     });
      //     break;
      // }
    },
    //歌曲播放完毕是随机，循环，顺序播放
    currentStatus() {
      let _this = this;
      let audio = this.$refs.audio;
      console.log("audio", audio);
      switch (this.mode) {
        case 0:
          audio.onended = () => {
            // console.log("this.index", this.index);
            let _index = (this.index += 1);
            this.$store.dispatch("rankModule/getIndex", _index);
            if (_index > this.currentSong.length - 1) {
              _index = 0;
            }
            this.$store.dispatch("rankModule/getIndex", _index);
            //获取音乐url
            this.axios({
              method: "GET",
              url:
                "http://49.234.68.133:3000/song/url?id=" +
                this.currentSong[_index].id //播放列表里当前歌对应的id
            }).then(result => {
              // 把获取的songUrl赋值给sUrl
              this.sUrl = result.data.data[0].url;
              //提交回vuex修改歌名歌手等
              this.$store.dispatch(
                "rankModule/getSongsData",
                this.currentSong[_index]
              );
              //提交回vuex修改播放状态
              this.$store.commit("rankModule/changeisPlay", true);
            });
            //获取歌词
            this.axios({
              method: "GET",
              url:
                "http://49.234.68.133:3000/lyric?id=" +
                this.currentSong[_index].id
            })
              .then(result => {
                // console.log("歌词", result);
                this.$store.dispatch(
                  "rankModule/getLyric",
                  result.data.lrc.lyric
                );
              })
              .catch(err => {
                // console.log("没找到歌词");
              });
          };
          break;
        case 1:
          audio.onended = () => {
            let index1 = this.shuffle(this.currentSong);
            this.$store.dispatch("rankModule/getIndex", index1);
            let randomSong = this.currentSong[index1];
            // console.log("randomSong", randomSong);
            if (audio.src.indexOf(randomSong.id) != -1) {
              index1 = this.shuffle(this.currentSong);
              randomSong = this.currentSong[index1];
            }
            this.axios({
              method: "GET",
              url: "http://49.234.68.133:3000/song/url?id=" + randomSong.id //播放列表里当前歌对应的id
            }).then(result => {
              // 把获取的songUrl赋值给sUrl
              this.sUrl = result.data.data[0].url;
              //提交回vuex修改歌名歌手等
              this.$store.dispatch("rankModule/getSongsData", randomSong);
              //提交回vuex修改播放状态
              this.$store.commit("rankModule/changeisPlay", true);
            });
            //获取歌词
            this.axios({
              method: "GET",
              url: "http://49.234.68.133:3000/lyric?id=" + randomSong.id
            })
              .then(result => {
                // console.log("歌词", result);
                this.$store.dispatch(
                  "rankModule/getLyric",
                  result.data.lrc.lyric
                );
              })
              .catch(err => {
                // console.log("没找到歌词");
              });
          };
          break;
        case 2:
          audio.onended = () => {
            // console.log("this.index22222222", this.index);
            this.$store.dispatch("rankModule/getIndex", this.index);
            // 获取音乐url
            this.axios({
              method: "GET",
              url:
                "http://49.234.68.133:3000/song/url?id=" +
                this.currentSong[this.index].id //播放列表里当前歌对应的id
            }).then(result => {
              // 把获取的songUrl赋值给sUrl
              this.sUrl = result.data.data[0].url;
              // console.log("this.sUrl", this.sUrl);
              this.loop();
              // audio.play()
              //提交回vuex修改歌名歌手等
              this.$store.dispatch(
                "rankModule/getSongsData",
                this.currentSong[this.index]
              );
              //提交回vuex修改播放状态
              this.$store.commit("rankModule/changeisPlay", true);
            });
          };
          break;
      }
    },
    //打开关闭播放列表
    playListIcon() {
      this.playListStatus = !this.playListStatus;
      if (this.playListStatus == true) {
        this.$refs.mPlaybar.style.top = -53 + "px";
      } else {
        this.$refs.mPlaybar.style.top = -7 + "px";
        this.$refs.mPlaybar.style.transition = "all 1s linear";
      }
    },
    //是否固定底部播放器
    lock() {
      this.isLock = !this.isLock;
      if (this.isLock == true) {
        this.$refs.mPlaybar.style.top = -53 + "px";
      } else {
        this.$refs.mPlaybar.style.top = -7 + "px";
      }
    },
    //关闭播放列表
    close() {
      this.playListStatus = false;
      let timer = setTimeout(() => {
        this.$refs.mPlaybar.style.top = -7 + "px";
        clearTimeout(timer);
      }, 1000);
    },
    //删除播放列表歌曲
    delCurrentSong(id, index, item) {
      // console.log("id", id);
      if (item.id == id) {
        this.currentSong.splice(index, 1);
        window.localStorage.setItem(
          "currentSong",
          JSON.stringify(this.currentSong)
        );
      }
      // console.log("this.index", this.index);
      // console.log("index", index);

      if (index <= this.index) {
        // this.$refs.audio.currentTime = 0;
        // this.$refs.audio.src = '';

        // this.index -= 1;
        // console.log('a',a);
        // let aa = this.index;
        // let _this = this;
        let index3 = this.index - 1;
        if (index3 == -1) {
          return;
        }
        // console.log("index3", index3);
        this.$store.dispatch("rankModule/getIndex", index3);
        //  this.next();
        // this.next()
        // let index2 = this.shuffle(this.currentSong)
        // 获取音乐url
        this.axios({
          method: "GET",
          url:
            "http://49.234.68.133:3000/song/url?id=" +
            this.currentSong[index3].id //播放列表里当前歌对应的id
        }).then(result => {
          // 把获取的songUrl赋值给sUrl
          // console.log("result", result);

          this.sUrl = result.data.data[0].url;
          //提交回vuex修改歌名歌手等
          this.$store.dispatch(
            "rankModule/getSongsData",
            this.currentSong[index3]
          );
          //提交回vuex修改播放状态
          this.$store.commit("rankModule/changeisPlay", true);
        });
        // this.currentStatus();
      }
    },
    //收藏播放列表歌曲
    addCurrentSong(id, index, item) {
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
    //清除播放列表
    clear() {
      this.currentSong.splice(this.currentSong);
      this.$refs.audio.currentTime = 0;
      this.$refs.audio.src = "";
      window.localStorage.setItem(
        "currentSong",
        JSON.stringify(this.currentSong)
      );
    },
    likeAll(item) {
      this.$store.dispatch("rankModule/getLikeSongs", item);
    }
  },
  mounted() {
    let songsData2 = JSON.parse(window.localStorage.getItem("playSong"));

    this.$store.dispatch("rankModule/getSongsData", songsData2);
    // this.songsData1 = JSON.parse(window.localStorage.getItem("currentSong"));

    // this.$store.dispatch("rankModule/getCurrentSong", this.songsData1);

    //是否是第一次播放
    this.isFirstPlay = true;
    // 当音频播放时
    this.$refs.audio.onplay = function() {};
    // console.log(this.isPlay);
    this.$refs.audio.oncanplay = function() {
      // console.log("可以播放了");
      //播放
      this.play();
    };
    //先定义好this，防止在ontimeupdate方法里丢失
    let _this = this;
    // //获取进度条的总宽度
    this.progressWidth = this.$refs.progress.clientWidth;
    // //获取滑块的宽度
    this.maskWidth = this.$refs.mask.clientWidth;
    // console.log("maskWidth", maskWidth);
    // //滑块最小left
    this.minLeft = 0;
    //滑块最大left
    this.maxLeft = this.progressWidth;

    //鼠标松开时
    let isLeave = false;
    //鼠标按钮下时
    let isDown = false;
    //鼠标按下
    this.$refs.layer.onmousedown = e => {
      isDown = true;
      this.changeProgress(e);
      //鼠标移动
      this.$refs.layer.onmousemove = evt => {
        //阻止浏览器默认行为
        evt.preventDefault();
        this.changeProgress(evt);
      };
    };
    // 鼠标松开
    this.$refs.layer.onmouseup = e => {
      //解绑mousemove事件
      this.$refs.layer.onmousemove = null;
      isLeave = true;
      isDown = false;
      this.changeProgress(e);
    };
    //鼠标离开
    this.$refs.layer.onmouseleave = e => {
      //解绑mousemove事件
      if (isDown) {
        this.$refs.layer.onmousemove = null;
        isLeave = true;
        isDown = false;
        this.changeProgress(e);
      }
    };

    // this.currentStatus();

    // this.currentStatus1()
    // window.addEventListener("scroll", this.menu);

    // this.$refs.listbdc.onscroll = e => {
    //   console.log('e',e);

    //   console.log(this.$refs.listbdc.scrollTop);

    // }
  }
};
</script>

<style lang="less" scoped>
.g-btmbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0;
  width: 100%;
  z-index: 1002;
  .m-playbar {
    top: -7px;
    visibility: visible;
    position: absolute;
    left: 0;
    width: 100%;
    height: 53px;
    margin: 0 auto;
    transition: all 1s linear;
    .updn {
      position: relative;
      z-index: 11;
      .left {
        position: absolute;
        top: -14px;
        right: 15px;
        width: 52px;
        height: 67px;
        background-position: 0 -380px;
        background-image: url("../assets/images/playbar.png");
        .btn {
          background-position: -80px -380px;
          display: block;
          width: 18px;
          height: 18px;
          margin: 6px 0 0 17px;
          background-image: url("../assets/images/playbar.png");
        }
        .btn:hover {
          background-position: -80px -400px;
          background-image: url("../assets/images/playbar.png");
        }
        .btn.active {
          background-position: -100px -380px;
          background-image: url("../assets/images/playbar.png");
        }
        .btn.active:hover {
          background-position: -100px -400px;
          background-image: url("../assets/images/playbar.png");
        }
      }
      .right {
        position: absolute;
        top: -1px;
        right: 0;
        width: 15px;
        height: 54px;
        background-position: -52px -393px;
        pointer-events: none;
        background-image: url("../assets/images/playbar.png");
      }
    }
    .bg {
      height: 53px;
      margin-right: 67px;
      background-position: 0 0;
      background-repeat: repeat-x;
      background-image: url("../assets/images/playbar.png");
    }
    .hand {
      position: absolute;
      top: -10px;
      width: 100%;
      height: 20px;
      cursor: pointer;
    }
    .wrap {
      position: absolute;
      left: 50%;
      top: 6px;
      z-index: 15;
      transform: translateX(-498.5px);
      width: 980px;
      height: 47px;
      margin: 0 auto;
      .btns {
        width: 137px;
        padding: 6px 0 0 0;
        a {
          display: block;
          float: left;
          width: 28px;
          height: 28px;
          margin-right: 8px;
          margin-top: 5px;
          text-indent: -9999px;
          background-image: url("../assets/images/playbar.png");
        }
        .prv {
          background-position: 0 -130px;
        }
        .prv:hover {
          background-position: -30px -130px;
        }
        .ply {
          background-position: 0 -204px;
          width: 36px;
          height: 36px;
          margin-top: 0;
        }
        .ply:hover {
          background-position: -40px -204px;
        }
        .ply.active {
          background-position: 0 -165px;
          width: 36px;
          height: 36px;
          margin-top: 0;
        }
        .ply.active:hover {
          background-position: -40px -165px;
        }
        .nxt {
          background-position: -80px -130px;
        }
        .nxt:hover {
          background-position: -110px -130px;
        }
      }
      .head {
        position: relative;
        margin: 6px 15px 0 0;
        width: 34px;
        height: 34px;
        img {
          width: 34px;
          height: 34px;
          border: 0;
        }
        .mask {
          position: absolute;
          top: 0px;
          left: 0px;
          display: block;
          width: 34px;
          height: 35px;
          background-position: 0 -80px;
          background-image: url("../assets/images/playbar.png");
        }
      }
      .play {
        position: relative;
        width: 608px;
        .words {
          height: 28px;
          overflow: hidden;
          color: #e8e8e8;
          text-shadow: 0 1px 0 #171717;
          line-height: 28px;
          .name {
            max-width: 300px;
            color: #e8e8e8;
            font-size: 12px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
            cursor: pointer;
          }
          .name:hover {
            text-decoration: underline;
          }
          .by {
            max-width: 220px;
            margin-left: 15px;

            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
            a {
              color: #9b9b9b;
              font-size: 12px;
            }
            a:hover {
              text-decoration: underline;
              cursor: pointer;
            }
          }
        }
        .m-pbar {
          position: relative;
          width: 493px;
          .barbg {
            height: 9px;
            width: 493px;
            background-position: right 0;
            background-image: url("../assets/images/statbar.png");
            .rdy {
              width: 0px;
              background-position: right -30px;
              height: 9px;
              background-image: url("../assets/images/statbar.png");
            }
            .layer {
              position: absolute;
              top: 0;
              left: 0;
              height: 9px;
              width: 493px;
              background-position: right 0;
            }
            .cur {
              width: 0px;
              height: 9px;
              position: absolute;
              top: 0;
              left: 0;
              background-position: left -66px;
              background-image: url("../assets/images/statbar.png");
              .btn {
                position: absolute;
                top: -7px;
                left: 0;
                width: 22px;
                height: 24px;
                margin-left: -11px;
                background-position: 0 -250px;
                background-image: url("../assets/images/iconall.png");
                i {
                  visibility: hidden;
                  position: absolute;
                  left: 5px;
                  top: 5px;
                  width: 12px;
                  height: 12px;
                  font-style: normal;
                  text-align: left;
                  font-size: inherit;
                }
              }
              .btn:hover {
                background-position: 0 -280px;
              }
            }
          }
          .time {
            position: absolute;
            top: -3px;
            right: -84px;
            color: #797979;
            font-size: 12px;
            text-shadow: 0 1px 0 #121212;
            em {
              color: #a1a1a1;
              font-style: normal;
              text-align: left;
              font-size: inherit;
            }
          }
        }
      }
      .oper {
        width: 60px;
        .icn {
          float: left;
          width: 25px;
          height: 25px;
          margin: 11px 2px 0 0;
          text-indent: -9999px;
        }
        .icn-add {
          background-position: -88px -163px;
          background-image: url("../assets/images/playbar.png");
        }
        .icn-add:hover {
          background-position: -88px -189px;
          background-image: url("../assets/images/playbar.png");
        }
        .icn-share {
          background-position: -114px -163px;
          background-image: url("../assets/images/playbar.png");
        }
        .icn-share:hover {
          background-position: -114px -189px;
          background-image: url("../assets/images/playbar.png");
        }
      }
      .ctrl {
        position: relative;
        z-index: 10;
        width: 113px;
        padding-left: 13px;
        background-position: -147px -238px;
        .m-vol {
          visibility: hidden;
          position: absolute;
          top: -113px;
          left: 9px;
          clear: both;
          width: 32px;
          height: 113px;
        }
        .icn {
          float: left;
          width: 25px;
          height: 25px;
          text-indent: -9999px;
        }
        .icn-vol {
          margin: 11px 2px 0 0;
          background-position: -2px -248px;
          background-image: url("../assets/images/playbar.png");
        }
        .icn-vol:hover {
          background-position: -31px -248px;
          background-image: url("../assets/images/playbar.png");
        }
        .icon1 {
          position: relative;
          float: left;
          width: 25px;
          height: 25px;
          margin: 11px 2px 0 0;
          overflow: hidden;
        }
        .icn-shuffle {
          background-position: -66px -248px;
          background-image: url("../assets/images/playbar.png");
        }
        .icn-shuffle:hover {
          background-position: -93px -248px;
        }
        .icn-loop {
          background-position: -3px -344px;
          background-image: url("../assets/images/playbar.png");
        }
        .icn-loop:hover {
          background-position: -33px -344px;
        }
        .icn-one {
          background-position: -66px -344px;
          background-image: url("../assets/images/playbar.png");
        }
        .icn-one:hover {
          background-position: -93px -344px;
        }
        .add {
          float: left;
          width: 59px;
          height: 36px;
          position: relative;
          .icn-list {
            display: block;
            float: none;
            width: 38px;
            padding-left: 21px;
            background-position: -42px -68px;
            line-height: 27px;
            text-align: center;
            font-size: 12px;
            color: #666;
            text-shadow: 0 1px 0 #080707;
            text-indent: 0;
            text-decoration: none;
          }
          .icn-list:hover {
            background-position: -42px -98px;
            text-decoration: none;
          }
          .icn {
            height: 25px;
            margin: 11px 2px 0 0;
            background-image: url("../assets/images/playbar.png");
          }
        }
      }
    }
    .list {
      position: absolute;
      left: 50%;
      bottom: 47px;
      width: 986px;
      height: 301px;
      margin-left: -493px;
      .listhd {
        background-position: 0 0;
        height: 41px;
        padding: 0 5px;
        background-image: url("../assets/images/playlist_bg.png");
        .listhdc {
          position: relative;
          height: 40px;
          a {
            color: #ccc;
          }
          .ico {
            float: left;
            margin: 1px 6px 0 0;
            height: 16px;
            background-image: url("../assets/images/playlist.png");
          }
          h4 {
            position: absolute;
            left: 25px;
            top: 0;
            height: 39px;
            line-height: 39px;
            font-size: 14px;
            color: #e2e2e2;
          }
          .addall {
            position: absolute;
            left: 398px;
            top: 12px;
            height: 15px;
            line-height: 15px;
            font-size: 12px;
            cursor: pointer;
            .ico-add {
              width: 16px;
              background-position: -24px 0;
              background-image: url("../assets/images/playlist.png");
            }
          }
          .line {
            position: absolute;
            top: 13px;
            left: 477px;
            height: 15px;
            border-left: 1px solid #000;
            border-right: 1px solid #2c2c2c;
          }
          .clear {
            position: absolute;
            left: 490px;
            top: 12px;
            height: 15px;
            line-height: 15px;
            font-size: 12px;
            cursor: pointer;
            .icn-del {
              width: 13px;
              background-position: -51px 0;
            }
          }
          .lytit {
            position: absolute;
            left: 595px;
            top: 0;
            width: 346px;
            text-align: center;
            height: 39px;
            line-height: 39px;
            color: #fff;
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
            font-family: Arial, Helvetica, sans-serif;
          }
          .close {
            position: absolute;
            top: 6px;
            right: 8px;
            width: 30px;
            height: 30px;
            overflow: hidden;
            text-indent: -999px;
            cursor: pointer;
            background-position: -195px 9px;
            background-image: url("../assets/images/playlist.png");
          }
        }
      }
      .listbd {
        position: absolute;
        left: 0;
        top: 41px;
        width: 976px;
        height: 260px;
        padding: 0 5px;
        overflow: hidden;
        background-position: -1014px 0;
        background-image: url("../assets/images/playlist_bg.png");
        background-repeat: repeat-y;
        .imgbg {
          position: absolute;
          left: 2px;
          top: -360px;
          z-index: 1;
          width: 980px;
          height: auto;
          opacity: 0.2;
          border: 0;
        }
        .msk {
          position: absolute;
          left: 2px;
          top: 0;
          z-index: 2;
          width: 558px;
          height: 260px;
          background: #121212;
          opacity: 0.5;
        }
        .listbdc {
          position: absolute;
          left: 2px;
          top: 0;
          z-index: 4;
          height: 260px;
          width: 558px;
          overflow: hidden;
          overflow-y: auto;
          ul {
            color: #ccc;
            overflow: hidden;
            li {
              float: left;
              width: 100%;
              .col {
                float: left;
                padding-left: 10px;
                height: 28px;
                line-height: 28px;
                font-size: 12px;
                text-align: left;
                overflow: hidden;
                cursor: pointer;
                .ico-src {
                  width: 14px;
                  height: 16px;
                  margin-left: 0;
                  background-position: -80px 0px;
                  background-image: url("../assets/images/playlist.png");
                }
                a {
                  color: #9b9b9b;
                }
                .icns {
                  // display: none;
                  position: absolute;
                  right: 0;
                  top: 0;
                  width: 100px;
                  height: 23px;
                  i {
                    font-style: normal;
                    text-align: left;
                    font-size: inherit;
                  }
                  .ico {
                    height: 16px;
                    background-image: url("../assets/images/playlist.png");
                  }
                  .icn-del {
                    width: 13px;
                    background-position: -51px 0;
                  }
                  .ico-dl {
                    width: 14px;
                    background-position: -57px -50px;
                  }
                  .ico-share {
                    width: 14px;
                    background-position: 0 0;
                  }
                  .ico-add {
                    width: 16px;
                    background-position: -24px 0;
                  }
                }
                .ico {
                  float: right;
                  overflow: hidden;
                  margin: 7px 0 0 10px;
                  text-indent: -9999px;
                }
              }
              .col-1 {
                width: 10px;
              }
              .col-2 {
                width: 256px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
              .col-3 {
                // display: none;
                visibility: hidden;
                width: 78px;
                position: relative;
              }
              .col-4 {
                width: 70px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
              .col-5 {
                width: 35px;
                color: #666;
              }
              .col-6 {
                width: 37px;
                padding-left: 6px;
              }
            }
            li.active {
              background-color: rgba(0, 0, 0, 0.4);
              > div {
                color: #fff;
              }
              div > span > a {
                color: #fff;
              }
            }
            li:hover .col-3 {
              visibility: visible;
            }
            li:hover {
              background-color: rgba(0, 0, 0, 0.4);
            }
            li:hover div {
              color: #fff;
            }
            li:hover div > span > a {
              color: #fff;
            }
          }
        }
        .listbdc::-webkit-scrollbar {
          width: 6px;
          // height: 4px;
        }
        .listbdc::-webkit-scrollbar-thumb {
          border-radius: 5px;
          box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.8);
          background-color: #868686;
        }
        .listbdc::-webkit-scrollbar-track {
          background-color: #000;
        }
        .ask {
          position: absolute;
          right: 25px;
          top: 12px;
          cursor: pointer;
          z-index: 5;
          .ico-ask {
            display: inline-block;
            width: 21px;
            height: 21px;
            background-position: 0 -50px;
            background-image: url("../assets/images/playlist.png");
            text-indent: 0;
          }
        }
        .ms {
          position: absolute;
          left: 560px;
          top: 0;
          z-index: 3;
          width: 420px;
          height: 250px;
          background: #121212;
          opacity: 0.01;
        }
        .msk2 {
          position: absolute;
          left: 560px;
          top: 0;
          z-index: 3;
          width: 420px;
          height: 250px;
          margin: 21px 0 20px 0;
          height: 219px;
          // background: #121212;
          overflow-y: auto;
          .listlyric {
            position: absolute;
            right: 40px;
            top: 0;
            z-index: 4;

            width: 354px;
            overflow: hidden;
            p {
              color: #989898;
              font-size: 12px;
              // word-wrap: break-word;
              text-align: center;
              line-height: 32px;
              height: auto !important;
              // height: 32px;
              min-height: 32px;
              // -webkit-transition: color 0.7s linear;
              // -moz-transition: color 0.7s linear;
              // -o-transition: color 0.7s linear;
              transition: color 0.7s linear;
            }
            p.active {
              font-size: 14px;
              color: #fff;
            }
          }
        }
        .msk2::-webkit-scrollbar {
          width: 6px;
          // height: 4px;
        }
        .msk2::-webkit-scrollbar-thumb {
          border-radius: 5px;
          box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.8);
          background-color: #868686;
        }
        .msk2::-webkit-scrollbar-track {
          background-color: #000;
        }
      }
    }
  }
  .m-playbar.active {
    visibility: visible;
    position: absolute;
    top: -53px !important;
    left: 0;
    width: 100%;
    height: 53px;
    margin: 0 auto;
    transition: all 1.5s linear;
  }
  .m-playbar:hover {
    visibility: visible;
    position: absolute;
    top: -53px !important;
    left: 0;
    width: 100%;
    height: 53px;
    margin: 0 auto;
    transition: all 0.5s linear;
  }
}
</style>