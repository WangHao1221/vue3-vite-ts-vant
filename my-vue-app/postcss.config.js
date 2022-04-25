module.exports = {
    "plugins": {
        "autoprefixer": {
            overrideBrowserslist: [
                "Android 4.1",
                "iOS 7.1",
                "Chrome > 31",
                "ff > 31",
                "ie >= 8",
            ], // 浏览器的兼容配置
            grid: true, // 为IE 启用网格布局前缀
        },
        "postcss-pxtorem": {
            rootValue: 37.5, // Vant官方根字体大小是37.5
            propList: ['*'],
            selectOrBlackList: ['.norem'] // 过滤掉.norem-开头的class，不进行rem转换
        }
    }
}