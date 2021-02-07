import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { HotRecommendWrapper } from './style';
import HzThemeHeaderRCM from '@/components/theme-header-rcm';
import HzThemeCover from '@/components/theme-cover';
import { getHotRecommendAction } from '../../store/actionCreators';


export default memo(function HzHotRecommend() {
  // state

  // redux hooks

  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(['recommend', 'hotRecommends'])
  }), shallowEqual);
  const dispatch = useDispatch();
  

  // other hooks

  useEffect(() => {
    dispatch(getHotRecommendAction());
  }, [dispatch]);

  return (
    <HotRecommendWrapper>
      <HzThemeHeaderRCM 
        title="热门推荐" 
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]} 
        moreLink="/discover/songs" />
      <div className="recommend-list">
        {
          hotRecommends.slice(0, 8).map(item => {
            return <HzThemeCover key={item.id} info={item} />
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
