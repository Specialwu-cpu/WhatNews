// components/categoryBar.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        tabs: [
            {value: '1', name: '推荐'},
            {value: '2', name: '热榜'},
            {value: '3', name: '科技'},
            {value: '4', name: '国际'},
            {value: '5', name: '娱乐'},
            {value: '6', name: '电影'},
            {value: '7', name: '体育'},
            {value: '8', name: '汽车'},
            {value: '9', name: '足球'}
        ]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        click: function () {
            console.log("component!");
         }
    }
})
