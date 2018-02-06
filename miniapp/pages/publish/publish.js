// pages/publish/publish.js
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
    // wx.request({
    //   url: 'https://eeserver.herokuapp.com/new', 
    //   method: 'POST',
    //   data: {
    //     user_id:1,
    //     name: 'switch',
    //     second_price: 2200,
    //     original_price: 3000,
    //     detail:'全新任天堂Switch，看上的快带走吧'
    //   },
    //   success: function(res) {
    //     console.log(res.data)
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // wx.switchTab({
    //   url: '/pages/me/me',
    //   success: ()=>{
    //     setTimeout(()=>{
    //       wx.navigateTo({
    //         url: '/pages/my-goods/my-goods'
    //       })
    //     },100)
    //   }
    // })
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
  formSubmit: function(e){
    let self = this
    let data = e.detail.value
    if(data.inputTitle.trim()==''){
      wx.showToast({
        title: '标题不能为空！',
        duration: 1000
      })
      return
    }
    if(data.inputPrice.trim()==''){
      wx.showToast({
        title: '价格不能为空！',
        duration: 1000
      })
      return
    }
    if(!self.data.files){
      wx.showToast({
        title: '图片不能为空',
        duration: 1000
      })
      return
    }
    const uploadTask = wx.uploadFile({
      url: 'https://eeserver.herokuapp.com/new',
      filePath: self.data.files[0],
      name: 'file',
      formData:{
        user_id: app.globalData.user.id,
        name: data.inputTitle,
        detail: data.textarea,
        second_price: data.inputPrice
      },
      success: function(res){
        var data = res.data
        console.log("...res ",res)
        //do something
        wx.hideToast()
        wx.showToast({
          title: '发布成功',
          icon: 'success',
          duration: 1000,
          success: function(){
            setTimeout(()=>{
              wx.switchTab({
                url: '/pages/me/me',
                success: ()=>{
                  wx.navigateTo({
                    url: '/pages/my-goods/my-goods'
                  })
                }
              })
            },1000)
          }
        })
        console.log('成功后返回值：', res)
      },
      fail: function(res) {
        var data = res.data
        wx.showToast({
          title: '网络异常，请重试',
          icon: 'fail',
          duration: 200
        })
        console.log('失败后返回', data)
      }
    })

    uploadTask.onProgressUpdate((res) => {
      wx.showToast({
        title: '发布中...',
        icon: 'loading',
        duration: 2000
      })
      // console.log('上传进度', res.progress)
      // console.log('已经上传的数据长度', res.totalBytesSent)
      // console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
  })
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  onUploadFiles: function(detail){
    let self = this
    this.setData({
      files: detail.detail
    },()=>{
      console.log('files:',self.data.flies)
    })
  }
})