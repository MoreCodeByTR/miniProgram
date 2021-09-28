// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    pages:['pages/show/index',
  'pages/info/index',
  'pages/scan/index',
  ],
    logs: []
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  },
  goToPage(e){
    console.log('sss')
    let src=e.currentTarget.dataset.src;
    console.log(src)
    wx.navigateTo({
      url:src
    })
  }
})
