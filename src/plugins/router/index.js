import {
  createRouter,
  createWebHashHistory
} from 'vue-router';

export const router = createRouter({
  history: createWebHashHistory(
    import.meta.env.VITE_PUBLIC_PATH),
  routes: [],
  strict: true,
  scrollBehavior: () => ({
    left: 0,
    top: 0
  })
});

export function resetRouter() {
  router.getRoutes.forEach((route) => {
    const { name } = route;
    if (name) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}


export function initRouter(app) {
  app.use(router);
}
