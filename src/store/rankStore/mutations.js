export const mutations = {
    getRecommendData(state, result) {
        state.recommendData = result;
        // console.log('recommendData',state.recommendData);

        //截取8条数据
        state.showRecommendData.data = state.recommendData.slice(state.showRecommendData.start, state.showRecommendData.end);
        // console.log('state.showRecommendData.data', state.showRecommendData.data);

        //截取四条
        state.showRecommendData2.data = state.recommendData.slice(state.showRecommendData2.start, state.showRecommendData2.end);
        // console.log('state.showRecommendData2.data',state.showRecommendData2.data);
    },
    getNewDiscsData(state, res) {
        state.newDiscsData = res;
        // console.log('state.newDiscsData', state.newDiscsData)

        //截取5条数据
        state.showNewDiscsData.data = state.newDiscsData.slice(state.showNewDiscsData.start, state.showNewDiscsData.end);


        //截取5条数据
        state.showNewDiscsData.data1 = state.newDiscsData.slice(state.showNewDiscsData.start1, state.showNewDiscsData.end1);
        //截取5条数据
        state.showNewDiscsData.data2 = state.newDiscsData.slice(state.showNewDiscsData.start2, state.showNewDiscsData.end2);
        //截取5条数据
        state.showNewDiscsData.data3 = state.newDiscsData.slice(state.showNewDiscsData.start3, state.showNewDiscsData.end3);

        // console.log('state.showNewDiscsData.data', state.showNewDiscsData.data);
    },
    getRankData(state, result) {
        state.rankData = result;
        // console.log('rankData',state.rankData);

        let songSheet = state.rankData.slice(0, 3);
        // console.log('songSheet',songSheet);
        state.songSheet = songSheet;

        let teseData = state.rankData.slice(0, 4);
        // console.log('teseData',teseData);
        state.teseData = teseData;

        let mediaData = state.rankData.slice(4);
        // console.log('mediaData',mediaData);
        state.mediaData = mediaData;
    },
    changeActive(state, isActive) {
        state.selectActive = isActive;
    },

    getRankHeadData(state, result) {
        state.rankHeadData = result;
        // console.log('state.rankHeadData', state.rankHeadData);
    },
    getRankListData(state, result) {
        state.rankListData = result;
        // console.log('state.rankListData',state.rankListData);
    },

    getSongsData(state, item) {
        state.songsData = item;
        // console.log('state.songsData', state.songsData);
    },
    getSongsUrl(state, item) {
        state.songsUrl = item;
        // console.log('state.songsUrl', state.songsUrl);
    },

    changeisPlay(state, isActive) {
        state.isPlay = isActive;
        // console.log('state.isPlay',state.isPlay);
    },
    percentTime(state, result) {
        state.percent = result;
        // console.log('state.percent',state.percent);
    },
    getProgressWidth(state, result) {
        state.progressWidth = result;
        // console.log('state.progressWidth',state.progressWidth);
    },
    getMaskWidth(state, result) {
        state.maskWidth = result;
        // console.log('state.maskWidth',state.maskWidth);
    },
    // getWidth(state, result) {
    //     state.width = result;
    //     console.log('state.width',state.width)
    // },
    getSongsId(state, result) {
        state.songsId = result;
        // console.log('state.songsId', state.songsId)
    },
    getCurrentSong(state, result) {
        state.currentSong = result;
        // console.log('state.currentSong', state.currentSong)
    },
    getCurrenTime(state, result) {
        state.currentTime = result;
        // console.log('state.currentTime',state.currentTime)
    },
    // getDuration(state, result) {
    //     state.duration = result;
    //     // console.log('state.duration',state.duration)
    // },
    getTrue(state, result) {
        state.tr = result;
        // console.log('state.tr',state.tr)
    },
    changeisDown(state, result) {
        state.isDown = result;
        // console.log('state.isDown', state.isDown)
    },
    getLyric(state, result) {
        state.lyric = result;
        // console.log('state.lyric', state.lyric)
        // let lyrics = state.lyric.split("\n").map(item => {
        //     let regex = /\d{2}:\d{2}\.\d+/i;
        //         console.log('item',item[11]);
        //     if (item.search(regex) !== -1) {
        //         let time = item.match(regex)[0];
        //         let m = time.substr(0, 2);
        //         let s = time.substr(3, 2);
        //         let n = time.substr(5);
                
        //         return {
        //             time: Number(m) * 60 + Number(s) + Number(n),
        //             text: item.substr(11 ) || "",
        //         };
        //     } else {
        //         return {};
        //     }
        // });

        // 使用换行符分割歌词字符串
        let arr = state.lyric.split(/\n/)
        // console.log(arr)
        // 将分割后的歌词数组进行map遍历
        let lyricArr = arr.map(lrc => {
            // 使用正则表达式 组匹配匹配歌词中的时间与歌词 [(02):(12.000)] (歌词)
            // 第一组是分钟 第二组是秒数 第三组是歌词
            let reg = /\[(\d+):(\d+\.\d+)\](.+)/

            reg.test(lrc)
            // console.log('$1:', RegExp.$1, '$2:', RegExp.$2, '$3:', RegExp.$3)
            return {
                text: RegExp.$3,
                time: (RegExp.$1) * 60 + Number(RegExp.$2)
            }
        })

        state.lyrics = lyricArr
        // console.log('state.lyrics',state.lyrics);
        
    },
    getAllSongsList(state, result) {
        state.allSongsList = result;
        // console.log('state.allSongsList', state.allSongsList)
    },
    getIndex(state, result) {
        state.index = result;
        // console.log('state.index', state.index)
    },
    getMode(state, result) {
        state.mode = result;
        // console.log('state.mode', state.mode)
    },
    getPlaySongs(state, result) {
        state.playSongs = result;
        // console.log('state.playSongs', state.playSongs)
    },
    //修改点击播放歌曲是底部播放器弹出来
    changeisShow(state, result) {
        state.isShow = result;
        // console.log('state.isShow', state.isShow)
    },
    getLikeSongs(state, result) {
        state.likeSongs = result;
        // console.log('state.likeSongs', state.likeSongs)
    },
    changeisShow3(state, isActive) {
        state.isShow3 = isActive;
        // console.log('state.isShow3',state.isShow3);
    },
    getRecommendId(state, result) {
        state.recommendId = result;
        // console.log('state.recommendId',state.recommendId);
    },
    getSingerSongs(state, result) {
        state.singerSongs = result;
        console.log('state.singerSongs',state.singerSongs);
    },
    getSingerInfo(state, result) {
        state.singerInfo = result;
        // console.log('state.singerInfo',state.singerInfo);
    },
    getSingerIndexx(state, result) {
        state.indexx = result;
        // console.log('state.indexx',state.indexx);
    },
}