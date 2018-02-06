// pages/my-goods/my-goods.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this
    wx.request({
      url: 'https://eeserver.herokuapp.com/me/posted',
      data: {
        id:app.globalData.user.id
      },
      success: function(res) {
        self.setData({
          goods:res.data
        })
      },
      fail: function(res) {
        var data = res.data
        wx.showToast({
          title: '网络异常，请刷新重试',
          icon: 'fail',
          duration: 200
        })
        console.log('失败后返回', data)
      }
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