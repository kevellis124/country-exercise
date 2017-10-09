/**
 * Created by kevinellis on 10/9/17.
 */
import React from 'react';
import Select from 'react-select';
import {selectCountryFilter} from '../actions/countryActions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        placeholder: "Choose a Country",
        value: state.selectedCountry,
        options: state.countries.list
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChange: (selection) => dispatch(selectCountryFilter(selection))
    }
};

const CountryContainer = connect(mapStateToProps, mapDispatchToProps)(Select);

export default CountryContainer;
