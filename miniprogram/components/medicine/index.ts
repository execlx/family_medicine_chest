import IMedicine from "../../models/medicine";
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    medicineList: [{
      name: '感冒灵',
      expirationDate: '2022-01-01',
      quantity: 10,
    }] as IMedicine[]
  },

  /**
   * 组件的初始数据
   */
  data: {
    medicineStatus: {
      label: '药品状态',
      value: `all`,
      options: [
        {
          label: `全部`,
          value: `all`,
          disabled: false,
        },
        {
          label: `未过期`,
          value: `no_outdated`,
          disabled: false,
        },
        {
          label: `已过期`,
          value: `outdated`,
          disabled: false,
        },
      ],
    },

    familyMember: {
      label: '家庭成员',
      value: ["baby"],
      options: [
        {
          label: `宝贝`,
          value: `baby`,
          disabled: false,
        },
        {
          label: `妈妈`,
          value: `mom`,
          disabled: false,
        },
        {
          label: `爸爸`,
          value: `dad`,
          disabled: false,
        },
      ],
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleMedicineSelect(e: any) {
      this.setData({
        "medicineStatus.value": e.detail.value,
      });
    },

    handleMemberSelect(e: any) {
      this.setData({
        "familyMember.value": e.detail.value,
      });
    }
  },
});
