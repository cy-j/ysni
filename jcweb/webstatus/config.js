// 配置
window.Config = {

  // 站点名
  SiteName: 'Web Status',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm786614660-66637556ba5be54e46fc5228',
    'm784539450-07b0bf22312db1b11d834eee',
    'm784539367-c7610e3d35c531544224b726',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: '上水君玉',
      url: 'https://www.chenyu.me/'
    },
    {
      text: '遇上你',
      url: 'https://www.ysni.cn'
    }
  ]
};