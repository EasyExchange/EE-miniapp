// pages/goods-info/goods-info.js
const app = getApp()
let id
Page({

  /**
   * 页面的初始数据
   */
  data: {
    good: {
    },
    isPublisher : false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setData({
    //   good: wx.getStorageSync('nowGood')
    // })
    id = options.id
    let scro = options.scrollTo
    let self = this
    let uId = app.globalData.user.id
    let user_id

    wx.request({
      url: 'https://eeserver.herokuapp.com/items/' + id,
      success: function (res) {
        let data = res.data ? res.data : []
        user_id = data.user_id
        // let messages = data.messages

        // let newMessages = messages.map(v => {
        //   let newV = v
        //   newV.sender = users[v.sender_id - 1]
        //   return newV
        // })

        // data.messages = newMessages
        self.setData({
          good: data,
          isPublisher: user_id == uId
        },()=>{
          wx.pageScrollTo({
            scrollTop: scro,
            duration: 300
          })
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

  },
  inputMessage: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  confirmMessage: function (e) {
    let inputValue = this.data.inputValue
    let self = this
    let scrollTo = 1000

    wx.request({
      url: 'https://eeserver.herokuapp.com/new_message',
      data: {
        item_id: id,
        sender_id: app.globalData.user.id,
        receiver_id: self.data.good.user_id,
        content: inputValue
      },
      method:'POST',
      success: function(res) {
        wx.redirectTo({
          url: '/pages/goods-info/goods-info?id='+id+'&scrollTo='+scrollTo
        })
        console.log(res.data)
      }
    })
  }
})