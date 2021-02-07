import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { RankingWrapper } from './style';
import { getTopData } from '../../store/actionCreators';

import HzThemeHeaderRCM from '@/components/theme-header-rcm';
import HzTopRanking from '@/components/top-ranking';


export default memo(function HzHotRecommend() {

  // redux hooks
  const dispatch = useDispatch();

  const { topUpList, topNewList, topOriginList } = useSelector(state => ({
    topUpList: state.getIn(['recommend', 'topUpList']),
    topNewList: state.getIn(['recommend', 'topNewList']),
    topOriginList: state.getIn(['recommend', 'topOriginList'])
  }), shallowEqual);

  // other hooks
  useEffect(() => {
    dispatch(getTopData(0));
    dispatch(getTopData(2));
    dispatch(getTopData(3));
  }, [dispatch]);

  return (
    <RankingWrapper>
      <HzThemeHeaderRCM 
        title="榜单"
        moreLink="/discover/ranking" />
      <div className="tops">
        <HzTopRanking info={topUpList} />
        <HzTopRanking info={topNewList} />
        <HzTopRanking info={topOriginList} />
      </div>
    </RankingWrapper>
  )
})
