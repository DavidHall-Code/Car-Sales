//Action to ADD_FEATURE
export const addFeature = (feature) => dispatch => {
    console.log('Your ADD_FUNCTION is working');
    return dispatch({type: 'ADD_FEATURE', payload: feature})
}

//Action to REMOVE_FEATURE
export const removeFeature = (feature) => dispatch => {
    return dispatch({type: 'REMOVE_FEATURE', payload: feature})
}  