module.exports = {
  keys: 'exodfsafasdfhuqorywer',
  view: {
    // 模板相关配置
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  },
  middleware: ['robot'],
  // 上面中间件的相关配置
  robot: {
    ua: [
      /Baiduspider/i
    ]
  },
  // mock数据放这里好离谱
  news: {
    pageSize: 5,
    serverUrl:'https://hacker-news.firebaseio.com/v0',
  }
}