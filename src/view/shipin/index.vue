<style scoped lang='stylus'>
    .jingxuan{
        overflow-y:scroll;
        background-color:#e1e1e1;
        .box{
            background-color:#fff;
            padding:10px;
            margin-bottom: 10px;
            header{
                height:58px;
                padding:15px 16px;
                .touxiang{
                    height: 30px;
                    width:30px;
                    border-radius:50%;
                    overflow:hidden;
                    img{
                        width: 100%;
                    }
                }
                .username{
                    height: 30px;
                    line-height: 30px;
                    padding-left:15px;
                }
                .jubao{
                    border: 1px solid #ccc;
                    color:#ccc;
                    font-size: 12px;
                    border-radius:3px;
                    margin-top: 7px;
                    margin-right: 7px;
                }
            }
            .title{
                padding:0 16px 10px;
                color:#4e4e4e;
                font-size: 16px;
            }
            .main{
                position: relative;
            }
            footer{
                padding:10px;
                div{
                    overflow:hidden;
                    span{
                        float: left;
                        height:20px;
                        line-height: 20px;
                        padding:0 6px;
                    }
                }
                .like{
                    i{
                        display:inline-block;
                        width: 22px;
                        height:20px;
                        background:url('../../assets/jingling.png') no-repeat;
                        background-position:-24.5px -100px;
                        background-size:250px auto;
                        float: left;
                    }
                }
                .dislike{
                    i{
                        display:inline-block;
                        width: 22px;
                        height:20px;
                        background:url('../../assets/jingling.png') no-repeat;
                        background-position:-74.5px -100.5px;
                        background-size:250px auto;
                        float: left;
                    }
                }
                .recommend{
                    i{
                        display:inline-block;
                        width: 22px;
                        height:20px;
                        background:url('../../assets/jingling.png') no-repeat;
                        background-position:-200px -100px;
                        background-size:250px auto;
                        float: left;
                    }
                }
            }
        }
    }
</style>
<template>
    <div class="jingxuan" v-height="50">
        <div class="box" v-for="item in videoList">
            <header class="ovh">
                <div class="touxiang fl">
                    <img src="http://image.uc.cn/s/uae/g/0q/avatar/36.png" alt="">
                </div>
                <div class="username fl">迷路的汽水</div>
                <div class="jubao fr">举报</div>
            </header>
            <div class="title">{{item.title}}</div>
            <div class="main" >
                <VuiVideo :item="item"></VuiVideo>
            </div>
            <footer class="ovh">
                <div class="like fl">
                    <i></i>
                    <span>32</span>
                </div>
                <div class="dislike fl">
                    <i></i>
                    <span>321</span>
                </div>
                <div class="recommend fr">
                    <i></i>
                    <span>32</span>
                </div>
            </footer>
        </div>
    </div>
</template>
<script>
    import VuiVideo from "../../components/VuiVideo.vue"
    export default{
        data(){
            return {
                videoList:[
                    {
                        title:"TimmyPaskhin & AnVea - Believe 1080p -- 欧美群星",
                        url:"http://hc.yinyuetai.com/uploads/videos/common/6BCD01628A4771490E37DDCFD4FEE972.mp4?sc=8ccf33f402a1a479&br=752&vid=3186816&aid=4539&area=US&vst=0",
                        id:"v_1",
                        cur:"播放",
                        volume:"0.1"
                    },
                    {
                        title:"欢喧(Joyous Shout) -- 冰霜之泪",
                        url:"http://hc.yinyuetai.com/uploads/videos/common/CA8A016285146B4CDBA45BEAD7B43B98.mp4?sc=b05e550b402a0e57&br=776&vid=3186161&aid=43866&area=HT&vst=0",
                        id:"v_2",
                        cur:"播放",
                        volume:"0.1"
                    },
                    {
                        title:"小猪佩奇之虚假姐妹情cut -- 动漫专属",
                        url:"http://hc.yinyuetai.com/uploads/videos/common/DE68015FA3DE99C6CBAC8818486F6449.mp4?sc=739fd58617067cb7&br=449&vid=3086003&aid=13743&area=ACG&vst=3",
                        id:"v_3",
                        cur:"播放",
                        volume:"0.1"
                    },
                ]
            }
        },
        components:{
            VuiVideo
        }
    }
</script>