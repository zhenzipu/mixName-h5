import { mainRouter, MenuRouter } from "@/router/router";
// import i18n from "@/locale";
// import aMenu from "@/libs/aMenu";
// import aMenu from "@/libs/limit";
import Cookies from "js-cookie";
import API from "@/libs/API";

const app = {
  state: {
    //   默认语言
    local: "zh-CN",
    // 头部菜单数组
    menuList: [],
    // 权限可通过name数组
    accessName: [],
    // 是否已拿到权限数据
    bPermit: false,
    // 需要缓存页面组件name
    cachePage: ["database"],
    // 面包屑数组
    breadCrumbList: [],
    // 主路由
    homeRoute: {
      title: "首页",
      name: "home",
      to: "home",
      path: "/home"
    }
  },
  getters: {
    allMenuName: (state, getters, rootState) =>
      util.getKeyFormArr("name", MenuRouter)
  },
  mutations: {
    //   更新菜单
    updateMenu(state, aMenuList) {
      let menuData = [];
      let aAccessName = [];

      aAccessName = util.getKeyFormArr("key", aMenuList);
      menuData = util.getMenuByRouter(MenuRouter, aAccessName);

      state.menuList = menuData;
      state.accessName = aAccessName;
      console.log('menuData',menuData);
      console.log('aAccessName',aAccessName);
      state.bPermit = true;
    },
    // 设置语言
    setLocal(state, lang) {
      let newLang = null;
      if (lang) {
        newLang = lang;
      } else {
        // 自动根据浏览器系统语言设置语言
        const navLang = navigator.language;
        const localLang =
          navLang === "zh-CN" || navLang === "en-US" ? navLang : false;
        newLang = util.localRead("local") || localLang || "zh-CN";
      }
      i18n.locale = newLang;
      util.localSave("local", newLang);
      state.local = newLang;
    },
    // 更新面包屑
    setBreadCrumb(state, route) {
      state.breadCrumbList = util.getBreadCrumbList(route, state.homeRoute);
      console.log("state.breadCrumbList", state.breadCrumbList);
    }
  },
  actions: {
    getUserPermission({ state, dispatch, commit }, params) {
      // return new Promise(resolve => {
      //     state
      //       .dispatch("ajaxPost", {
      //         url: API.user.permission + Cookies.get("aaa")
      //       })
      //       .then(res => {
      //         let objData = res.data;
      //         if (objData.status_code == 200) {
      //           let objRes = objData.data;
      //           state.commit("updateMenulist", objRes);
      //           state.aResMenu = objRes;
      //           resolve();
      //         } else {
      //           Message.error(objData.message);
      //         }
      //       });
      //   });
      commit("updateMenu", aMenu);
    }
  }
};

export default app;
