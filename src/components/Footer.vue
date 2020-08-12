<template>
  <div>
    <div class="footer">
      <div class="ft">
        <div class="wrap clearfix">
          <div class="copy">
            <p class="link">
              <a href class="item">服务条款</a>
              <span class="line">|</span>
              <a href class="item">隐私政策</a>
              <span class="line">|</span>
              <a href class="item">儿童隐私政策</a>
              <span class="line">|</span>
              <a href class="item">版权投诉指引</a>
              <span class="line">|</span>
              <a href class="item">意见反馈</a>
              <span class="line">|</span>
            </p>
            <p class="right s-fc">
              <span class="s span">网易公司版权所有©1997-2020</span>
              <span class="span">杭州乐读科技有限公司运营：</span>
              <a href class="alink">浙网文[2018]3506-263号</a>
            </p>
            <p class="contact s-fc">
              <span class="s span">违法和不良信息举报电话：0571-89853516</span>
              <span class="span">举报邮箱：</span>
              <a href class="alink">ncm5990@163.com</a>
            </p>
            <p class="right s-fc">
              <span class="s span">粤B2-20090191-18</span>
              <a href class="alink">工业和信息化部备案管理系统网站</a>
            </p>
          </div>
          <ul class="enter fr">
            <li class="li">
              <a href class="logo as"></a>
              <span class="tt t1"></span>
            </li>
            <li class="li">
              <a href class="logo ur"></a>
              <span class="tt t2"></span>
            </li>
            <li class="li">
              <a href class="logo dm"></a>
              <span class="tt t3"></span>
            </li>
            <li class="li">
              <a href class="logo zs"></a>
              <span class="tt t4"></span>
            </li>
            <li class="li">
              <a href class="logo vj"></a>
              <span class="tt t5"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <a href="#" class="m-back" v-show="isShowBack" @click="backTop"></a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowBack: false,
      scrollTop:0
    };
  },
  methods: {
    // window.scroll = function
    handleScroll() {
      this.scrollTop=(document.body.scrollTop||document.documentElement.scrollTop);
      // console.log('scrollTop',this.scrollTop);
      if(this.scrollTop > 400){
        this.isShowBack = true;
      }else{
        this.isShowBack = false;
      }
      
    },
    //点击回到顶部
    backTop() {
      this.scrollTop = 0;
    }
  },
  mounted() {
    //监听页面滚动
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="less" scoped>
.footer {
  position: relative;
  height: 172px;
  overflow: hidden;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;
  .ft {
    width: 980px;
    margin: 0 auto;
    .wrap {
      .copy {
        float: left;
        width: 520px;
        padding-top: 15px;
        text-align: left;
        line-height: 24px;
        .link {
          .item {
            color: #999;
            cursor: pointer;
            text-decoration: none;
            font-size: 12px;
          }
          .item:hover {
            text-decoration: underline;
            text-decoration: #333;
          }
          .line {
            margin: 0 8px 0 10px;
            color: #c2c2c2;
            font-size: 12px;
          }
        }
        .s-fc {
          color: #666;
          font-size: 12px;
          .s {
            margin-right: 14px;
          }
          .span {
          }
          .alink {
            color: #666;
            font-size: 12px;
          }
          .alink:hover {
            text-decoration: underline;
            text-decoration: #333;
          }
        }
        .contact {
          .s {
          }
          .span {
          }
          .alink {
          }
        }
      }
      .enter {
        width: 420px;
        margin-top: 33px;
        .li {
          float: left;
          width: 60px;
          height: 70px;
          margin-left: 30px;
          text-align: center;
          color: #666;
          .logo {
            display: block;
            float: none;
            width: 50px;
            height: 45px;
            margin: 0 auto;
          }
          .as {
            background-position: -63px -456.5px;
            background-image: url("../assets/images/foot_enter_new.png");
            background-size: 113px 552px;
          }
          .ur {
            background-position: -63px -101px;
            background-image: url("../assets/images/foot_enter_new.png");
            background-size: 113px 552px;
          }
          .dm {
            background-position: 0 0;
            background-image: url("../assets/images/foot_enter_new.png");
            background-size: 113px 552px;
          }
          .zs {
            background-position: -60px -50px;
            background-image: url("../assets/images/foot_enter_new.png");
            background-size: 110px 552px;
          }
          .vj {
            background-position: 0 -101px;
            background-image: url("../assets/images/foot_enter_new.png");
            background-size: 113px 552px;
          }
          .tt {
            display: inline-block;
            margin: 5px 5px 0;
            width: 52px;
            height: 14px;
          }
          .t1 {
            background-position: 0 -108px;
            margin-left: -6px;
            width: 72px;
            background-image: url("../assets/images/foot_enter_tt.png");
            background-size: 180px 139px;
          }
          .t2 {
            background-position: -1px -91px;
            background-image: url("../assets/images/foot_enter_tt.png");
            background-size: 180px 139px;
          }
          .t3 {
            background-position: 0 0;
            background-image: url("../assets/images/foot_enter_tt.png");
            background-size: 180px 139px;
          }
          .t4 {
            background-position: 0 -54px;
            background-image: url("../assets/images/foot_enter_tt.png");
            background-size: 180px 139px;
          }
          .t5 {
            background-position: -1px -72px;
            background-image: url("../assets/images/foot_enter_tt.png");
            background-size: 180px 139px;
          }
        }
        .li:nth-child(1) {
          margin-left: 0;
        }
      }
    }
  }
}
.m-back {
  display: block;
  position: fixed;
  _position: absolute;
  text-indent: -9999px;
  left: 50%;
  margin-left: 500px;
  bottom: 160px;
  width: 49px;
  height: 44px;
  background-position: -265px -47px;
  background-image: url("../assets/images/sprite.png");
}
</style>