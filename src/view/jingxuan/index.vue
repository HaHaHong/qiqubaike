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

                img{
                    width:100%;
                }
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
        <div class="box" v-for="item in mapList">
            <header class="ovh">
                <div class="touxiang fl">
                    <img :src="item.avatar" alt="">
                </div>
                <div class="username fl">{{item.user_name}}</div>
                <div class="jubao fr">举报</div>
            </header>
            <div class="title" v-if="item.title">{{item.title}}</div>
            <div class="main" v-for="child in item.media_data">
                <gif v-if="child.format == 'GIF'" :child="child"></gif>
                <png v-if="child.format == 'PNG'" :child="child"></png>
                <jpeg v-if="child.format == 'JPEG'" :child="child"></jpeg>
            </div>
            <footer class="ovh">
                <div class="like fl">
                    <i></i>
                    <span>{{item.like_start + item._incrs.like}}</span>
                </div>
                <div class="dislike fl">
                    <i></i>
                    <span>{{item.dislike_start + item._incrs.dislike}}</span>
                </div>
                <div class="recommend fr">
                    <i></i>
                    <span>{{item.comment_total}}</span>
                </div>
            </footer>
        </div>
    </div>
</template>
<script>
    import gif from "../../components/gif.vue";
    import png from "../../components/png.vue";
    import jpeg from "../../components/jpeg.vue";
    export default{
        data(){
            return {
                mapList:[]
            }
        },
        created(){
            var self = this;
            this.axios.get("../../../static/data.json").then(data=>{
                self.mapList = data.data.mapList;
                console.log(self.mapList);
            })
        },
        components:{
            gif,
            png,
            jpeg
        }
    }
</script>