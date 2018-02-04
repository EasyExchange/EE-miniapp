// pages/message/message.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messages:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let app = getApp()
    let globalData = app.globalData
    let items = globalData.items
    let users = globalData.users
    let self = this
    wx.request({
      url: 'https://eeserver.herokuapp.com/me/message',
      data: {
        id:app.globalData.useId
      },
      success: function(res) {
        let messageData = res.data
        let newMessageData = messageData.map(v=>{
          let newV = v
          newV.item = items[v.item_id-1]
          newV.user = users[v.sender_id-1]
          return newV
        })
        console.log(newMessageData)
        self.setData({
          messages:newMessageData
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