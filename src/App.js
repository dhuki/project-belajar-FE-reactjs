import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './container/home/Home';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers react lazy use while component still waiting to load completely
const DefaultLayout = React.lazy(() => import('./container/home/Home')); 
const DetailBarang = React.lazy(() => import('./container/detailBarang/DetailBarang')); 

function App() {
  return (
    <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              {/* <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} /> */}
              <Route exact path="/detail/:id" name="detail-barang" render={props => <DetailBarang {...props}/>} />
              <Route exact path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
  );
}

export default App;
