// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user : {
      id : 1,
      name : '郭嘉大战绿巨人',
      avatar : 'avatar.jpeg',
      phone : 111111111,
      address : '西区5272'
    }
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