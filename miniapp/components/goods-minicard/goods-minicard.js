// components/goods-minicard/goods-minicard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    good: {
      type: null,
      value: {
      }
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
    showDetail : function(){
      let self = this;
      wx.navigateTo({
        url: '/pages/goods-info/goods-info?id='+self.data.good.id+'&scrollTo='+0,
      })
    }
  }
})
