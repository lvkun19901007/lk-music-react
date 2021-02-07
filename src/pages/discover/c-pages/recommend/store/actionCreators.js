import * as actionTypes from './constants';

import { 
  getTopBanners, 
  getHotRecommends, 
  getNewAlbum,
  getTopList
} from '@/services/recommend';


const changeTopBannerAction = res => ({
  type: actionTypes.CHANGE_TOP_BNNAER,
  topBanners: res.banners
});

const changeHotRecommendAction = res => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
});

const changeNewAlbumAction = res => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.albums
});

const changeUpListAction = (res) => ({
  type: actionTypes.CHANGE_UP_LIST,
  topUpList: res.playlist
});

const changeNewListAction = (res) => ({
  type: actionTypes.CHANGE_NEW_LIST,
  topNewList: res.playlist
});

const changeOriginListAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_LIST,
  topOriginList: res.playlist
});

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res));
    });
  }
}

export const getHotRecommendAction = () => {
  return dispatch => {
    getHotRecommends().then(res => {
      dispatch(changeHotRecommendAction(res));
    });
  }
}

export const getNewAlbumAction = (limit, offset) => {
  return dispatch => {
    getNewAlbum(limit, offset).then(res => {
      dispatch(changeNewAlbumAction(res));
    });
  }
}

export const getTopData = (idx) => {
  return dispatch => {
    getTopList(idx).then(res => {
      switch (idx) {
        case 0:
          dispatch(changeNewListAction(res));
          break;
        case 2:
          dispatch(changeOriginListAction(res));
          break;
        case 3:
          dispatch(changeUpListAction(res));
          break;
        default:
          console.log("其他数据处理");
      }
    })
  }
}
