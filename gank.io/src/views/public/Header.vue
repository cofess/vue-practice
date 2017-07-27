<style scoped>
    .container {
        width: 90%;
        margin: 0 auto;
    }
    .layout{
        background: #f5f7f9;
        min-height: 100vh;
    }
    .layout-logo{
        width: 100px;
        height: 60px;
        line-height:60px;
        color:#fff;
        font-size:36px;
        /*background: #5b6270;
        border-radius: 3px;*/
        float: left;
        position: relative;
        /*left: 20px;*/
    }
    .layout-nav{
        position: relative;
        float: right;
    }
    .layout-assistant{
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }
    .layout-breadcrumb{
        padding: 10px 0;
    }
    .layout-content{
        min-height: 80vh;
        padding: 15px 0;
        overflow: hidden;
        background: #fff;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 20px 0;
        color: #9ea7b4;
    }
</style>
<template>
    <header>
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="container">
                <div class="layout-logo"><Icon type="ios-infinite"></Icon></div>
                <div class="layout-nav">
                    <Menu-item name="1" key="/parent/sub">
                        <router-link to="/front">
                            <Icon type="code"></Icon>
                            前端
                        </router-link>
                    </Menu-item>
                    <Menu-item key="2" name="2">
                        <router-link to="/android">
                            <Icon type="social-android"></Icon>
                            Android
                        </router-link>
                    </Menu-item>
                    <Menu-item key="3" name="3">
                        <router-link to="/ios">
                            <Icon type="social-apple"></Icon>
                            iOS
                        </router-link>
                    </Menu-item>
                    <Menu-item key="4" name="4">
                        <router-link to="/video">
                            <Icon type="ios-videocam"></Icon>
                            休闲视频
                        </router-link>
                    </Menu-item>
                    <Menu-item key="5" name="5">
                        <router-link to="/source">
                            <Icon type="flame"></Icon>
                            拓展资源
                        </router-link>
                    </Menu-item>
                    <Menu-item key="6" name="6">
                        <router-link to="/media">
                            <Icon type="images"></Icon>
                            妹纸
                        </router-link>
                    </Menu-item>
                </div>
            </div>
        </Menu>
        <router-view></router-view>
    </header>
</template>
<script>
    export default{

    }
</script>