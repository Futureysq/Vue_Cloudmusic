<template>
  <div class="recommend">
    <div class="swiper">
      <div class="container clearfix">
        <van-swipe class="my-swipe fl" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item,index) in banners" :key="index">
            <img :src="item.imageUrl" alt />
          </van-swipe-item>
        </van-swipe>
        <div class="right fl">
          <div class="down">
            <img src="../../assets/images/download.png" alt />
          </div>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </div>
      </div>
      <div class="content clearfix">
        <div class="left">
          <div class="left-c fl">
            <div class="con clearfix">
              <div class="list clearfix">
                <div class="round fl"></div>
                <div class="hot-recommend fl">热门推荐</div>
                <div class="ul fl">
                  <ul>
                    <li>华语</li>
                    <li>|</li>
                    <li>流行</li>
                    <li>|</li>
                    <li>摇滚</li>
                    <li>|</li>
                    <li>民谣</li>
                    <li>|</li>
                    <li>电子</li>
                  </ul>
                </div>
                <div class="morebox fr">
                  <div class="more fl">更多</div>
                  <div class="icon fl"></div>
                </div>
              </div>
              <div class="list-recommend clearfix">
                <ul class="ul clearfix">
                  <li v-for="(item,index) in showRecommendData.data" :key="index">
                    <div class="img">
                      <div>
                        <img class="auto-img" :src="item.picUrl" alt />
                      </div>
                      <div class="playnum clearfix">
                        <div class="listen-icon fl"></div>
                        <div class="play-num fl">{{item.playCount}}</div>
                        <div class="play fr"></div>
                      </div>
                    </div>
                    <div class="dec">
                      <a href>{{item.name}}</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="con clearfix">
              <div class="list clearfix">
                <div class="round fl"></div>
                <div class="hot-recommend fl">个性化推荐</div>
                <div class="morebox fr">
                  <div class="more fl">更多</div>
                  <div class="icon fl"></div>
                </div>
              </div>
              <div class="list-recommend clearfix">
                <ul class="ul clearfix">
                  <li v-for="(item,index) in showRecommendData2.data" :key="index">
                    <div class="img">
                      <div>
                        <img class="auto-img" :src="item.picUrl" alt />
                      </div>
                      <div class="playnum clearfix">
                        <div class="listen-icon fl"></div>
                        <div class="play-num fl">{{item.playCount}}</div>
                        <div class="play fr"></div>
                      </div>
                    </div>
                    <div class="dec">
                      <a href>{{item.name}}</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="con clearfix">
              <div class="list clearfix">
                <div class="round fl"></div>
                <div class="hot-recommend fl">新碟上架</div>
                <div class="morebox fr">
                  <div class="more fl">更多</div>
                  <div class="icon fl"></div>
                </div>
              </div>
              <div class="list-recommend clearfix">
                <div class="disk">
                  <div class="inner">
                    <a class="prev" @click="prev"></a>
                    <div class="lit cleafix">
                      <ul class="clearfix" :style="{left: '-645px'}">
                        <li v-for="(item,index) in showNewDiscsData.data" :key="index">
                          <div class="u-img">
                            <img class="auto-img j-img" :src="item.picUrl" alt />
                            <a class="msk"></a>
                          </div>
                          <p class="f-til">
                            <a href class="s-fc0">{{item.name}}</a>
                          </p>
                          <p class="f-til til">
                            <a href class="s-fc1"></a>
                            {{item.artists.name}}
                          </p>
                        </li>
                      </ul>
                      <ul class="clearfix" :style="{left: '0px'}">
                        <li v-for="(item,index) in showNewDiscsData.data1" :key="index">
                          <div class="u-img">
                            <img class="auto-img j-img" :src="item.picUrl" alt />
                            <a class="msk"></a>
                          </div>
                          <p class="f-til">
                            <a href class="s-fc0">{{item.name}}</a>
                          </p>
                          <p class="f-til til">
                            <a href class="s-fc1"></a>
                            {{item.artist.name}}
                          </p>
                        </li>
                      </ul>
                      <ul class="clearfix" :style="{left: '645px'}">
                        <li v-for="(item,index) in showNewDiscsData.data2" :key="index">
                          <div class="u-img">
                            <img class="auto-img j-img" :src="item.picUrl" alt />
                            <a class="msk"></a>
                          </div>
                          <p class="f-til">
                            <a href class="s-fc0">{{item.name}}</a>
                          </p>
                          <p class="f-til til">
                            <a href class="s-fc1"></a>
                            {{item.artist.name}}
                          </p>
                        </li>
                      </ul>
                      <ul class="clearfix" :style="{left: '-645px'}">
                        <li v-for="(item,index) in showNewDiscsData.data3" :key="index">
                          <div class="u-img">
                            <img class="auto-img j-img" :src="item.picUrl" alt />
                            <a class="msk"></a>
                          </div>
                          <p class="f-til">
                            <a href class="s-fc0">{{item.name}}</a>
                          </p>
                          <p class="f-til til">
                            <a href class="s-fc1"></a>
                            {{item.artist.name}}
                          </p>
                        </li>
                      </ul>
                    </div>
                    <a class="next" @click="next"></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="con clearfix">
              <div class="list clearfix">
                <div class="round fl"></div>
                <div class="hot-recommend fl">榜单</div>
                <div class="morebox fr">
                  <div class="more fl">更多</div>
                  <div class="icon fl"></div>
                </div>
              </div>
              <div class="rank-list">
                <dl class="rank-l">
                  <dt class="top">
                    <div class="img fl">
                      <img class="auto-img" :src="songSheet[0].coverImgUrl" alt />
                      <a href="#" class="msk"></a>
                    </div>
                    <div class="tit">
                      <a href="#">
                        <h3 class="f-tit">{{songSheet[0].name}}</h3>
                      </a>
                      <div class="btn">
                        <a
                          href="javascript:;"
                          class="btn-1 btn-a"
                          @click.stop="plSongSheet(reList1)"
                        ></a>
                        <a href="javascript:;" class="btn-1 btn-b"></a>
                      </div>
                    </div>
                  </dt>
                  <dd>
                    <ol>
                      <li v-for="(item,index) in reList1" :key="index">
                        <span class="numb" :class="{active:index <3}">{{index + 1}}</span>
                        <a href="#" class="pl">{{item.name}}</a>
                        <div class="oper">
                          <a
                            class="s-bg s-bg-11"
                            @click.stop="plSong(item.id,item)"
                            href="javascript:;"
                          ></a>
                          <a class="u-icn u-icn-81" href="javascript:;"></a>
                          <a
                            class="s-bg s-bg-12"
                            @click.stop="addCurrentSong(item.id,index,item)"
                            href="javascript:;"
                          ></a>
                        </div>
                      </li>
                    </ol>
                    <div class="more">
                      <a href="#" class="s-fc">查看全部></a>
                    </div>
                  </dd>
                </dl>
                <dl class="rank-l">
                  <dt class="top">
                    <div class="img fl">
                      <img class="auto-img" :src="songSheet[1].coverImgUrl" alt />
                      <a href="#" class="msk"></a>
                    </div>
                    <div class="tit">
                      <a href="#">
                        <h3 class="f-tit">{{songSheet[1].name}}</h3>
                      </a>
                      <div class="btn">
                        <a
                          href="javascript:;"
                          class="btn-1 btn-a"
                          @click.stop="plSongSheet(reList2)"
                        ></a>
                        <a href="javascript:;" class="btn-1 btn-b"></a>
                      </div>
                    </div>
                  </dt>
                  <dd>
                    <ol>
                      <li v-for="(item,index) in reList2" :key="index">
                        <span class="numb" :class="{active:index <3}">{{index + 1}}</span>
                        <a href="#" class="pl">{{item.name}}</a>
                        <div class="oper">
                          <a class="s-bg s-bg-11" @click="plSong(item.id,item)" href="javascript:;"></a>
                          <a class="u-icn u-icn-81" href="javascript:;"></a>
                          <a
                            class="s-bg s-bg-12"
                            @click.stop="addCurrentSong(item.id,index,item)"
                            href="javascript:;"
                          ></a>
                        </div>
                      </li>
                    </ol>
                    <div class="more">
                      <a href="#" class="s-fc">查看全部></a>
                    </div>
                  </dd>
                </dl>
                <dl class="rank-l">
                  <dt class="top">
                    <div class="img fl">
                      <img class="auto-img" :src="songSheet[2].coverImgUrl" alt />
                      <a href="#" class="msk"></a>
                    </div>
                    <div class="tit">
                      <a href="#">
                        <h3 class="f-tit">{{songSheet[2].name}}</h3>
                      </a>
                      <div class="btn">
                        <a
                          href="javascript:;"
                          class="btn-1 btn-a"
                          @click.stop="plSongSheet(reList3)"
                        ></a>
                        <a href="javascript:;" class="btn-1 btn-b"></a>
                      </div>
                    </div>
                  </dt>
                  <dd>
                    <ol>
                      <li v-for="(item,index) in reList3" :key="index">
                        <span class="numb" :class="{active:index <3}">{{index + 1}}</span>
                        <a href="#" class="pl">{{item.name}}</a>
                        <div class="oper">
                          <a class="s-bg s-bg-11" @click="plSong(item.id,item)" href="javascript:;"></a>
                          <a class="u-icn u-icn-81" href="javascript:;"></a>
                          <a
                            class="s-bg s-bg-12"
                            @click.stop="addCurrentSong(item.id,index,item)"
                            href="javascript:;"
                          ></a>
                        </div>
                      </li>
                    </ol>
                    <div class="more">
                      <a href="#" class="s-fc">查看全部></a>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div class="right fr">
          <div class="m-info">
            <div class="f-cb clearfix">
              <a href class="head">
                <img class="auto-img" src="../../assets/images/109951163253039183.jpg" alt />
              </a>
              <div class="info">
                <h4>
                  <a href class="nn">我只是一片随风飘舞的叶子</a>
                  <span class="vip"></span>
                </h4>
                <p>
                  <a href class="u-lv">
                    7
                    <i class="ri"></i>
                  </a>
                </p>
                <div class="btnwrap">
                  <a href class="u-btn">
                    <i>签到</i>
                  </a>
                </div>
              </div>
            </div>
            <ul class="dny clearfix s-fc">
              <li class="fst">
                <a href>
                  <strong>0</strong>
                  <span>动态</span>
                </a>
              </li>
              <li>
                <a href>
                  <strong>0</strong>
                  <span>关注</span>
                </a>
              </li>
              <li class="lst">
                <a href>
                  <strong>0</strong>
                  <span>粉丝</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="n-singer">
            <h3 class="h3 clearfix">
              <span class="f-fl">入驻歌手</span>
              <a href class="more">查看全部 ></a>
            </h3>
            <ul class="n-enter clearfix">
              <li>
                <a href class="itm">
                  <div class="head">
                    <img class="auto-img" src="../../assets/images/5931865232210340.jpg" alt />
                  </div>
                  <div class="ifo">
                    <h4>
                      <span class="nm">张惠妹aMEI</span>
                    </h4>
                    <p class="s-fc">台湾歌手张惠妹</p>
                  </div>
                </a>
              </li>
              <li>
                <a href class="itm">
                  <div class="head">
                    <img class="auto-img" src="../../assets/images/5931865232210340.jpg" alt />
                  </div>
                  <div class="ifo">
                    <h4>
                      <span class="nm">张惠妹aMEI</span>
                    </h4>
                    <p class="s-fc">台湾歌手张惠妹</p>
                  </div>
                </a>
              </li>
              <li>
                <a href class="itm">
                  <div class="head">
                    <img class="auto-img" src="../../assets/images/5931865232210340.jpg" alt />
                  </div>
                  <div class="ifo">
                    <h4>
                      <span class="nm">张惠妹aMEI</span>
                    </h4>
                    <p class="s-fc">台湾歌手张惠妹</p>
                  </div>
                </a>
              </li>
              <li>
                <a href class="itm">
                  <div class="head">
                    <img class="auto-img" src="../../assets/images/5931865232210340.jpg" alt />
                  </div>
                  <div class="ifo">
                    <h4>
                      <span class="nm">张惠妹aMEI</span>
                    </h4>
                    <p class="s-fc">台湾歌手张惠妹</p>
                  </div>
                </a>
              </li>
              <li>
                <a href class="itm">
                  <div class="head">
                    <img class="auto-img" src="../../assets/images/5931865232210340.jpg" alt />
                  </div>
                  <div class="ifo">
                    <h4>
                      <span class="nm">张惠妹aMEI</span>
                    </h4>
                    <p class="s-fc">台湾歌手张惠妹</p>
                  </div>
                </a>
              </li>
            </ul>
            <div>
              <a href class="u-b">
                <i>申请成为网易音乐人</i>
              </a>
            </div>
          </div>
          <div class="n-zhubo">
            <h3 class="h3">热门主播</h3>
            <ul class="n-hotzhubo clearfix">
              <li>
                <a href class="cver">
                  <img class="auto-img" src="../../assets/images/1407374893913311.jpg" alt />
                </a>
                <div class="info">
                  <p>
                    <a href class="nm-ic">陈立</a>
                    <sup class="u-ic"></sup>
                  </p>
                  <p class="s-fc1">心理学家、美食家陈立教授</p>
                </div>
              </li>
              <li>
                <a href class="cver">
                  <img class="auto-img" src="../../assets/images/1407374893913311.jpg" alt />
                </a>
                <div class="info">
                  <p>
                    <a href class="nm-ic">陈立</a>
                    <sup class="u-ic"></sup>
                  </p>
                  <p class="s-fc1">心理学家、美食家陈立教授</p>
                </div>
              </li>
              <li>
                <a href class="cver">
                  <img class="auto-img" src="../../assets/images/1407374893913311.jpg" alt />
                </a>
                <div class="info">
                  <p>
                    <a href class="nm-ic">陈立</a>
                    <sup class="u-ic"></sup>
                  </p>
                  <p class="s-fc1">心理学家、美食家陈立教授</p>
                </div>
              </li>
              <li>
                <a href class="cver">
                  <img class="auto-img" src="../../assets/images/1407374893913311.jpg" alt />
                </a>
                <div class="info">
                  <p>
                    <a href class="nm-ic">陈立</a>
                    <sup class="u-ic"></sup>
                  </p>
                  <p class="s-fc1">心理学家、美食家陈立教授</p>
                </div>
              </li>
              <li>
                <a href class="cver">
                  <img class="auto-img" src="../../assets/images/1407374893913311.jpg" alt />
                </a>
                <div class="info">
                  <p>
                    <a href class="nm-ic">陈立</a>
                    <sup class="u-ic"></sup>
                  </p>
                  <p class="s-fc1">心理学家、美食家陈立教授</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from "../../components/Footer";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations } = createNamespacedHelpers("rankModule");
