// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    goodList: [
      {
        id: 1,
        name: 'Pikachu',
        img: '/images/pikachu.jpeg',
        price: 1000,
        time: '2017-12-27',
        location: 'UCAS',
        details: '这是一个可爱的皮卡丘，我就给你们看看，我不卖，略略略',
        user: {
          id: 1,
          name: '郭嘉大战绿巨人',
          headphoto: '',
          address: '西区5272'
        }
      },
      {
        id: 2,
        name: 'Pikachu',
        img: '/images/pikachu.jpeg',
        price: 1000,
        time: '2017-12-27',
        location: 'UCAS',
        details: '这是一个可爱的皮卡丘，我就给你们看看，我不卖，略略略',
        user: {
          id: 1,
          name: '郭嘉大战绿巨人',
          headphoto: '',
          address: '西区5272'
        }
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let app = getApp()
    let globalData = app.globalData
    let items = globalData.items
    let users = globalData.users
    let newItems = items.map(v=>{
      let newV = v
      newV.user = users[v.user_id-1]
      return newV
    })
    this.setData({
      goodList : newItems 
    })
    console.log(globalData)
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