Page({
  data: {
    list_TnoS5kqg: [null, null, null, null, null, null],
  },

  onShareAppMessage() {
    return {};
  },
  onClick() {
    wx.navigateTo({ url: '/pages/daka/daka' });
  },

  onClick_LBSHS397(event) {
    console.log('on click');
  },
  onClick_1() {
    wx.navigateTo({ url: '/pages/dakajilu/dakajilu' });
  },
});