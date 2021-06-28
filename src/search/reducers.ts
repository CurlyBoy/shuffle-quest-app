import { get } from '../server/services/musicbrainz';

const queryParams = (store, action) => {
  if (action.type === "QUERY_PARAMS") {
    console.log(action)
    const poop = get(action.payload.queryType, action.payload.queryParams);
    return {
      value: poop
    };
  } else {
    return {
      value: 'fail'
    };
  }
};

export const reduxReducers = {
  queryParams
};
