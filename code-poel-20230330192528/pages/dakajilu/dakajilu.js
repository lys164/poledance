Page({
  data: {},

  onShareAppMessage() {
    return {};
  },
  onClick() {
    wx.navigateTo({ url: '/pages/Home/Home' });
  },
  onClick_1() {
    wx.navigateTo({ url: '/pages/daka/daka' });
  },
});