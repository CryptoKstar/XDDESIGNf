import { Switch, Route } from 'react-router-dom';
import DashboardApp from './pages/DashboardApp';
import One from './pages/One';
import Two from './pages/Two';
import Three from './pages/Three';
import Four from './pages/Four';
import Five from './pages/Five';
import Six from './pages/Six';
import Seven from './pages/Seven';


export default function Router() {
  return (
    <Switch>
      <Route path="/" component={DashboardApp} exact />
      <Route path="/app" component={DashboardApp} exact />
      <Route path="/one" component={One} exact />
      <Route path="/two" component={Two} exact />
      <Route path="/three" component={Three} exact />
      <Route path="/four" component={Four} exact />
      <Route path="/five" component={Five} exact />
      <Route path="/six" component={Six} exact />
      <Route path="/seven" component={Seven} exact />
    </Switch>
  )
}