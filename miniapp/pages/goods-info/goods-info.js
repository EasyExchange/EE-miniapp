// pages/goods-info/goods-info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    good: {
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setData({
    //   good: wx.getStorageSync('nowGood')
    // })
    let id = options.id
    let self = this
    let app = getApp()
    let globalData = app.globalData
    let users = globalData.users

    wx.request({
      url: 'https://eeserver.herokuapp.com/items/' + id,
      data: {
      },
      success: function (res) {
        let data = res.data ? res.data : []
        let messages = data.messages

        let newMessages = messages.map(v => {
          let newV = v
          newV.sender = users[v.sender_id - 1]
          return newV
        })

        data.messages = newMessages
        self.setData({
          good: data
        })
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