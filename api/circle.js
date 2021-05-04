import request from '~/utils/request'

export function addCircle(data) {
  return request({
    url: `/api/v1/circles`,
    method: 'post',
    data
  })
}

export function getCirclesApi(params) {
  return request({
    url: `/api/v1/circles`,
    method: 'get',
    params
  })
}

export function getCircleApi(ccId) {
  return request({
    url: `/api/v1/circles/${ccId}`,
    method: 'get'
  })
}
