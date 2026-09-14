export type Group = {
  id: string;
  number: string;
  name: string;
  kicker: string;
  description: string;
  learns: string[];
  awards: string[];
  races: string[];
  image: string;
  imageAlt: string;
};

export const groups: Group[] = [
  {
    id: 'hardware',
    number: '01',
    name: '硬件组',
    kicker: 'BUILD THE SIGNAL',
    description: '把想法焊接成可以被触摸、被测量、被验证的实体。',
    learns: ['电路与 PCB 设计', '嵌入式开发 / MCU', '传感器与通信协议'],
    awards: ['【占位】全国大学生电子设计竞赛 · 省级奖项', '【占位】校级创新实践项目一等奖'],
    races: ['全国大学生电子设计竞赛', '智能车竞赛 / 物联网赛道'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=85',
    imageAlt: '电路板与电子元件的近景'
  },
  {
    id: 'software',
    number: '02',
    name: '应用组',
    kicker: 'MAKE IT USEFUL',
    description: '让设备拥有界面、连接和被真实用户使用的理由。',
    learns: ['Web / App 全栈开发', '物联网平台与数据可视化', '产品原型与交互设计'],
    awards: ['【占位】中国国际大学生创新大赛 · 校赛金奖', '【占位】互联网 + 创新创业大赛 · 省级奖项'],
    races: ['中国国际大学生创新大赛', '挑战杯 / 创青春'],
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1800&q=85',
    imageAlt: '桌面上的应用界面设计与开发设备'
  },
  {
    id: 'algorithm',
    number: '03',
    name: '算法组',
    kicker: 'TEACH MACHINES',
    description: '从一串原始数据里找到规律，让系统学会判断和行动。',
    learns: ['机器学习与计算机视觉', '数据处理与模型训练', '边缘 AI 与智能决策'],
    awards: ['【占位】全国大学生数学建模竞赛 · 省级奖项', '【占位】人工智能创新挑战赛 · 校级一等奖'],
    races: ['全国大学生数学建模竞赛', '中国高校计算机大赛 · 人工智能赛道'],
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1800&q=85',
    imageAlt: '屏幕上的代码与数据分析界面'
  }
];
