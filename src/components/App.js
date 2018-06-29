
import React from 'react';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import importedComponent from "react-imported-component";

import Home from './Home';
import Loading from './Loading';
// import DynamicPage from "./DynamicPage";
// import NoMatch from "./NoMatch";

const AsyncDymanicPage = importedComponent(() =>
  import(/* webpackChunkName:'DynamicPage' */ "./DynamicPage"),
  {
    LoadingCompoent : Loading
  }
);
const AsyncNoMatch = importedComponent(
  () => import(/* webpackChunkName:'NoMatch' */ "./NoMatch"),
  {
    LoadingComponent: Loading
  }
);

// 리액트 라우터로 페이지 경로와 컴포넌트를 연결할 차례다.
const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dynamic" component={AsyncDymanicPage} />
          <Route component={AsyncNoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;