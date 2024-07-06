import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import CVPage from '../views/CVPage.vue'
import Designs from '../views/DesignsPage.vue'
import Websites from '../views/WebsitesPage.vue'
import About from '../views/AboutThisPage.vue'
import NotFound from '../views/PageNotFound.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
  { path: '/', component: HomePage },
  { path: '/CV', component: CVPage },
  { path: '/Designs', component: Designs},
  { path: '/Websites', component: Websites},
  { path: '/About', component: About},
  { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router
