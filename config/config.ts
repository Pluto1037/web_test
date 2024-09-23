import { defineConfig } from 'umi';

export default defineConfig({
  plugins: [
    '@umijs/plugins/dist/antd',
    '@umijs/plugins/dist/dva',
    '@umijs/plugins/dist/request',
    '@umijs/plugins/dist/locale',
  ],
  antd: {},
  dva: {},
  request: { dataField: 'data' },
  locale: { default: 'zh-CN', baseSeparator: '-' },
  routes: [
    { path: '/', component: 'products' },
    { path: '/products', component: 'products', name: '首页' },
    { path: '/about', component: 'about', name: '关于我们' },
  ],
  npmClient: 'yarn',
});
