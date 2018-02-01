// pages/goods-info/goods-info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  good :  {
    id: 1,
    name: '',
    img: '/images/pikachu.jpeg',
    price: 1000,
    time: '2017-12-27',
    location: 'UCAS',
    user: {
      id: 1,
      name: '郭嘉大战绿巨人',
      headphoto: '',
      address: ''
    }
  }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      good: wx.getStorageSync('nowGood')
    })
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
  
  }
})