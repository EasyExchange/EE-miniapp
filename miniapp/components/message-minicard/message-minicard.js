// components/message-minicard/message-minicard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    message:{
      type: null,
      value:{}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    showDetail: function () {
      let self = this;
      wx.redirectTo({
        url: '/pages/goods-info/goods-info?id='+self.data.message.item_id+'&scrollTo='+1000,
      })
  }
  }
})
