/**
 * Created by kevinellis on 10/9/17.
 */
import React from 'react';
import Select from 'react-select';
import {selectStateFilter} from '../actions/countryActions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        placeholder: 'Choose a state',
        value: state.selectedState,
        options: state.states.list
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChange: (selection) => dispatch(selectStateFilter(selection))
    }
};

const StateContainer = connect(mapStateToProps, mapDispatchToProps)(Select);

export default StateContainer;
