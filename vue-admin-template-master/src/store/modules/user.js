import { loginApi, getUserInfoApi, getBaseUserInfoApi } from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth";
const state = {
  token: getToken() || '',
  userInfo: {}
}

const mutations = {
  setToken(state, newToken) {
    state.token = newToken;
    setToken(newToken);
  },
  setUserInfo(state, newUserInfo) {
    state.userInfo = newUserInfo;
  },
  clearToken(state) {
    state.token = "";
    removeToken();
  },
  clearUserInfo(state) {
    state.userInfo = {};
  }
}

const getters = {}

const actions = {
  // login(context, data) {
  //   return new Promise((resolve, reject) => {
  //     loginApi(data).then((res) => {

  //       const token = res.data;
  //       context.commit("setToken", token);
  //       resolve(res);
  //     }).catch(error => {
  //       reject(error);
  //     })
  //   })
  // },
  async login(context, data) {
    let res = await loginApi(data);
    const token = res.data;
    context.commit("setToken", token);
    return res;
  },
  // getUserInfo(context) {
  //   // 异步操作
  //   return new Promise((resolve, reject) => {
  //     getUserInfoApi().then(res => {
  //       let { data } = res;
  //       context.commit('setUserInfo', data);
  //       resolve(res);
  //     }).catch(error => {
  //       reject(error);
  //     })
  //   })
  // }
  async getUserInfo({ commit }) {
    let { data: data1 } = await getUserInfoApi();
    let { data: data2 } = await getBaseUserInfoApi(data1.userId);
    // data2.staffPhoto = "12345";
    const baseData = {
      ...data1,
      ...data2
    }
    commit('setUserInfo', baseData);

    return baseData;
  },
  async logout({ commit }) {
    commit("clearToken");
    commit("clearUserInfo");
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}