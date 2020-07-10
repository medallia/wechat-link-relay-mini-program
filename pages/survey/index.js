Page({
  // Page initial data
  data: {
    webURL: ''
  },

  onLoad: function (options) {
    console.log('Options: ', options);
    // TODO: Replace?
    this.setData({ webURL: "https://mcstage.medallia.com/widget/index.html?channel=1ee43d50-9918-11e9-b0e9-8bc679515f14&keyword=slack&consumer=test23434354"});
    if (options.ref) {
      const arrayBuffer = wx.base64ToArrayBuffer(options.ref);
      var byteArray = new Uint8Array(arrayBuffer);
      let decodedString = String.fromCharCode.apply(String, byteArray);

      console.log('decodedString: ', decodedString);
      this.setData({ webURL: decodedString });
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
