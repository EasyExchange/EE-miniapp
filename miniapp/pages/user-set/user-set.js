// pages/user-set/user-set.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  formSubmit: function (e) {
    let self = this
    let data = e.detail.value
    wx.request({
      url: 'https://eeserver.herokuapp.com/me/update',
      method: 'PUT',
      data: {
        name: app.globalData.user.name,
        id: app.globalData.user.id,
        tel: data.tel,
        address: data.address
      },
      success: function (res) {
        var data = res.data
        //do something
        wx.showToast({
          title: '保存成功',
          icon: 'success',
          duration: 1000,
          success: function () {
            setTimeout(() => {
              wx.navigateBack({
                delta: 1
              })
            }, 1000)
          }
        })
        console.log('成功后返回值：', res)
      }
    })
  }
})