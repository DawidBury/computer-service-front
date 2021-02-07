const initState = {
    serviceRequestError: null,
    serviceRequest: null
}
  
const userReducer = (state = initState, action) => {
    switch (action.type) {
    case 'SERVICE_REQUEST_SUCCESS':
        return {
            ...state,
            serviceRequest: action.res,
            serviceRequestError: null,
        }

    default:
        return state
    }
};
  
export default userReducer;