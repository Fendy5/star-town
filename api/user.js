import request from '~/utils/request'

export function loginApi (data) {
  return request({
    url: '/api/v1/login',
    method: 'post',
    data
  })
}

export function registerApi (data) {
  return request({
    url: '/api/v1/register',
    method: 'post',
    data
  })
}

export function getUserInfoApi (params) {
  return request({
    url: '/api/v1/user-info',
    method: 'get',
    params
  })
}
