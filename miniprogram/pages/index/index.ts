// pages/index/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: 'home',
    ariaLabel: '首页',
    list: [
      { value: 'home', icon: 'home', ariaLabel: '首页' },
      { value: 'medicine', icon: 'app', ariaLabel: '药品' },
      { value: 'mine', icon: 'user', ariaLabel: '我的' },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  onChange(e: any) {
    const value = e.detail.value;
    const ariaLabel = this.data.list.find((item: any) => item.value === value)?.ariaLabel;
    this.setData({
      value,
      ariaLabel,
    });
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})