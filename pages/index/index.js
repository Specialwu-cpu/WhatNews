// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
        {id: '1', name: '推荐'},
        {id: '2', name: '热榜'},
        {id: '3', name: '科技'},
        {id: '4', name: '国际'},
        {id: '5', name: '娱乐'},
        {id: '6', name: '电影'},
        {id: '7', name: '体育'},
        {id: '8', name: '汽车'},
        {id: '9', name: '足球'}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  loadNews() {
  },

  tabSelect(e) {
    this.setData({
        tabCur: e.currentTarget.dataset.id,
        scrollLeft: (e.currentTarget.dataset.id - 2) * 200
    }, success => {
        this.loadNews()
    })
},
})
