//logs.js
const util = require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    navbarData: {
      showCapsule: 1,
      title: '查看了将覅额'
    },
    height: app.globalData.height * 2 + 100,
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
