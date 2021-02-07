import React, { memo } from 'react';

import HzTopBanner from './c-cpns/top-banner';
import HzHotRecommend from './c-cpns/hot-recommend';
import HzNewAlbum from './c-cpns/new-album';
import HzRankingList from './c-cpns/ranking-list';
import {
  Content,
  RecommendLeft,
  RecommendRight
} from './style';

function HzRecommend() {
  
  return (
    <div>
      <HzTopBanner></HzTopBanner>
      <Content className="wrap-v2">
        <RecommendLeft>
          <HzHotRecommend />
          <HzNewAlbum />
          <HzRankingList />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </div>
  )
}


export default memo(HzRecommend);



// import React, { memo, useEffect } from 'react'
// import { connect } from 'react-redux';

// import { getTopBannerAction } from './store/actionCreators';

// function HzRecommend(props) {
//   const { topBanners, getBanners } = props;
//   useEffect(() => {
//     getBanners()
//   }, [getBanners])
//   return (
//     <div>
//       HzRecommend
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// });

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction());
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(HzRecommend));
