import { api } from '@core'
import configs from '@config'
// 全局变量
const state = {
  isAuthenticated: false,
  user: null,
  token: null
}

// getters
const getters = {
  // 获取当前用户
  userInfo (state) {
    if (!state.user) {
      var userStr = localStorage.getItem('userInfo')
      if (userStr) {
        state.user = JSON.parse(userStr)
      }
    }
    return state.user
  },
  token(state){
    if (!state.token) {
      var userStr = localStorage.getItem('userInfo')
      if (userStr) {
        state.token = JSON.parse(userStr).yyInfo.token;
      }
    }
    return state.token
  },
  // 判定是否登录
  isAuthenticated (state) {
    if (!state.user) {
      var userStr = localStorage.getItem('userInfo')
      if (userStr) {
        state.user = JSON.parse(userStr)
        state.isAuthenticated = true
      }
    }
    return state.isAuthenticated
  }
}

// mutations
const mutations = {
  // 登录状态
  loginIn (state, payload) {
    state.user = payload
    state.isAuthenticated = true
    state.token = payload.yyInfo.token
    localStorage.setItem('userInfo', JSON.stringify(payload))
  },
  // 注销
  loginOut (state) {
    localStorage.clear()
    state.isAuthenticated = false
    state.user = null
    state.token = null
  }
}

// actions
const actions = {
  login: async function ({ commit }, params = {}) {
    return new Promise(async (resolve, reject) => {
      // 计算参数
      configs.api.header = {
        'decodes': 'CB3DF678928A8C215DABC740EC4734E9',
        'ts': '1589912087993',
        'code': '16103'
      }
      var res = await api.SSOLOGIN(params)
      if (res.data) {
        var model = {
          baseInfo: {},
          yyInfo: {}
        }
        let _userInfo = await api.USERINFO({ code: params.code })
        if (_userInfo.data.name) {
          model.baseInfo = _userInfo.data
        } else {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject({ code: 201, msg: '获取用户信息异常，请稍后重试' })
        }

        let userToken = await api.LOGIN({ xgh: params.code,
          xm: model.baseInfo.name,
          bm: model.baseInfo.deptname,
          bmbm: model.baseInfo.deptno,
          cardNo: model.baseInfo.cardnumber,
          studentclass: model.baseInfo.studentclass,
          type: model.baseInfo.usertype,
          openId: null })
        // eslint-disable-next-line prefer-promise-reject-errors,eqeqeq
        if (userToken.code == 200) {
          model.yyInfo = userToken.data
        } else {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject({ code: 201, msg: '获取用户信息异常，请稍后重试' })
        }
        commit('loginIn', model)
        resolve(model)
      } else {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({ code: 201, msg: '用户名密码错误' })
      }
      resolve({ res })
    })
  },
  async loginOut ({ commit }) {
    commit('loginOut')
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
