import request from '~/utils/request'

export function likeApi(data) {
  return request({
    url: `/api/v1/like`,
    method: 'post',
    data
  })
}
