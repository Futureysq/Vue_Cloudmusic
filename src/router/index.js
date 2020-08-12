import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import find from "./find"
import client from "./client"
import friend from "./friend"
import my from "./my"
import musician from "./musician"
import shop from "./shop"
import songsDetails from "./songsDetails"
import login from "./login"
import register from "./register"
import singerSongs from "./singerSongs"
const routes = [
  {
    path:"/",
    redirect:"/recommend", //默认推荐页
  },
  find,
  client,
  friend,
  my,
  musician,
  shop,
  songsDetails,
  login,
  register,
  singerSongs
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
