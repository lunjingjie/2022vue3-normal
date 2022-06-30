import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';

export function initArcoDesign(app) {
  app.use(ArcoVue);
  app.use(ArcoVueIcon);
}