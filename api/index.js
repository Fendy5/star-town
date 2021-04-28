import request from '~/utils/request'

// 首页api
export function getIndexApi(params) {
  return request({
    url: `/api/v1/index`,
    method: 'get',
    params
  })
}
