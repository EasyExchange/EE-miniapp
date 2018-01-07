// components/goods-minicard/goods-minicard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    good: {
      type: null,
      value: {
        id: 1,
        name: 'Pikachu',
        img: '/images/pikachu.jpeg',
        price: 1000,
        time: '2017-12-27',
        location: 'UCAS',
        user: {
          id: 1,
          name: '郭嘉大战绿巨人',
          headphoto: '',
          address: ''
        }
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

  }
})