import { Toast } from "vant";
export default {
  data() {
    return {
      ins: 0,
      banners: [],
      recommendId: [],
      reList1: [],
      reList2: [],
      reList3: []
    };
  },
  computed: {
    ...mapState([
      "recommendData",
      "showRecommendData",
      "showRecommendData2",
      "newDiscsData",
      "showNewDiscsData",
      "songSheet",
      "rankListData",
      "currentSong",
      "likeSongs"
    ])
  },
  methods: {
    ...mapMutations([
      "getRecommendData",
      "getNewDiscsData",
      "getRankData",
      "getRankListData",
      "getCurrentSong",
      "getLikeSongs"
    ]),
    prev() {},
    next() {},
    plSong(id, item) {
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
        this.$store.dispatch("rankModule/getCurrentSong", this.currentSong);
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
    plSongSheet(item) {
      this.$store.dispatch("rankModule/getCurrentSong", item);
      for (let i = 0; i < item.length; i++) {
        const element2 = item[i];
        let id = element2.id;
        this.axios({
          method: "GET",
          url: "http://49.234.68.133:3000/song/url?id=" + id
        }).then(result => {
          this.$store.dispatch(
            "rankModule/getSongsUrl",
            result.data.data[0].url
          );
          //弹出后1秒关闭
          let timer = setTimeout(() => {
            this.$store.dispatch("rankModule/changeisShow", false);
            clearTimeout(timer);
          }, 5000);

          this.$store.dispatch("rankModule/getSongsData", element2);

          this.$store.dispatch("rankModule/getSongsId", id);

          // window.localStorage.setItem("playSong", JSON.stringify(element2));

          this.$store.commit("rankModule/changeisPlay", true);

          //控制底部播放器的弹出
          this.$store.dispatch("rankModule/changeisShow", true);
          // 加入播放列表 需要过滤重复
          // 1.0
          //判断有没有数据，如果有执行下面语句，如果没有的话在else里面push进去
          if (this.currentSong.length) {
            for (let j = 0; j < this.currentSong.length; j++) {
              const element = this.currentSong[j];
              if (id == element.id) {
                break; //终止本次for循环  如果用return的话下麦呢的代码也不执行了
              }
              //这里是当循环到最后一项的时候（id和数组每一项对比），还是没找到相等id的时候push进去
              if (j == this.currentSong.length - 1) {
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
      }
    }
  },
  created() {
    this.axios({
      method: "GET",
      url: "http://49.234.68.133:3000/personalized"
    })
      .then(result => {
        result.data.result.forEach(e => {
          let playCountTotal = e.playCount;

          e.playCount =
            playCountTotal >= 10000
              ? (playCountTotal / 10000).toFixed(0) + "万"
              : playCountTotal;
        });
        // console.log("result ==> ", result);
        // console.log("result.data.result ==> ", result.data.result);

        this.$store
          .dispatch("rankModule/getRecommendData", result.data.result)
          .then(() => {});
      })
      .catch(err => {
        // console.log(err);
      });

    this.axios({
      method: "GET",
      url: "http://49.234.68.133:3000/top/album"
    })
      .then(res => {
        this.$store.dispatch("rankModule/getNewDiscsData", res.data.albums);
      })
      .catch(err => {
        // console.log(err);
      });
  },
  components: {
    Footer
  },
  mounted() {
    // console.log("ssssssss", this.recommendId);

    this.axios({
      method: "GET",
      url: "http://49.234.68.133:3000/banner"
    }).then(res => {
      // console.log("res", res);
      this.banners = res.data.banners;
    });
    this.axios({
      method: "GET",
      url: "http://49.234.68.133:3000/toplist"
    })
      .then(result => {
        // console.log("rankData-->result", result);
        this.$store.dispatch("rankModule/getRankData", result.data.list);
        // this.$store.dispatch("rankModule/getRecommendId", result.data.list);
        let recommendId1 = result.data.list[0].id;
        // console.log("recommendId", this.recommendId);
        let recommendId2 = result.data.list[1].id;
        // console.log("recommendId", this.recommendId);
        let recommendId3 = result.data.list[2].id;
        // console.log("recommendId", this.recommendId);
        this.axios({
          method: "GET",
          url: "http://49.234.68.133:3000/playlist/detail?id=" + recommendId1
        }).then(result => {
          // console.log("res", result);
          // console.log("result=====", result.data.playlist.tracks.slice(0,10));
          this.reList1 = result.data.playlist.tracks.slice(0, 10);
          // this.$store.dispatch(
          //   "rankModule/getRankListData",
          //   result.data.playlist.tracks
          // );
        });
        this.axios({
          method: "GET",
          url: "http://49.234.68.133:3000/playlist/detail?id=" + recommendId2
        }).then(result => {
          // console.log("res", result);
          // console.log("result=====", result.data.playlist.tracks);
          this.reList2 = result.data.playlist.tracks.slice(0, 10);
          // this.$store.dispatch(
          //   "rankModule/getRankListData",
          //   result.data.playlist.tracks
          // );
        });
        this.axios({
          method: "GET",
          url: "http://49.234.68.133:3000/playlist/detail?id=" + recommendId3
        }).then(result => {
          // console.log("res", result);
          // console.log("result=====", result.data.playlist.tracks);
          this.reList3 = result.data.playlist.tracks.slice(0, 10);
          // this.$store.dispatch(
          //   "rankModule/getRankListData",
          //   result.data.playlist.tracks
          // );
        });
      })
      .catch(err => {
        // console.log(err);
      });
  }
};
</script>

<style lang="less" scoped>
.recommend {
  .swiper {
    width: 100%;
    height: 285px;
    background: url("../../assets/images/109951165108187064.jpg") no-repeat
      center center;
    background-size: cover;
    .container {
      width: 980px;
      background-color: #c20c0c;
      margin: 0 auto;
      height: 285px;
      .my-swipe {
        text-align: left;
        height: 285px;
        width: 730px;

        img {
          background-size: contain;
          height: 285px;
          width: 730px;
          margin-left: 0;
          border: 0;
        }
        .van-swipe-item {
          width: 730px;
        }
      }
      .right {
        position: relative;
        max-width: 250px;
        overflow: hidden;
        height: 285px;
        img {
          overflow: hidden;
        }
        p {
          position: absolute;
          color: aqua;
          bottom: 0;
          text-align: center;
          color: #8d8d8d;
          font-size: 12px;
          margin: 10px auto;
          text-indent: 14px;
        }
      }
    }
    .content {
      width: 978px;
      min-height: 700px;
      margin: 0 auto;
      background-color: #fff;
      border: 1px solid #d3d3d3;
      border-width: 0 1px;
      margin: 0 auto;
      .left {
        margin-right: 250px;
        background-color: #fff;
        .left-c {
          padding: 20px 20px 40px;
          border-right: 1px solid #ccc;
          .list {
            // height: 33px;
            padding: 0 10px 0 0px;
            box-sizing: border-box;
            border-bottom: 2px solid #c10d0c;
            width: 100%;
            height: 33px;
            .round {
              width: 33px;
              height: 33px;
              background: url("../../assets/images/index.png") no-repeat 0
                9999px;
              background-position: -225px -154px;
            }
            .hot-recommend {
              line-height: 33px;
              color: #333;
              font-size: 20px;
            }
            .ul {
              line-height: 33px;
              ul {
                margin-left: 20px;
                li {
                  float: left;
                  font-size: 12px;
                  color: #666;
                  margin-right: 12px;
                }
              }
            }
            .morebox {
              .more {
                line-height: 33px;
                font-size: 12px;
                color: #666;
              }
              .icon {
                width: 12px;
                height: 12px;
                margin-top: 9px;
                margin-left: 4px;
                background: url("../../assets/images/index.png") no-repeat 0
                  9999px;
                background-position: 0 -240px;
              }
            }
          }
          .list-recommend {
            .ul {
              list-style: none;
              margin: 0;
              padding: 0;
              margin: 20px 0 0 -42px;
              li {
                width: 140px;
                height: 204px;
                float: left;
                overflow: hidden;
                padding: 0 0 30px 42px;
                line-height: 1.4;
                list-style: none;
                .img {
                  position: relative;
                  img {
                    display: block;
                  }
                  .playnum {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 27px;
                    background-position: 0 -537px;
                    background-image: url("../../assets/images/coverall.png");
                    .listen-icon {
                      width: 14px;
                      height: 11px;
                      background-position: 0 -24px;
                      margin: 9px 5px 9px 10px;
                      display: inline-block;
                      background-image: url("../../assets/images/iconall.png");
                    }
                    .play-num {
                      margin: 7px 0 0 0;
                      color: #ccc;
                      font-size: 12px;
                    }
                    .play {
                      position: absolute;
                      right: 10px;
                      bottom: 5px;
                      width: 16px;
                      height: 17px;
                      background-position: 0 0;
                      background-image: url("../../assets/images/iconall.png");
                    }
                  }
                }
                .dec {
                  margin: 8px 0 3px;
                  font-size: 14px;
                  width: 100%;
                  a {
                    display: inline-block;
                    max-width: 100%;
                    vertical-align: middle;
                    color: #000;
                    text-align: left;
                  }
                }
              }
            }
            .disk {
              position: relative;
              zoom: 1;
              height: 186px;
              margin: 20px 0 37px;
              border: 1px solid #d3d3d3;
              background-color: #f5f5f5;
              .inner {
                height: 184px;
                padding-left: 16px;
                background: #f5f5f5;
                border: 1px solid #fff;
                .prev {
                  position: absolute;
                  top: 71px;
                  width: 17px;
                  height: 17px;
                  left: 4px;
                  background-image: url("../../assets/images/index.png");
                  background-position: -260px -75px;
                }
                .next {
                  position: absolute;
                  top: 71px;
                  width: 17px;
                  height: 17px;
                  right: 4px;
                  background-image: url("../../assets/images/index.png");
                  background-position: -300px -75px;
                }
                .lit {
                  float: left;
                  width: 645px;
                  height: 180px;
                  overflow: hidden;
                  position: relative;
                  zoom: 1;
                  ul {
                    position: absolute;
                    top: 0;
                    width: 645px;
                    margin: 28px 0 0 0;
                    li {
                      float: left;
                      display: inline;
                      width: 118px;
                      height: 150px;
                      margin-left: 11px;
                      background-position: -260px 100px;
                      background-image: url("../../assets/images/index.png");
                      .u-img {
                        margin-bottom: 7px;
                        width: 100px;
                        height: 100px;
                        position: relative;
                        display: block;
                        .j-img {
                          display: block;
                          width: 100%;
                          height: 100%;
                        }
                        .msk {
                          width: 118px;
                          height: 100px;
                          background-position: 0 -570px;
                          position: absolute;
                          top: 0;
                          left: 0;

                          background-image: url("../../assets/images/coverall.png");
                        }
                      }
                      .f-til {
                        width: 90%;
                        line-height: 18px;
                        font-size: 12px;
                        text-align: left;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        word-wrap: normal;
                        .s-fc0 {
                          color: #000;
                        }
                      }
                      .til {
                        .s-fc1 {
                          color: #666;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          .rank-list {
            height: 472px;
            margin-top: 20px;
            padding-left: 1px;
            background-image: url("../../assets/images/index_bill.png");
            .rank-l {
              float: left;
              width: 228px;
              display: block;
              .top {
                height: 100px;
                padding: 20px 0 0 19px;
                display: block;
                .img {
                  display: inline;
                  width: 80px;
                  height: 80px;
                  position: relative;
                  display: block;
                  img {
                    border: 0;
                  }
                  .msk {
                    text-decoration: none;
                    color: #333;
                    background-position: -145px -57px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-image: url("../../assets/images/coverall.png?bd71801d215e8ec5ea18116be62bd370");
                  }
                }
                .tit {
                  float: left;
                  width: 116px;
                  margin: 6px 0 0 10px;
                  a {
                    text-decoration: none;
                    color: #333;
                    .f-tit {
                      width: 100%;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      word-wrap: normal;
                      font-size: 14px;
                      text-align: left;
                    }
                  }
                  .btn {
                    margin-top: 10px;
                    .btn-1 {
                      display: block;
                      float: left;
                      width: 22px;
                      height: 22px;
                      margin-right: 10px;
                      text-indent: -9999px;
                    }
                    .btn-a {
                      background-position: -267px -205px;
                      background-image: url("../../assets/images/index.png");
                    }
                    .btn-b {
                      background-position: -300px -205px;
                      background-image: url("../../assets/images/index.png");
                    }
                  }
                }
              }
              dd {
                display: block;
                // margin-inline-start: 40px;
                ol {
                  height: 319px;
                  margin-left: 50px;
                  line-height: 32px;
                  display: block;
                  li {
                    position: relative;
                    height: 32px;
                    list-style: none;
                    text-align: left;
                    .numb {
                      float: left;
                      position: relative;
                      width: 35px;
                      height: 32px;
                      margin-left: -35px;
                      text-align: center;
                      color: #666;
                      font-size: 16px;
                    }

                    .numb.active {
                      color: #c10d0c;
                    }
                    .pl {
                      float: left;
                      width: 170px;
                      height: 32px;
                      color: #000;
                      font-size: 12px;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      word-wrap: normal;
                    }
                    .oper {
                      // float: right;
                      position: absolute;
                      right: 0;
                      width: 82px;
                      margin-top: 7px;
                      display: none;
                      a {
                        float: left;
                        width: 17px;
                        height: 17px;
                        margin-right: 10px;
                      }
                      .s-bg {
                        background: url("../../assets/images/index.png")
                          no-repeat 0 9999px;
                      }
                      .s-bg-11 {
                        background-position: -267px -268px;
                      }
                      .u-icn {
                        background: url("../../assets/images/icon.png")
                          no-repeat 0 9999px;
                      }
                      .u-icn-81 {
                        margin: 2px 6px 0 0;
                        background-position: 0 -700px;
                      }
                      .s-bg-12 {
                        background-position: -297px -268px;
                      }
                    }
                  }
                  li:hover .oper {
                    display: block;
                  }
                  li:hover .pl {
                    width: 98px;
                  }
                }
                .more {
                  clear: both;
                  height: 32px;
                  margin-right: 32px;
                  text-align: right;
                  line-height: 32px;
                  .s-fc {
                    color: #000;
                    font-size: 12px;
                  }
                }
              }
            }
          }
        }
      }
      .right {
        position: relative;
        width: 250px;
        zoom: 1;
        .m-info {
          height: 165px;
          padding-top: 20px;
          background-position: 0 -270px;
          background-image: url("../../assets/images/index.png");
          .f-cb {
            .head {
              float: left;
              width: 80px;
              height: 80px;
              margin-left: 20px;
              padding: 2px;
              background: #fff;
              border: 1px solid #dadada;
              position: relative;
              zoom: 1;
              img {
                display: block;
              }
            }
            .info {
              float: left;
              width: 115px;
              margin-left: 18px;
              padding-top: 3px;
              h4 {
                font-size: 100%;
                overflow: hidden;
                .nn {
                  width: auto;
                  max-width: 100%;
                  vertical-align: middle;
                  max-width: 90px !important;
                  float: left;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  word-wrap: normal;
                  font-size: 14px;
                  display: inline-block;
                  color: #333;
                }
                .vip {
                  width: 16px;
                  height: 16px;
                  background-image: url("../../assets/images/l81wKgnHwl3n0ayI7iVVXA==_109951163322560971.png");
                  background-size: 100% 100%;
                  background-repeat: no-repeat;
                  background-position: center;
                  float: left;
                  margin-left: 5px;
                }
              }
              p {
                width: 100%;
                margin-top: 5px;
                text-align: left;
                .u-lv {
                  display: inline-block;
                  height: 17px;
                  overflow: hidden;
                  padding-left: 25px;
                  line-height: 18px;
                  color: #999;
                  font-weight: bold;
                  font-style: italic;
                  font-size: 12px;
                  background-position: -130px -64px;
                  vertical-align: middle;
                  background-image: url("../../assets/images/icon2.png");
                  i {
                    width: 8px;
                    height: 17px;
                    background-position: -192px -64px;
                    float: right;
                    display: inline-block;
                    overflow: hidden;
                    vertical-align: middle;
                    background-image: url("../../assets/images/icon2.png");
                  }
                }
              }
              .btnwrap {
                margin-top: 15px;
                position: relative;
                text-align: left;
                zoom: 1;
                .u-btn {
                  color: #bebebe;
                  background-position: right -346px;
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
                    color: #333;
                    background-position: 0 -305px;
                    padding: 0 15px 0 20px;
                    pointer-events: none;
                    display: inline-block;
                    height: 31px;
                    line-height: 31px;
                    overflow: hidden;
                    font-size: 12px;
                    vertical-align: top;
                    font-style: normal;
                    text-align: center;
                    cursor: pointer;
                    background-image: url("../../assets/images/button2.png");
                  }
                }
              }
            }
          }
          .dny {
            margin: 22px 0 0 20px;
            li {
              float: left;
              height: 40px;
              padding: 0 18px;
              border-right: 1px solid #e4e4e4;
              strong {
                display: block;
                font-size: 20px;
                font-weight: normal;
                text-align: left;
              }
              span {
                margin-left: 2px;
                font-size: 12px;
              }
              a {
                display: block;
                color: #666;
              }
            }
            .fst {
              padding-left: 0;
            }
            .lst {
              padding-right: 0;
              border-right: none;
            }
          }
          .s-fc {
            color: #666;
          }
        }
        .n-singer {
          margin-top: 15px;
          .h3 {
            position: relative;
            zoom: 1;
            height: 23px;
            margin: 0 20px;
            border-bottom: 1px solid #ccc;
            color: #333;
            .f-fl {
              float: left;
              color: #333;
              font-size: 12px;
            }
            .more {
              float: right;
              font-weight: normal;
              color: #666;
              font-size: 12px;
            }
          }
          .n-enter {
            margin: 6px 0 14px 20px;
            li {
              margin-top: 14px;
              float: left;
              width: 210px;
              height: 62px;
              background: #fafafa;
              .itm {
                float: left;
                width: 210px;
                height: 62px;
                background: #fafafa;
                color: #333;
                .head {
                  float: left;
                  width: 62px;
                  height: 62px;
                }
                .ifo {
                  float: left;
                  width: 133px;
                  height: 60px;
                  padding-left: 14px;
                  border: 1px solid #e9e9e9;
                  border-left: none;
                  text-align: left;
                  h4 {
                    margin-top: 8px;
                    .nm {
                      width: 90%;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      word-wrap: normal;
                      font-size: 14px;
                      display: inline-block;
                    }
                  }
                  p {
                    width: 90%;
                    margin-top: 8px;
                    color: #666;
                    font-size: 12px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    word-wrap: normal;
                  }
                }
              }
            }
          }
          .u-b {
            margin-left: 2px;
            border-radius: 4px;
            color: #333;
            background-position: right -100px;
            padding: 0 5px 0 0;
            white-space: nowrap;
            vertical-align: top;
            text-align: center;
            cursor: pointer;
            height: 31px;
            line-height: 31px;
            overflow: hidden;
            display: inline-block;
            background-image: url("../../assets/images/button2.png");
            i {
              width: 170px;
              font-weight: bold;
              color: #333;
              background-position: 0 -59px;
              padding: 0 15px 0 20px;
              pointer-events: none;
              display: inline-block;
              height: 31px;
              font-size: 12px;
              font-style: normal;
              line-height: 31px;
              overflow: hidden;
              vertical-align: top;
              text-align: center;
              cursor: pointer;
              background-image: url("../../assets/images/button2.png");
            }
          }
        }
        .n-zhubo {
          margin-top: 30px;
          .h3 {
            position: relative;
            height: 23px;
            margin: 0 20px;
            border-bottom: 1px solid #ccc;
            color: #333;
            font-size: 12px;
            text-align: left;
          }
          .n-hotzhubo {
            margin: 20px 0 0 20px;
            li {
              float: left;
              width: 210px;
              height: 50px;
              .cver {
                float: left;
                width: 40px;
                margin-right: 10px;
                color: #333;
              }
              .info {
                float: left;
                width: 160px;
                line-height: 21px;
                p {
                  width: 100%;
                  text-align: left;
                  font-size: 12px;
                  color: #666;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  word-wrap: normal;
                  .nm-ic {
                    display: inline-block;
                    zoom: 1;
                    color: #000;
                    max-width: 88%;
                    vertical-align: middle;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    word-wrap: normal;
                  }
                  .u-ic {
                    margin-top: -1px;
                    width: 11px;
                    height: 13px;
                    background-position: 0 1px;
                    font-size: 100%;
                    font-style: normal;
                    display: inline-block;
                    overflow: hidden;
                    vertical-align: middle;
                    background-image: url("../../assets/images/icon.png");
                  }
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