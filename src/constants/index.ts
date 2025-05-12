export const TabList = [
  {
    title: '系统提醒',
    id: 'announce',
    list: [
      {
        title: '代开增值税蓝字发票',
        id: 'announce-1'
      },
      {
        title: '新办纳税人套餐',
        id: 'announce-2'
      },
      {
        title: '发票领用',
        id: 'announce-3'
      },
      {
        title: '解除相关人员关联关系',
        id: 'announce-4'
      }
    ]
  },
  {
    title: '办税指南',
    id: 'guide'
  },
  {
    title: '智能咨询',
    id: 'consult'
  }
]

export interface TabItem {
  title: string
  id: string
  data: ListItem[]
}
export interface ListItem {
  title: string
  id: string
}
