<style scoped lang='stylus'>
    div{
        img{
            width:100%;
        }

        .play{
            width: 50px;
            height:50px;
            position: absolute;
            right:0px;
            bottom:0px;
            top:0px;
            left:0px;
            margin:auto;
            background: url('../assets/jingling.png') no-repeat;
            background-position: -150px -125px;
            background-size:250px auto;
        }
    }
</style>
<template>
    <div>
        <!-- <p class="play" @click="play" v-show="isPlay"></p> -->
        <v-touch tag="p" class="play" v-on:tap="play" v-show="isPlay"></v-touch>
        <img v-lazy="child.wifi_img_url" alt="">
    </div>
</template>
<script>
    export default{
        props:["child"],
        data(){
            return{
                isPlay:true
            }
        },
        methods:{
            play(){
                this.isPlay = false;
                this.child.wifi_img_url = this.child.origin_img_url.origin_pic_url;
            }
        }
    }
</script>


