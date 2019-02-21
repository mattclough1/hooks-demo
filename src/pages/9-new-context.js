import React, { useState, useContext } from 'react';
import Layout from '../components/Layout';
import '../styles/styles.css';

const MyContext = React.createContext({});

const FoodProvider = ({ children }) => {
  const [foods, setFoods] = useState({
    currentFavoriteFood: 'oranges',
    currentLeastFavoriteFood: 'old bread',
  });
  return <MyContext.Provider value={{ foods, setFoods }}>{children}</MyContext.Provider>;
};

const FoodDisplay = () => {
  const { foods } = useContext(MyContext);
  return (
    <div>
      <b>Current Favorite Food:</b>
      <div className="spacer-sm" />
      <div className="blue">{foods.currentFavoriteFood}</div>
      <div className="spacer-m" />
      <b>Current Least Favorite Food:</b>
      <div className="spacer-sm" />
      <div className="blue">{foods.currentLeastFavoriteFood}</div>
    </div>
  );
};

const FoodSetter = () => {
  const { foods, setFoods } = useContext(MyContext);
  return (
    <div>
      <b>What's your favorite Food?</b>
      <div className="spacer-sm" />
      <input
        className="input"
        type="text"
        value={foods.currentFavoriteFood}
        onChange={({ target }) => {
          setFoods((prevFoods) => ({ ...prevFoods, currentFavoriteFood: target.value }));
        }}
      />
      <div className="spacer-m" />
      <b>Least favorite?</b>
      <div className="spacer-sm" />
      <input
        className="input"
        type="text"
        value={foods.currentLeastFavoriteFood}
        onChange={({ target }) => {
          setFoods((prevFoods) => ({ ...prevFoods, currentLeastFavoriteFood: target.value }));
        }}
      />
    </div>
  );
};

const NewContext = () => (
  <Layout>
    <div style={{ width: '100%' }}>
      <FoodProvider>
        <FoodDisplay />
        <hr className="thick-rule" />
        <FoodSetter />
      </FoodProvider>
    </div>
  </Layout>
);

export default NewContext;
