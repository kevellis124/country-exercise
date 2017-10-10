/**
 * Created by kevinellis on 10/6/17.
 */
export const selectCountryFilter = country => {
    return {
        type: "SELECT_COUNTRY_FILTER",
        country: country
    }
}

export const selectStateFilter = state => {
    return {
        type: "SELECT_STATE_FILTER",
        state: state
    }
}

export const requestStates = country => {
    return {
        type: "REQUEST_STATES",
        country: country
    }
}

export const receiveStates = json => {
    return {
        type: "RECEIVE_STATES",
        states: json
    }
}

export const requestCountries = () => {
    return {
        type: "REQUEST_COUNTRIES"
    }
}

export const receiveCountries = json => {
    return {
        type: "RECEIVE_COUNTRIES",
        countries: json
    }
}

export function fetchCountries(){
    return dispatch => {
        dispatch(requestCountries());
        return fetch(`https://xc-ajax-demo.herokuapp.com/api/countries/`)
            .then(response => response.json())
            .then(json => dispatch(receiveCountries(json)));
    }
}

export function fetchStates(country){
    return dispatch => {
        dispatch(requestStates(country));
        const headers = new Headers({"Content-Type": "application/x-www-form-urlencoded"});
        return fetch(`https://xc-ajax-demo.herokuapp.com/api/states/`, {
            headers: headers,
            method: 'post',
            body: "country=" + country.toString()
        })
            .then(response => response.json())
            .then(json => dispatch(receiveStates(json)));
    }
}