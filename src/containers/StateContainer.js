/**
 * Created by kevinellis on 10/9/17.
 */
import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        placeholder: 'Choose a state',
        value: state.selectedState,
        options: state.states.list.map(item => {return {value:item.code, label:item.name}})
    }
};

const mapDispatchToProps = dispatch => {

};

const StateContainer = connect(mapStateToProps, mapDispatchToProps)(Select);

export default StateContainer;
