Page({
  data: {
    webURL: ''
  },

  onLoad: function (query) {
    console.log('Query parameters: ', query);
    if (query.ref) {
      const surveyUrl = String.fromCharCode.apply(
        String,
        new Uint8Array(wx.base64ToArrayBuffer(query.ref))
      );

      console.log('Survey URL: ', surveyUrl);

      this.setData({ webURL: surveyUrl });
    }
  },

  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {}
})
