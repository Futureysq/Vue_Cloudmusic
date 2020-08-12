export default {
    path: "/find",
    name: "find",
    component: () => import("../views/Find.vue"),
    redirect:'/recommend',
    children: [
        {
            path: "/recommend",
            name: "recommend",
            component: () => import("../views/find/Recommend.vue")
        },
        {
            path: "/rank",
            name: "rank",
            component: () => import("../views/find/Rank.vue"),
            redirect:'/rank/19723756',
            children: [
                {
                    path: "/rank/:rankList",
                    name: "rankList",
                    component: () => import("../views/rank/rankList.vue"),
                },
            ]
        },
        {
            path: "/songSheet",
            name: "songSheet",
            component: () => import("../views/find/SongSheet.vue"),
        },
        {
            path: "/anchorStation",
            name: "anchorStation",
            component: () => import("../views/find/AnchorStation.vue"),
        },
        {
            path: "/singer",
            name: "singer",
            component: () => import("../views/find/Singer.vue"),
        },
        {
            path: "/newDiscs",
            name: "newDiscs",
            component: () => import("../views/find/NewDiscs.vue"),
        },
    ]
}