import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  // notion页面的id
  rootNotionPageId: 'Home-d0ac18a300f848a08af1233638204c51',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  // 个人博客名称
  name: 'Code记录',
  // notion 页面的原始链接
  domain: 'https://www.notion.so/dou-biji/Home-d0ac18a300f848a08af1233638204c51',
  // 作者名称
  author: 'Dkx',

  // open graph metadata (optional)
  description: 'Example Next.js Notion Starter Kit Site',

  // social usernames (optional)
  // 社交账号的 名称 
  twitter: '@Dkx1219',
  github: 'PigPigLetsGo',
  linkedin: '',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'Hello-432e29e1665d4ef6875e1ef2ec715079'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: 'YoutHome-7015c6488ddf4198aa2ffe98a36716b6'
  //   }
  // ]
})
