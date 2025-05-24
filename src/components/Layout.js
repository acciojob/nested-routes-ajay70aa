import React from 'react'
import { useRouteMatch, Route, Link, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Grooming from './Grooming';
import Shirt from './Shirt';
import Trouser from './Trouser';
import Jewellery from './Jewellery';

const Layout = () => {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <h1>Women Items</h1>
      <ul>
        <li><Link to={`${url}/grooming`}>Grooming</Link></li>
        <li><Link to={`${url}/shirt`}>Shirt</Link></li>
        <li><Link to={`${url}/trouser`}>Trouser</Link></li>
        <li><Link to={`${url}/jewellery`}>Jewellery</Link></li>
      </ul>
      <Switch>
        <Route path={`${path}/grooming`} component={Grooming}/>
        <Route path={`${path}/shirt`} component={Shirt}/>
        <Route path={`${path}/trouser`} component={Trouser}/>
        <Route path={`${path}/jewellery`} component={Jewellery}/>
      </Switch>
      
    </div>
  )
}

export default Layout