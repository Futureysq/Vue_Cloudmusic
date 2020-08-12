<template>
  <div class="register" v-show="isShow3">
    <div class="title">
      登录
      <div class="close fr el-icon-close" @click="close"></div>
    </div>

    <div class="logo-box">
      <!-- <div class="logo"></div> -->
      <!-- <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload> -->
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
        <div style="margin: 10px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
      <div class="footer">
        <div class="txt">
          没有账号？
          <router-link class="login-text" to="register">注册</router-link>
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
      username: "",
      password: "",
      // imageUrl: ""
    };
  },
  //计算属性
  computed: {
    ...mapState(["isShow3"])
  },

  methods: {
    ...mapMutations(["changeisShow3"]),
    onSubmit(params) {
      let _this = this;
      //判断是否传参，修改返回路径
      let path =
        "path" in _this.$route.query ? _this.$route.query.path : "/recommend";
      this.$axios.get("login", { params }).then(res => {
        // 请求数据成功后提示
        if (res.data == "200") {
          Toast({
            message: "登陆成功",
            onOpened() {
              // 登陆成功用户名存入vuex
              _this.$store.state.username = _this.username;
              // 回调跳转路由
              _this.$router.push(path);
            }
          });
        } else {
          Toast("登陆失败");
        }
      });

      // this.axios
      //   .post("http://localhost:3000/login/cellphone?", {
      //     params: {
      //       phone: 13169793244,
      //       password: "123"
      //     }
      //   })
      //   .then(res => {
      //     console.log(res);
      //   });
    },
    close() {
      let path =
        "path" in this.$route.query ? this.$route.query.path : "/recommend";
      this.$router.push(path);
      this.$store.commit("rankModule/changeisShow3", false);
    },
    // handleAvatarSuccess(res, file) {
    //   this.imageUrl = URL.createObjectURL(file.raw);
    // },
    // beforeAvatarUpload(file) {
    //   const isJPG = file.type === "image/jpeg";
    //   const isLt2M = file.size / 1024 / 1024 < 2;

    //   if (!isJPG) {
    //     this.$message.error("上传头像图片只能是 JPG 格式!");
    //   }
    //   if (!isLt2M) {
    //     this.$message.error("上传头像图片大小不能超过 2MB!");
    //   }
    //   return isJPG && isLt2M;
    // }
  }
};
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
    background-size: cover;
    .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409eff;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 150px;
      height: 150px;
      line-height: 150px;
      text-align: center;
    }
    .avatar {
      width: 150px;
      height: 150px;
      display: block;
    }
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
    .van-field {
      padding: 5px 8px;
    }
    .van-button {
      height: 34px;
    }
  }
  .footer {
    color: #ddd;
  }
  .rgister-c-fz {
    font-size: 18px;
  }
  .txt {
    color: #666;
    font-size: 14px;
  }
  .login-text {
    color: rgb(95, 97, 223);
    font-size: 14px;
  }
}
</style>