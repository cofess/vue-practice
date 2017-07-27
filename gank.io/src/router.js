const routers = [{
    path: '/',
    meta: {
        title: '首页'
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
},{
    path: '/404',
    meta: {
        title: '404'
    },
    component: (resolve) => require(['./views/components/404.vue'], resolve)
},{
    path: '/front',
    meta: {
        title: '前端开发'
    },
    component: (resolve) => require(['./views/components/Gank.vue'], resolve)
},{
    path: '/android',
    meta: {
        title: 'Android'
    },
    component: (resolve) => require(['./views/components/Gank.vue'], resolve)
},{
    path: '/ios',
    meta: {
        title: 'IOS'
    },
    component: (resolve) => require(['./views/components/Gank.vue'], resolve)
},{
    path: '/video',
    meta: {
        title: '休闲视频'
    },
    component: (resolve) => require(['./views/components/Gank.vue'], resolve)
},{
    path: '/source',
    meta: {
        title: '拓展资源'
    },
    component: (resolve) => require(['./views/components/Gank.vue'], resolve)
},{
    path: '/media',
    meta: {
        title: '妹纸'
    },
    component: (resolve) => require(['./views/components/Gank.vue'], resolve)
}];
export default routers;