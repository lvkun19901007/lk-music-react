import React, { memo, useEffect, useRef, useState, useCallback } from 'react';
import { Carousel } from 'antd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getTopBannerAction } from '../../store/actionCreators';

import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style';

export default memo(function HzTopBanner() {
  // state
  const [currentIndex, setCurrentIndex] = useState(0);

  // 组件和redux关联：获取数据和进行操作
  const { topBanners } = useSelector(state => ({
    topBanners: state.getIn(['recommend', 'topBanners'])
  }), shallowEqual);

  const dispatch = useDispatch();

  // 其它hooks
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  const bannerRef = useRef();

  const bannerChange = useCallback(
    (from, to) => {
      setCurrentIndex(to);
    }, []
  )

  // 其它业务逻辑
  const bgImage = topBanners[currentIndex] && `${topBanners[currentIndex].imageUrl}?imageView&blur=40x20`;

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
        <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
          {
            topBanners.map(item => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img src={item.imageUrl} className="image" alt={item.typeTitle} />
                </div>
              )
            })
          }
        </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
      
    </BannerWrapper>
  )
})
