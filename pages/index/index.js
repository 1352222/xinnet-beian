//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    navbarData: {
      showCapsule: 1,
      title: '电子核检验'
    },
    // height: app.globalData.height * 2 + 80,
    ishidden: '3',
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  handleGo: function() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  onLoad: function () {
  },
  getUserInfo: function(e) {
  }
})
