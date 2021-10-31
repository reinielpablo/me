import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import DrumKit from '@/views/DrumKit'
import ArtWorks from '@/views/ArtWorks'
import BaseArtWork from '@/components/ArtWorks/BaseArtWork'
import DataScience from '@/views/DataScience'
import Pokemon from '@/views/Pokemon'
Vue.use(VueRouter);

const routes =     [
      {
        path: "/about",
        name: "About",
        component: About,
      },
      {
        path: "/home",
        name: "Home",
        component: Home,
      },

      {
        path: "/projects/drumkit",
        name: "DrumKit",
        component: DrumKit,
      },
      {
        path: "/projects/artworks",
        name: "ArtWorks",
        component: ArtWorks,
        children: [
          {
            path: ":id",
            name: "BaseArtWork",
            component: BaseArtWork,
            props: true,
          },
        ],
      },
      {
        path: "/projects/data_science",
        name: "DataScience",
        component: DataScience,
      },
    {
      path: "/projects/pokemon",
      name: "Pokemon",
      component: Pokemon,
    },
    ];



const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
 
});

export default router;
