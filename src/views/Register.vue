<template>
  <div class="register">
    <div class="title">
      注册
      <div class="close fr el-icon-close" @click="close"></div>
    </div>
    <div class="logo-box">
      <!-- <div class="logo"></div> -->
    </div>
    <div class="list">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="password2"
          type="password"
          name="验证密码"
          label="验证密码"
          placeholder="验证密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
      <div class="footer">
        <div class="txt">已有账号？<router-link class="login-text" to="login">登录</router-link></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      username: "",
      password: "",
      password2: ""
    };
  },
  methods: {

      onSubmit(params) {
        let _this = this;
        this.$axios.get("register",{params})
        .then((res) =>{
          // console.log(res);
          //请求数据成功后提示
          if(res.data == "200") {
            Toast({
              message:"注册成功",
              onOpened(){
                //回调跳转路由
                _this.$router.push('/login')
              }
            })
          }else{
            Toast("注册失败")
          }
        })
      },
      close() {
      let path =
        "path" in this.$route.query ? this.$route.query.path : "/recommend";
      this.$router.push(path);
      this.$store.commit("rankModule/changeisShow3", false);
    }
     
  },
}
</script>

<style lang="less" scoped>
.register {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 530px;
  min-height: 332px;
  margin-left: -265px;
  margin-top: -250px;
  z-index: 1000;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.8);
  .title {
    height: 38px;
    background-color: #2d2d2d;
    text-align: left;
    color: #fff;
    line-height: 38px;
    font-weight: bold;
    font-size: 14px;
    padding-left: 18px;
    border-radius: 4px 4px 0 0;
    .close {
      padding-right: 20px;
      line-height: 38px;
    }
  }
  .logo-box {
    height: 100px;
    position: relative;
    // background: url("../assets/images/register_bg.png");
    // background-size: cover;
    .logo {
      width: 100px;
      height: 100px;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      background: url("http://p1.music.126.net/pa6u4YeJfWATR_1goouoSQ==/109951163253039183.jpg?param=180y180");
      background-size: cover;
      // background-color: antiquewhite;
      border-radius: 50%;
    }
  }
  .list {
    width: 300px;
    margin: 0 auto;
    .van-field{
      padding: 5px 8px
    }
    .van-button{
      height: 34px;
    }
  }
  .footer {
    color: #ddd;
  }
  .rgister-c-fz {
    font-size: 18px;
  }
  .txt{
    color: #666;
    font-size: 14px;
  }
  .login-text {
    color: rgb(95, 97, 223);
    font-size: 14px;
  }
}
</style>