// components/goods-card/goods-card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    good:{
      type : null,
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
      // try {
      //   wx.setStorageSync('nowGood', self.data.good);
      // } catch (e) {
      //   console.log("set strorage error:"+ e);
      // }
      wx.navigateTo({
        url: '/pages/goods-info/goods-info?id='+self.data.good.id,
      })
    }
  }
})
