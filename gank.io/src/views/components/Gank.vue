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
    <div class="layout">
        <app-header></app-header>
        <div class="layout-breadcrumb">
            <div class="container">
                <Breadcrumb>
                    <Breadcrumb-item href="#">首页</Breadcrumb-item>
                    <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                    <Breadcrumb-item>某应用</Breadcrumb-item>
                </Breadcrumb>
            </div>
        </div>
        <div class="layout-content">
            <div class="container">
                内容区域
            </div>
        </div>
        <app-footer></app-footer>
    </div>
</template>
<script>
import AppHeader from '../public/Header.vue'
import AppFooter from '../public/Footer.vue'
export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>