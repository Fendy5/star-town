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

// 用户中心api
export function getUserCenterApi() {
  return request({
    url: `/api/v1/user`,
    method: 'get'
  })
}

// 我点赞的
export function getMyLikeApi() {
  return request({
    url: `/api/v1/user/my_like`,
    method: 'get'
  })
}

// 我的评论
export function getMyCommentApi() {
  return request({
    url: `/api/v1/user/my_comment`,
    method: 'get'
  })
}

// 我的创作
export function getMyCreate() {
  return request({
    url: `/api/v1/user/my_create`,
    method: 'get'
  })
}

// 我关注的
export function getMyFollowApi() {
  return request({
    url: `/api/v1/user/my_follow`,
    method: 'get'
  })
}

// 我关注的
export function getMyFansApi() {
  return request({
    url: `/api/v1/user/my_fans`,
    method: 'get'
  })
}
