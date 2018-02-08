import React from 'react';
import { hashHistory } from 'react-router';
import { NavBar, Drawer } from 'antd-mobile';
import { Router, Route, IndexRoute, Link } from 'react-router';


import { Grid } from 'antd-mobile';
import { Icon } from 'antd-mobile';

// not use `babel-plugin-import`
// import 'antd-mobile/dist/antd-mobile.css';
// import NavBar from 'antd-mobile/lib/nav-bar';
// import 'antd-mobile/lib/nav-bar/style/css';
// import Drawer from 'antd-mobile/lib/drawer';
// import 'antd-mobile/lib/drawer/style/css';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'app',
      open: false,
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    };
  }
  onClick = (el, index) => {
      console.log(el);
      console.log(index);
      if(index == 0){
        location.replace("#/s1");
      }
      if(index == 1){
        location.replace("#/s2");
      }
      if(index == 2){
        location.replace("#/s3");
      }
  }
  render() {
    const  data = [{
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: `连接1`,
    },{
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: `连接2`,
    },{
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: `连接3`,
    }]
    return (
      <div>
      <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >app名字</NavBar>
        <Grid data={data} onClick={this.onClick} columnNum={3} />
      </div>
    );
  }
}
