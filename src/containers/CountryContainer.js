/**
 * Created by kevinellis on 10/9/17.
 */
import React from 'react';
import Select from 'react-select';
import {fetchStates} from '../actions/countryActions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        placeholder: "Choose a Country",
        value: state.selectedCountry,
        options: state.countries.list.map( item => {return {value:item.code, label:item.name}})
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChange: (event) => dispatch(fetchStates(event.value))
    }
};

const CountryContainer = connect(mapStateToProps, mapDispatchToProps)(Select);

export default CountryContainer;
