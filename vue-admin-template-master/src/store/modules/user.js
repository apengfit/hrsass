import { loginApi } from "@/api/user";
import { getToken, setToken } from "@/utils/auth";
const state = {
  token: getToken() || ''
}

const mutations = {
  setToken(state, newToken) {
    state.token = newToken;
    setToken(newToken);
  }
}

const getters = {}

const actions = {
  login(context, data) {
    loginApi(data).then((res) => {
      const token = res.data.data;
      context.commit("setToken", token);

    })
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}