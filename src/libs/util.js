let util = {};
util.title = function(title) {
  title = title ||"MinName";
  window.document.title = title;
};

// 跳转路由
util.turnTo = function(vm, name, id) {
  let params = id ? { id: id } : {};
  vm.$router.push({
    name: name,
    params: params
  });
};

/**
 * @param {Array} list 通过路由列表得到菜单列表
 * @returns {Array}
 */
util.getMenuByRouter = (list, allNames) => {
  let res = [];
  list.forEach(item => {
    let obj = {
      icon: item.meta.icon || "",
      name: item.name || "",
      title: item.meta.title || "",
      meta: item.meta || {}
    };
    if (item.children) {
      obj.children = util.getMenuByRouter(item.children, allNames);
    }
    if (util.oneOf(item["name"], allNames)) {
      res.push(obj);
    }
  });
  return res;
};

/**
 * @param {Array} routeMetched 当前路由metched
 * @returns {Array}
 */
util.getBreadCrumbList = (route, homeItem) => {
  console.log("route", route);
  console.log("homeItem", homeItem);
  let routeMetched = route.matched;
  if (routeMetched.some(item => item.name === homeItem.name)) return [homeItem];
  let res = routeMetched.map((item, idx) => {
    let meta = { ...item.meta };
    let obj = {
      icon: item.icon || "",
      name: item.name,
      path: item.path || "",
      title: meta.title
    };
    return obj;
  });
  return [homeItem, ...res];
};

// 下钻抓取item某个key值
util.getKeyFormArr = (key, obj) => {
  let newArr = [];
  function _getKeyFormArr(arr) {
    arr.forEach(item => {
      newArr.push(item[key]);
      if (item.children) {
        _getKeyFormArr(item.children);
      }
    });
  }
  _getKeyFormArr(obj);
  return newArr;
};

// 交集
util.exist = (arr, targetArr) => {
  let res = false;
  arr.forEach(item => {
    if (targetArr.indexOf(item) != -1) {
      res = true;
    }
  });
  return res;
};

// 包含
util.inOf = (arr, targetArr) => {
  let res = true;
  arr.forEach(item => {
    if (targetArr.indexOf(item) < 0) {
      res = false;
    }
  });
  return res;
};

// 存在
util.oneOf = (ele, targetArr) => {
  if (targetArr.indexOf(ele) >= 0) {
    return true;
  } else {
    return false;
  }
};

// localStorage
util.localSave = (key, value) => {
  localStorage.setItem(key, value);
};

util.localRead = key => {
  return localStorage.getItem(key) || "";
};
export default util;
