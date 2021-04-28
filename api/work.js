import request from '~/utils/request'

export function addWorkApi (data) {
  return request({
    url: `/api/v1/works`,
    method: 'post',
    data
  })
}

export function getWorkApi (id) {
  return request({
    url: `/api/v1/works/${id}`,
    method: 'get'
  })
}
