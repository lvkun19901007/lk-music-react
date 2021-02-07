import request from './axios';

export function getTopBanners() {
  return request({
    url: '/banner'
  });
}

export function getHotRecommends() {
  return request({
    url: '/personalized'
  });
}

export function getNewAlbum(limit, offset) {
  return request({
    url: '/top/album',
    params: {
      limit,
      offset
    }
  });
}

export function getTopList(idx) {
  return request({
    url: "/top/list",
    params: {
      idx
    }
  });
}


export function getArtistList(limit, cat) {
  return request({
    url: "/artist/list",
    params: {
      cat,
      limit
    }
  });
}