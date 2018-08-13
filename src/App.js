import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';
import { Row, Col, Menu, Icon } from 'antd';
import ForecastExtended from './components/ForecastExtended';

  const cities = [
    'Bogota,co',
    'La Dorada,co',
    'Honda,co',
    'Puerto Salgar,co'
  ];

  const SubMenu = Menu.SubMenu;
  const MenuItemGroup = Menu.ItemGroup;    

class App extends Component {

  constructor() {
    super();

    this.state = {
      city: null,
      current: 'mail'
    }
  }

  handleSelectionLocation = city => {
    this.setState({ city });    
  } 
    
  handleClick = (e) => {    

    this.setState({
      current: e.key,
    });
  }

  render() {

    const { city } = this.state;

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
              <LocationList cities={cities} onSelectedLocation={ this.handleSelectionLocation }></LocationList>
            </div>          
          </Col>  
          <Col span={12}>
            <div className="detail">               
              { !city ? <h1>Nothing City</h1> : <ForecastExtended city={ city }></ForecastExtended> }
            </div>          
          </Col>       
        </Row>        
      </div>
    );
  }
}

export default App;