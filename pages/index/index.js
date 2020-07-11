const app = getApp();

Page({
  data: {
    options: 'No options',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  bindViewTap: function() {},

  onLoad: function (query) {
    let optionsStr = 'query parameters: ';

    Object.keys(query).forEach((key) => {
      optionsStr += key + ': ' + options[key] + ', ';
    });

    console.log('options in main: ', optionsStr);

    this.setData({options: optionsStr});

    if (query.ref) {
      console.log('Navigating to ', query.ref);

      wx.navigateTo({
        url: '../survey/index?ref=' + query.ref
      });
    }
  },

  getUserInfo: function(e) {
    console.log(e);

    app.globalData.userInfo = e.detail.userInfo;

    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
  }
});
