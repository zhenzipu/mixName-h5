const sign = "/smartIDC/v1/";

const API = {
  // 首页
  home: {
    base: "asset/get_classify_count"
  },
};

function getJson(obj) {
  for (const key in obj) {
    let single = obj[key];
    if (typeof single == "object") {
      for (const key_child in single) {
        if (typeof single[key_child] == "object") {
          getJson(single[key_child]);
        } else {
          single[key_child] = sign + single[key_child];
        }
      }
    } else {
      obj[key] = sign + obj[key];
    }
  }
}

getJson(API);

export default API;
