export const actions = {
    getRecommendData(context,result) {
        context.commit("getRecommendData",result)
    },
    getNewDiscsData(context,res) {
        context.commit("getNewDiscsData",res)
    },
    getRankData(context,result) {
        context.commit("getRankData",result)
    },
    getRankListData(context,result) {
        context.commit("getRankListData",result)
    },
    getRankHeadData(context,result) {
        context.commit("getRankHeadData",result)
    },
    getSongsData(context,item) {
        context.commit("getSongsData",item)
    },
    getSongsUrl(context,item) {
        context.commit("getSongsUrl",item)
    },
    getSongsId(context,item) {
        context.commit("getSongsId",item)
    },
    getCurrentSong(context,item) {
        context.commit("getCurrentSong",item)
    },
    getLyric(context,item) {
        context.commit("getLyric",item)
    },
    getAllSongsList(context,item) {
        context.commit("getAllSongsList",item)
    },
    getIndex(context,item) {
        context.commit("getIndex",item)
    },
    getPlaySongs(context,item) {
        context.commit("getPlaySongs",item)
    },
    changeisShow(context,item) {
        context.commit("changeisShow",item)
    },
    getLikeSongs(context,item) {
        context.commit("getLikeSongs",item)
    },
    getRecommendId(context,item) {
        context.commit("getRecommendId",item)
    },
    getSingerSongs(context,item) {
        context.commit("getSingerSongs",item)
    },
    getSingerInfo(context,item) {
        context.commit("getSingerInfo",item)
    },
    getSingerIndexx(context,item) {
        context.commit("getSingerIndexx",item)
    },
}