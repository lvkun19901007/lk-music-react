
import { Redirect } from 'react-router-dom';


import HzDiscover from '@/pages/discover';
import HzRecommend from '@/pages/discover/c-pages/recommend';
import HzRanking from '@/pages/discover/c-pages/ranking';
import HzSongs from '@/pages/discover/c-pages/songs';
import HzDjRadio from '@/pages/discover/c-pages/djradio';
import HzArtist from '@/pages/discover/c-pages/artist';
import HzAlbum from '@/pages/discover/c-pages/album';
import HzFriend from '@/pages/friend';
import HzMine from '@/pages/mine';


const routes = [
  {
    path: '/',
    exact: true,
    render: () => (
      <Redirect to="/discover" />
    )
  },
  {
    path: '/discover',
    component: HzDiscover,
    routes: [
      {
        path:'/discover',
        exact: true,
        render: () => (
          <Redirect to='/discover/recommend' />
        )
      },
      {
        path:'/discover/recommend',
        component: HzRecommend
      },
      {
        path:'/discover/ranking',
        component: HzRanking
      },
      {
        path:'/discover/songs',
        component: HzSongs
      },
      {
        path:'/discover/djradio',
        component: HzDjRadio
      },
      {
        path:'/discover/artist',
        component: HzArtist
      },
      {
        path:'/discover/album',
        component: HzAlbum
      }
    ]
  },
  {
    path: '/friend',
    component: HzFriend
  },
  {
    path: '/mine',
    component: HzMine
  }
];

export default routes;