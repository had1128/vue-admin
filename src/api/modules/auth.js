export const USERINFO = {
  url: 'http://59.79.116.4/report/report/selectByCode',
  method: 'post',
  remark: '获取用户信息',
  defaultData: {
    code: ''
  }
}


export const LOGIN = {
  url: 'login/loginin',
  method: 'get',
  remark: '获取用户信息',
  defaultData: {
    xgh: '',
    xm: '',
    bm: '',
    bmbm: '',
    cardNo: '',
    studentclass: '',
    type: '',
    openId: ''
  }
}

export const SSOLOGIN = {
  url: 'http://59.79.116.4/report/report/ssoCheckUser',
  method: 'post',
  remark: '登录',
  // 默认参数
  defaultData: {
    code: '',
    pwd: ''
  }
}

export const LOGOUT = {
  url: 'logout',
  method: 'post',
  remark: '登出'
}

// export const LOGIN_EXP = {
//   url: 'login/experience',
//   method: 'post',
//   remark: '体验登录'
// }

// export const ROLE_MENU = {
//   url: 'login/st/app/menus',
//   method: 'post',
//   remark: '当前角色移动端菜单'
// }

// export const PASSWORD_FORGET = {
//   // url: 'forget/password/save',
//   url: 'password/reset',
//   method: 'post',
//   remark: '找回密码'
// }

// export const MOBILE_CHECK = {
//   url: 'official/register/validate',
//   method: 'post',
//   remark: '验证手机号是否已注册、是否可体验'
// }

// export const CAPTCHA_SYSTEM = {
//   url: 'sms/captcha/send/system',
//   method: 'post',
//   remark: '获取验证码'
// }

// export const REGISTER = {
//   url: 'register/login/experience',
//   method: 'post',
//   remark: '注册接口'
// }

// export const QRCODE_SERVICE = {
//   url: 'sys/config/qr/customer/service',
//   method: 'post',
//   remark: '获取客服二维码及说明接口'
// }

// export const CURRENT_USER = {
//   url: 'sts/si/employee/current',
//   method: 'post',
//   remark: '当前登录员工详情'
// }

// export const STORE_INFO = {
//   url: 'sts/si/store/info',
//   method: 'post',
//   remark: '查询企业详情接口'
// }
