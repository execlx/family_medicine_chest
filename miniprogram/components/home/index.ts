// pages/home/index.ts
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleAddPlan(e: any) {
      wx.navigateTo({
        url: '/pages/plan/index?type=add',
        success: () => {

        },
        fail: (err: any) => {
          console.log("🚀 ~ handleAddPlan ~ err:", err)
          
        }
      })
    },
  },

  lifetimes: {
    attached: () => {
      console.log("🚀 ~ a:")
      // 在组件实例进入页面节点树时执行
    },
    detached: () => {
      // 在组件实例被从页面节点树移除时执行
    },
  },
    
})