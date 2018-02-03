// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo : {
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let app = getApp()
    let globalData = app.globalData
    let userInfo = globalData.userInfo
    this.setData({
      userInfo : {
        ...this.userInfo,
        name : userInfo.nickName,
        avatarUrl: userInfo.avatarUrl
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
  toSet: function(){
    wx.navigateTo({
      url: '/pages/user-set/user-set',
    })
  },
  toMessage: function(){
    wx.navigateTo({
      url: '/pages/message/message',
    })
  },
  toMyGoods: function(){
    wx.navigateTo({
      url: '/pages/my-goods/my-goods',
    })
  }
})