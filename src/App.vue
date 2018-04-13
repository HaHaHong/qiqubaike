<style scoped lang='stylus'>
    header{
        background-color:#ff4c00;
        ul{
            overflow:hidden;
            li{
                color:#333;
                float: left;
                width: 25%;
                text-align: center;
                height:50px;
                line-height: 50px;
            }
            li.cur{
                background-color:#ffcd00;
                font-weight: bold;
                color:#fff;
            }
        }
    }
</style>
<template>
  <div id="app">
    <header>
        <ul>
            <!-- <li v-for="item in tabNav" @click="routerGo(item.url)" :class="{cur:$route.name == item.title}">{{item.title}}</li> -->
            <v-touch tag="li" v-for="item in tabNav" v-on:tap="routerGo(item.url)" :class="{cur:$route.name == item.title}">{{item.title}}</v-touch>
        </ul>
    </header><!-- /header -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'App',
        data(){
            return {
                tabNav:[
                    {
                        title:"精选",
                        url:"/jingxuan"
                    },
                    {
                        title:"视频",
                        url:"/shipin"
                    },
                    {
                        title:"段子",
                        url:"/duanzi"
                    },
                    {
                        title:"我的",
                        url:"/wode"
                    }
                ]
            }
        },
        methods:{
            routerGo(url){
                this.$router.push({path:url});
            }
        }
    }
</script>

