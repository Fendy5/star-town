import request from '~/utils/request'

export function getWorksApi(params) {
  return request({
    url: `/api/v1/works`,
    method: 'get',
    params
  })
}
