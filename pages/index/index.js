const app = getApp()

Page({
  data: {
    motto: 'WeChat Link Relay Mini-Program',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  bindViewTap: function() {},
  onLoad: function () {
    wx.navigateTo({
      // TODO: Dynamically manage this?
      url: '../survey/index?ref=aHR0cHM6Ly9tY3N0YWdlLm1lZGFsbGlhLmNvbS93aWRnZXQvaW5kZXguaHRtbD9jaGFubmVsPTFlZTQzZDUwLTk5MTgtMTFlOS1iMGU5LThiYzY3OTUxNWYxNCZrZXl3      b3JkPXNsYWNrJmNvbnN1bWVyPXRlc3QyMzQzNDM1NA=='
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
