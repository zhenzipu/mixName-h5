import Main from "@/views/Main.vue";
import parentView from "@/components/parent-view";

export const mainRouter = {
  path: "/",
  name: "mainRouter",
  redirect: "/home",
  component: Main,
  children: [
    {
      path: "home",
      name: "home",
      meta: {
        title: "首页",
        access: true
      },
      component: () => import("@/views/home/home.vue")
    },
    // 域名详情
    {
      path: "domain/:id",
      name: "domain",
      component: () => import("@/views/detail/domain.vue")
    },
    // 快讯详情
    {
      path: "news/:id",
      name: "news",
      component: () => import("@/views/detail/news.vue")
    },
  ]
};
export const MenuRouter = [
  // 域名委托
  {
    path: "/entrust",
    component: Main,
    children: [
      {
        path: "index",
        name: "entrust",
        component: () => import("@/views/entrust/entrust.vue")
      }
    ]
  },
  // 精品域名
  {
    path: "/boutique",
    component: Main,
    children: [
      {
        path: "index",
        name: "boutique",
        component: () => import("@/views/boutique/boutique.vue")
      }
    ]
  },
  // 平价域名
  {
    path: "/flat",
    component: Main,
    children: [
      {
        path: "index",
        name: "flat",
        component: () => import("@/views/flat/flat.vue")
      }
    ]
  },
  // 咨询
  {
    path: "/consult",
    component: Main,
    children: [
      {
        path: "index",
        name: "consult",
        component: () => import("@/views/consult/consult.vue")
      }
    ]
  },
  // 快讯
  {
    path: "/latest",
    component: Main,
    children: [
      {
        path: "index",
        name: "latest",
        component: () => import("@/views/latest/latest.vue")
      }
    ]
  },
  // 行业资讯
  {
    path: "/industry",
    component: Main,
    children: [
      {
        path: "index",
        name: "industry",
        component: () => import("@/views/industry/industry.vue")
      }
    ]
  },
];
export const routers = [mainRouter, ...MenuRouter];
