import React, { Component } from 'react';
// connect() permite conectar a los componentes que necesite el acceso al store
// import { connect } from 'eact-redux';
import './App.css';
import { Row, Col, Menu, Icon } from 'antd';

import LocationListContainer from './redux/containers/LocationListContainer';
import ForecastExtendedContainer from './redux/containers/ForecastExtendedContainer';


// Carpeta actions
// import { setCity } from './actions/index';

// Carpeta store
// import { store } from './store/index';

// Un action es simplemente un objeto identificado por un type: y un value:
// const setCity = value => ({ type: 'setCity', value });

  const SubMenu = Menu.SubMenu;
  const MenuItemGroup = Menu.ItemGroup;    

// =============================================================== //

const cities = [ 'Bogota,co', 'La Dorada,co', 'Honda,co', 'Puerto Salgar,co' ];

class App extends Component {

  constructor() {
    super();
    this.state = { current: 'mail' }
  }

  // Metodo que establecer la propiedad current para el Menú.
  handleClick = (e) => { this.setState({ current: e.key }) }

  render() {    

    return (
      <div>
        <Row>
          <Col>
          <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <Menu.Item key="mail">
                <Icon type="mail" />Navigation One
              </Menu.Item>
              <Menu.Item key="app" >
                <Icon type="appstore" />Navigation Two
              </Menu.Item>
              <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
                <MenuItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <Menu.Item key="alipay">
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
              </Menu.Item>
            </Menu>

          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <div className="App">
              <LocationListContainer cities={cities}></LocationListContainer>
            </div>          
          </Col>  
          <Col span={12}>
            <div className="detail">               
              <ForecastExtendedContainer ></ForecastExtendedContainer>
            </div>          
          </Col>       
        </Row>        
      </div>
    );
  }
}

export default App;