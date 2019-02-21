import React, { useState, useReducer } from 'react';
import Layout from '../components/Layout';
import '../styles/styles.css';

const initialState = [
  'some metal',
  'huge diamonds',
  'a toothpick in my pocket from a long time ago that pokes my leg sometimes',
];

function thingsReducer(state, action) {
  switch (action.type) {
    case 'addThing':
      return [...state, action.payload];
    case 'removeThing': {
      const newState = [...state];
      newState.splice(action.payload, 1);
      return newState;
    }
    default:
      return state;
  }
}

const UseReducerComponent = () => {
  const [state, dispatch] = useReducer(thingsReducer, initialState);
  const [newThing, setNewThing] = useState('');

  return (
    <Layout>
      <div style={{ width: '100%' }}>
        <b>All your favorite things:</b>
        {state.map((thing, ix) => (
          <div key={thing}>
            <div className="spacer-m" />
            <div className="between-row">
              <div>{thing}</div>
              <div className="spacer-sm" />
              <button
                className="input"
                onClick={() => dispatch({ type: 'removeThing', payload: ix })}
                type="button"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <hr className="thick-rule" />
        <div>
          <b>Add a thing:</b>
          <div className="spacer-m" />
          <div>
            <input
              className="input"
              type="text"
              value={newThing}
              onChange={({ target }) => setNewThing(target.value)}
            />
          </div>
          <div className="spacer-sm" />
          <button
            className="input"
            onClick={() => dispatch({ type: 'addThing', payload: newThing })}
          >
            Add Thing
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default UseReducerComponent;
