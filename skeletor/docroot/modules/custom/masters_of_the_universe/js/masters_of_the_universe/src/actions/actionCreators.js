const $ = jQuery // assuming this app is on a Drupal page with jQuery

/**
 * App init action.
 */
export function init() {
  return (dispatch, getState) => {
    let state = getState();

    Promise.all([
      dispatch(getData())
    ]);
  }
}

function getData() {
 return function (dispatch, getState) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        $.ajax({
            url: '/api/albums?_format=json',
            type: 'GET',
            timeout: 5000
          }).then(data => {
            dispatch(getDataSuccess(data.albums));
            resolve(true);
        });
      }, 5000);
    });
  }
}

function getDataPending() {
  return {
    type: 'GET_DATA_PENDING'
  }
}

function getDataSuccess(data) {
  return {
    type: 'GET_DATA_SUCCESS',
    data
  }
}

function getDataFail(error) {
  return {
    type: 'GET_DATA_FAIL',
    error
  }
}

export function searchTitle(search) {
  return {
    type: 'SEARCH_TITLE',
    search
  }
}
