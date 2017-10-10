/**
 * Created by kevinellis on 10/5/17.
 */
let initialStore = {
    type: "SELECT_COUNTRY_FILTER",
    selectedCountry: "",
    selectedState: "",
    countries: {
      fetching: false,
      list: []
    },
    states: {
        fetching: false,
        list: []
    }
};

const countries = (state = {
    fetching: false,
    list: []
}, action) => {
    switch(action.type){
        case "REQUEST_COUNTRIES":
            return Object.assign({}, state, {
                fetching: true
            })
        case "RECEIVE_COUNTRIES":
            return Object.assign({}, state, {
                fetching: false,
                list: action.countries
            })
        default:
            return state;
    }
};

const states = (state = {
    fetching: false,
    list: []
}, action) => {
    switch(action.type){
        case "REQUEST_STATES":
            return Object.assign({}, state, {
                fetching: true
            })
        case "RECEIVE_STATES":
            return Object.assign({}, state, {
                fetching: false,
                list: action.states
            })
        default:
            return state;
    }
};

function countriesApp(state = initialStore, action){
    switch(action.type){
        case "SELECT_COUNTRY_FILTER":
            return Object.assign({}, state, {
                selectedCountry: action.country
            });
        case "SELECT_STATE_FILTER":
            return Object.assign({}, state, {
                selectedState: action.state
            });
        case "REQUEST_STATES":
        case "RECEIVE_STATES":
            return states(state.states, action)
        case "REQUEST_COUNTRIES":
        case "RECEIVE_COUNTRIES":
            return countries(state.countries, action)
        default:
            return state;
    }
}

export default countriesApp;