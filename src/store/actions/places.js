import * as actionTypes from './actionTypes';

/*
export const addPlace = (placeName, location, image) => {
  return {
    type: actionTypes.ADD_PLACE,
    placeName: placeName,
    location: location,
    image: image
  };
};
*/

export const addPlace = (placeName, location, image) => {
  return dispatch => {
    const placeData = {
      name: placeName,
      location: location
    };
    fetch('https://awesome-places-r-1519732224475.firebaseio.com/places.json', {
      method: 'POST',
      body: JSON.stringify(placeData)
    })
      .catch(err => console.log(err))
      .then(res => res.json())
      .then(parsedRes => {
        console.log(parsedRes);
      });
  };
};

export const deletePlace = key => {
  return {
    type: actionTypes.DELETE_PLACE,
    placeKey: key
  };
};

/*export const selectPlace = key => {
  return {
    type: actionTypes.SELECT_PLACE,
    key: key
  };
};

export const deselectPlace = () => {
  return {
    type: actionTypes.DESELECT_PLACE
  };
};*/
