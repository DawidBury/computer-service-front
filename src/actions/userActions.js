import axios from "axios";
import apiUrl from "../config/env";

export const createServiceRequest = (data) => {
  return (dispatch, getState) => {
    axios
      .post(
        `${apiUrl}/service-requests`,
        {
          subject: data.subject,
          description: data.description,
          customerId: data.user.customerId,
        },
        {
          headers: { Authorization: `Bearer ${data.user.token}` },
        }
      )
      .then(function (res) {
        dispatch({ type: "SERVICE_REQUEST_SUCCESS", res });
        return true;
      })
      .catch(function (err) {
        return false;
      });
  };
};

export const listServiceRequests = (data) => {
  return (dispatch, getState) => {
    axios
      .get(`${apiUrl}/service-requests/users`, {
        headers: { Authorization: `Bearer ${data.user.token}` },
      })
      .then(function (res) {
        dispatch({ type: "SERVICE_REQUEST_LIST_SUCCESS", res });
        return true;
      })
      .catch(function (err) {
        return false;
      });
  };
};

export const listCMS = () => {
  return (dispatch, getState) => {
    axios
      .get(`${apiUrl}/cms/active`)
      .then(function (res) {
        dispatch({ type: "CMS_LIST_SUCCESS", res });
        return true;
      })
      .catch(function (err) {
        return false;
      });
  };
};
