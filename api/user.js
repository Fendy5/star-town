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
export function getUserCenterApi(params) {
  return request({
    url: `/api/v1/user`,
    method: 'get',
    params
  })
}

// 我点赞的
export function getMyLikeApi(params) {
  return request({
    url: `/api/v1/user/my_like`,
    method: 'get',
    params
  })
}

// 我的评论
export function getMyCommentApi(params) {
  return request({
    url: `/api/v1/user/my_comment`,
    method: 'get',
    params
  })
}

// 我的创作
export function getMyCreate(params) {
  return request({
    url: `/api/v1/user/my_create`,
    method: 'get',
    params
  })
}

// 我关注的
export function getMyFollowApi(params) {
  return request({
    url: `/api/v1/user/my_follow`,
    method: 'get',
    params
  })
}

// 我关注的
export function getMyFansApi(params) {
  return request({
    url: `/api/v1/user/my_fans`,
    method: 'get',
    params
  })
}
