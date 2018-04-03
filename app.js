import Fluxible from 'fluxible';
import DevToolsPlugin from 'fluxible-plugin-devtools';
import Application from './components/Application';

// stores
import ApplicationStore from './stores/ApplicationStore';
import RouteStore from './stores/RouteStore';
import UserStore from './stores/UserStore';
import FeedStore from './stores/FeedStore';

import fetchr from 'fluxible-plugin-fetchr';

const fetchrInstance = fetchr({
  xhrPath: '/api',
});

// create new fluxible instance
const app = new Fluxible({
  component: Application
});

app.plug(DevToolsPlugin());
app.plug(fetchrInstance);

// needed to enable devtools
app.createContext({
  debug: true,
});

// register stores
app.registerStore(RouteStore);
app.registerStore(ApplicationStore);
app.registerStore(UserStore);
app.registerStore(FeedStore);

export default app;
