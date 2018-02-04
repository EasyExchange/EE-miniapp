// components/search-button/search-button.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showInput: function () {
      this.setData({
        inputShowed: true
      });
    },
    hideInput: function () {
      this.setData({
        inputVal: "",
        inputShowed: false
      });
      this.triggerEvent('clear')
    },
    clearInput: function () {
      this.setData({
        inputVal: ""
      });
      this.triggerEvent('clear')
    },
    inputTyping: function (e) {
      this.setData({
        inputVal: e.detail.value
      },()=>{
        return e.detail.value
      });
      // this.triggerEvent('typing', e.detail.value)
    },
    search: function(e) {
      this.triggerEvent('search', e.detail.value)
    }
  }
})
