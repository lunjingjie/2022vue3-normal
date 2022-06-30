import {
  createApp
} from 'vue'
import App from './App.vue'
import { initArcoDesign } from './plugins/arco-design';

function bootstrap() {
  const app = createApp(App);

  initArcoDesign(app);
  
  app.mount('#app');
}

bootstrap();