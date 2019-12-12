 import { clearList } from '../actions';
 import { connect } from 'react-redux';
 import React from 'react';
 
 let ClearList = ({ dispatch }) => (
    <button className="btn btn-danger"
            onClick={() => dispatch(clearList())}>
        Clear list
    </button>
 )

ClearList = connect()(ClearList);

 export default ClearList;