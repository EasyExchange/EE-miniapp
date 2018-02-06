// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    goodList:[]
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
    this.doHome()
    // let app = getApp()
    // let globalData = app.globalData
    // let items = globalData.items
    // let users = globalData.users

      // console.log(globalData)
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
  doSearch: function(e){
    let inputValue = e.detail.trim()
    let self = this
    wx.request({
      url: 'https://eeserver.herokuapp.com/search',
      data:{
        item_name: inputValue
      },
      success: function (res) {
        let data = res.data
        self.setData({
          goodList : data
        })
        console.log(res)
      }
    })
  },
  doHome: function(){
    let self = this
    wx.request({
      url: 'https://eeserver.herokuapp.com/items',
      success: function (res) {
        let data = res.data ? res.data : []
        self.setData({
          goodList: data
        },()=>{
          // let files = []
          // self.data.goodList.forEach(element => {
          //   let index = element.id
          //   wx.downloadFile({
          //     url: 'https://eeserver.herokuapp.com/picture?picture_name='+element.picture.url,
          //     success: function (res) {
          //       files[index] = res.tempFilePath
          //     }
          //   })
          // })
          // setTimeout(()=>{
          //   let newGoodlist = self.data.goodList
          //   newGoodlist.forEach(ele => {
          //     ele.src = files[ele.id]
          //     console.log(files)
          //   })
          //   self.setData({
          //     goodList:newGoodlist
          //   })
          // },1000)

          // wx.request({
          //   url: 'https://eeserver.herokuapp.com/users',
          //   success: function (res) {
          //     let data = res.data ? res.data : []
          //     self.setData({
          //       users: data
          //     },()=>{
          //       let items = self.data.items
          //       let users = self.data.users
          //       let newItems = items.map(v=>{
          //         let newV = v
          //         newV.user = users[v.user_id-1]
          //         return newV
          //       })
          //       self.setData({
          //         goodList : newItems 
          //       },()=>{
              // })
            })
        // })
      }
    })
  }
})