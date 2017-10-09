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
        default:
            return state;
    }
}

export default countriesApp;