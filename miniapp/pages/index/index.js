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
    // //当小程序首页加载时发送请求
    // wx.request({
    //   url: '/index', //首页的接口地址（这里你定好每个请求的入口告诉我就行）
    //   method: 'GET',//默认就为get请求
    //   data: {//其实首页请求不需要什么数据的，这里是一个例子，数据也是这样以json的形式发给后端
    //     userId : '007'
    //   },
    //   header: {//请求头
    //     'content-type': 'application/json' // 默认请求json
    //   },
    //   success: function (res) {//以上就是最简单的http请求，当服务器收到请求并成功响应后小程序这里的success方法会执行，这个res参数就是服务器返回的结果
    //     console.log(res.data)
    //   }
    // })
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