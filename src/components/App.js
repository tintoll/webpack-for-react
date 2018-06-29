
import React from 'react';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import Home from './Home';
import DynamicPage from "./DynamicPage";
import NoMatch from "./NoMatch";

// 리액트 라우터로 페이지 경로와 컴포넌트를 연결할 차례다.
const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dynamic" component={DynamicPage} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;