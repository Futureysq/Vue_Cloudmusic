export const state = {
    recommendData: [],

    showRecommendData: {
        start: 0,
        end: 8,
        data: [],

    },
    showRecommendData2: {
        start: 0,
        end: 4,
        data: [],
    },
    newDiscsData: [],
    showNewDiscsData: {
        start: 0,
        end: 5,
        data: [],
        start1: 6,
        end1: 11,
        data1: [],
        start2: 12,
        end2: 17,
        data2: [],
        start3: 18,
        end3: 23,
        data3: [],
    },
    //是否存在切换数据
    isHasData: true,
    // 1.0
    rankData: [],
    songSheet: [
        {
            coverImgUrl:''
        },
        {
            coverImgUrl:''
        },
        {
            coverImgUrl:''
        }
    ],
    teseData: [],
    mediaData: [],
    selectActive: false,
    rankListData: [],
    rankHeadData: [],

    songsData: {
        //写入空值是为了刷新的时候填入空值，这样不会报错
        al: {
            picUrl: '',
            name: ''
        },
        ar: [
            {
                name: ''
            }
        ]

    },
    songsUrl: [],
    isPlay: false,
    beginPlay: false,
    percent: null,
    progressWidth: null,
    maskWidth: null,
    width: 0,

    // 2.0
    songsId: null,
    currentSong: [],
    currentTime: null,
    duration: null,
    tr: false,
    isDown: false,
    lyric: null,
    lyrics: null,
    allSongsList: [],
    index: 0,
    mode: 0,
    playSongs: {},
    isShow: false,
    likeSongs: [
        {
            al: {
                picUrl: '',
                name: ''
            },
            ar: [
                {
                    name: ''
                }
            ]
        }
    ],
    isShow3: false,
    recommendId:[],
    singerSongs:[
        // {   
        //     al:{
        //         name:''
        //     },
        //     name:''
        // }
    ],
    singerInfo:[
        // {
        //     alias:[''],
        //     name:'',
        //     picUrl:''
        // },
    ],
    indexx:null
}