import { React, ReactSubApp } from "@xarc/react";
import { reduxFeature, connect } from "@xarc/react-redux";
export { reduxReducers } from "./reducers";
// CSS module support for .styl
import styles from "../styles/search.mod.styl";
// CSS module support for .css
import styles2 from "../styles/search.mod.css";

const queryType = () => {
  return {
    type: "QUERY_TYPE",
  };
};

const queryParams = () => {
  return {
    type: "QUERY_PARAMS",
  };
};

const Search = (props) => {
  const { value, dispatch } = props;

  return (
      <div style={{ padding: "5px", border: "solid", marginLeft: "15%", marginRight: "15%" }}>
        <label htmlFor="queryType">Search by:</label>
        <select name="selectType" id="selectType" onChange={() => dispatch(queryType())}>
          <option value="artist">Artist</option>
        </select><br></br>
        <label htmlFor="queryParams">Query Params:</label>
        <input type="text" id="queryParams"></input><br></br>
        <input type="submit" value="Submit" onClick={() => dispatch(queryParams())}></input>
      </div>
  );
};

const mapStateToProps = (state) => {
  return { value: state.queryParams.value };
};

export const subapp: ReactSubApp = {
  Component: connect(mapStateToProps, (dispatch) => ({ dispatch }))(Search),
  wantFeatures: [
    reduxFeature({
      React,
      shareStore: true,
      reducers: true, // true => read the reduxReducers export from this file
      prepare: async (initialState) => {
        return { initialState: initialState || { number: { value: '' } } };
      },
    }),
  ]
};
