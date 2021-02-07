import React, { memo, useEffect, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'antd';

import { AlbumWrapper } from './style';
import { getNewAlbumAction } from '../../store/actionCreators';

import HzThemeHeaderRCM from '@/components/theme-header-rcm';
import HzAlbumCover from '@/components/album-cover';


export default memo(function HzHotRecommend() {

  // redux hooks
  const dispatch = useDispatch();
  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(['recommend', 'newAlbums'])
  }), shallowEqual);

  // other hooks
  useEffect(() => {
    dispatch(getNewAlbumAction(10, 0));
  }, [dispatch]);

  const albumRef = useRef();

  return (
    <AlbumWrapper>
      <HzThemeHeaderRCM 
        title="新碟上架"
        moreLink="/discover/album" />
      <div className="content">
        <button className="arrow arrow-left sprite_02" onClick={e => albumRef.current.prev()}></button>
        <div className="album">
          <Carousel ref={albumRef}>
            {
              [0, 1].map(item => {
                return (
                  <div key={item} className="page">
                    {
                      newAlbums.slice(item * 5, (item + 1) * 5).map((albumItem) => {
                        return (
                          <HzAlbumCover key={albumItem.id} info={albumItem} />
                        )
                      })
                    }
                  </div>
                )  
              })
            }
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02" onClick={e => albumRef.current.next()}></button>
      </div>
    </AlbumWrapper>
  )
})
