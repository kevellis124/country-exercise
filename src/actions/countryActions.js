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
        type: "SELECT_COUNTRY_FILTER",
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
        states: json.data
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
        countries: json.data
    }
}