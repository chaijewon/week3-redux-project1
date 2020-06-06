import React from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Category from "./components/Category";
import CateFood from "./components/CateFood";
import FoodDetail from "./components/FoodDetail";
import {Provider} from 'react-redux'
import store from './store/store'
function App() {
  return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path={"/"} component={Category}/>
            <Route path={"/cate_food/:cno"} component={CateFood}/>
            <Route path={"/food_detail"} component={FoodDetail}/>
          </Switch>
        </Router>
      </Provider>

  );
}

export default App;
