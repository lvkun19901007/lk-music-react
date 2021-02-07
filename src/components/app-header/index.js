import React, { memo } from 'react';

import { headerLinks } from '@/common/local-data';

import { HeaderWrapper } from './style'
import { NavLink } from 'react-router-dom';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
export default memo(function HzAppHeader() {
  const showItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </a>
      )
    }
  }
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <div className="content-left">
          <a href="/#" className="logo sprite_01"> </a>
          <ul className="select-list">
            {
              headerLinks.map((item, index) => {
                return (
                  <li className="select-item" key={item.title}>
                    {showItem(item, index)}
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="content-right">
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          <a className="center" href="/#">创作者中心</a>
          <a className="login" href="/#">登录</a>
        </div>
        
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
