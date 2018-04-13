<style scoped lang='stylus'>
    div{
        img{
            width:100%;
        }
    }
</style>
<template>
    <div>
        <img v-lazy="child.wifi_img_url" alt="">
    </div>
</template>
<script>
    export default{
        props:["child"]
    }
</script>