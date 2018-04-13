<style scoped lang='stylus'>
    div{
        video{
            width: 100%;
        }
        .control{
            overflow:hidden;
            .iSplay{
                width: 15%;
                height:40px;
                line-height: 40px;
                text-align: center;
            }
            .duration{
                width: 60%;
                height:2px;
                background:red;
                position: relative;
                top:20px;
                left:10px;
                .currentTime{
                    background:green;
                    height: 2px;
                    position: absolute;
                    top:0px;
                    left:0px;
                }
            }
            .volume{
                width: 20%;
                margin-top: 10px;
                input{
                    width: 100%;
                }
            }
            .time{
                text-align: center;
                font-size: 12px;
            }
        }
    }
</style>
<template>
    <div>
        <video :src="item.url" :id="item.id" @timeupdate="play"></video>
        <div class="control">
            <span class="iSplay fl" @click="iSplay">{{item.cur}}</span>
            <p class="duration fl" @click="gotime($event)">
                <span class="currentTime" :style="{width:currentTime/duration*100+'%'}"></span>
            </p>
            <div class="volume fr">
                <input type="range" min="0" max="1"  step="0.1" @change="changeVolume" v-model="item.volume" />
            </div>
            <div class="time">
                {{currentTime | zhuanhuan}}/{{duration | zhuanhuan}}
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:["item"],
        data(){
            return {
                duration:0,
                currentTime:0
            }
        },
        methods:{
            iSplay(){
                // 点击播放或暂停
                if(this.item.cur == "播放"){
                    $("#"+this.item.id)[0].play();
                    this.item.cur = "暂停";
                    // 设置总时间
                    this.duration = $("#"+this.item.id)[0].duration;
                }else if( this.item.cur == "暂停"){
                    $("#"+this.item.id)[0].pause();
                    this.item.cur = "播放";
                }
            },
            play(){
                // 播放事件改变的时候，设置播放器的当前时间
                this.currentTime =  $("#"+this.item.id)[0].currentTime;
            },
            gotime(event){
                //点击进度条，播放时间跳转
                var clickTime = event.offsetX / $(".duration").width();
                 $("#"+this.item.id)[0].currentTime = clickTime * $("#"+this.item.id)[0].duration;
            },
            changeVolume(){
                //改变声音的时候
                $("#"+this.item.id)[0].volume = this.item.volume;
            }
        },
        filters:{
            zhuanhuan(s){
                var t;
               if(s > -1){
                   var min = Math.floor(s/60) % 60;
                   var sec = s % 60;
                   if(min < 10){t += "0";}
                   t = min + ":";
                   if(sec < 10){t += "0";}
                   t += ~~sec;
               }
               return t;
            }
        }
    }
</script>