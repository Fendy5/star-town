import request from '~/utils/request'

export function commentApi(data) {
  return request({
    url: `/api/v1/comments`,
    method: 'post',
    data
  })
}

export function getCommentsApi(params) {
  return request({
    url: `/api/v1/comments`,
    method: 'get',
    params
  })
}

export function deleteCommentApi(id) {
  return request({
    url: `/api/v1/comments/${id}`,
    method: 'delete'
  })
}
