import request from '~/utils/request'

// 获取作品
export function getWorksApi(params) {
  return request({
    url: `/api/v1/works`,
    method: 'get',
    params
  })
}

// 关注用户
export function addFollowApi(data) {
  return request({
    url: `/api/v1/follows`,
    method: 'post',
    data
  })
}
