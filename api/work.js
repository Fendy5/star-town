import request from '~/utils/request'

export function addWorkApi (data) {
  return request({
    url: `/api/v1/work/create`,
    method: 'post',
    data
  })
}
