import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSelectedCity } from '../actions/index';
import LocationList from './../../components/LocationList';


class LocationListsContainer extends Component {

    handleSelectionLocation = city => { this.props.setCityProp(city) }     

    render() {
        return (
        <div>
            <LocationList cities={this.props.cities} onSelectedLocation={ this.handleSelectionLocation }> </LocationList>
        </div>
        )
    }
}

// Validador de Propiedades
LocationListsContainer.propTypes = {
    setCityProp: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired
}
  
    // La funcion mapDispatch require un parametro (dispatch); dicha funcion
    // retorna un objeto que contiene una funcion llamada setCityProp, la cual recibe un parametro
    // que pasa a setSelectedCity()
  const mapDispacthToPropsActions = dispatch => ({ setCityProp: value => dispatch(setSelectedCity(value)) });
  
  export default connect(null, mapDispacthToPropsActions)(LocationListsContainer) 