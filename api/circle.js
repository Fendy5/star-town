import request from '~/utils/request'

export function addCircle(data) {
  return request({
    url: `/api/v1/circles`,
    method: 'post',
    data
  })
}
