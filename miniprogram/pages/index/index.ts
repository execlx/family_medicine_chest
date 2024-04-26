import IMedicine from "../../models/medicine";

// pages/index/index.ts
interface Tab {
  value: string;
  icon: string;
  activeIcon: string;
  text: string;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
    ariaLabel: '首页',
    tabs: [
      {
        value: 'plan',
        icon: 'UnorderedListOutline',
        activeIcon: 'UnorderedListOutline',
        text: '服药计划',
      },
      {
        value: 'medicine',
        icon: 'ShopbagOutline',
        activeIcon: 'ShopbagOutline',
        text: '药箱管理',
      },
      {
        value: 'mine',
        icon: 'SetOutline',
        activeIcon: 'SetOutline',
        text: '个人中心',
      },
    ] as unknown as [Tab],

    medicineList: [{
      name: '感冒灵',
      expirationDate: '2022-01-01',
      quantity: 10,
      desc: '感冒发烧',
    }, {
      name: '布洛芬',
      expirationDate: '2022-02-01',
      quantity: 10,
      desc: '头痛',}] as IMedicine[],
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

  handleChange(index: any) {

    const current = index.detail;
    const ariaLabel = this.data.tabs[current].text;
    this.setData({ current, 
      ariaLabel, });
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