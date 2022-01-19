import React from 'react';
import {Button,Menu,Typography,Avatar} from 'antd';
import {Link} from 'react-router-dom';
import {HomeOutlined, MoneyCollectOutLined,BulbOutlined,FundOutlined,MenuOutlined} from '@ant-design/icons';


const Navbar=()=> {

  return <div className="nav-conatiner">
      <div className="logo-continer">
          <avatar />
          <Typography.Title level={2} className="logo">
              <Link to="/">Cryptoverse</Link>
          </Typography.Title>

      {/*    <Button className="menu-control-container">

</Button>*/ }
      </div>
  </div>;
}

export default Navbar;
