const initState = {
  serviceRequestError: null,
  serviceRequest: null,
  listServiceRequests: null,
  listCms: null,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "SERVICE_REQUEST_SUCCESS":
      return {
        ...state,
        serviceRequest: action.res,
        serviceRequestError: null,
      };
    case "SERVICE_REQUEST_LIST_SUCCESS":
      return {
        ...state,
        listServiceRequests: JSON.stringify(action.res.data),
      };
    case "CMS_LIST_SUCCESS":
      return {
        ...state,
        listCms: JSON.stringify(action.res.data),
      };
    default:
      return state;
  }
};

export default userReducer;
