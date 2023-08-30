import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Contact from '../pages/Contact';
import ChartsAndMaps from '../pages/ChartsAndMaps';
import CreateContact from '../pages/CreateContact';
import EditContact from '../pages/EditContact';
import ViewContact from '../pages/ViewContact';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: <Contact />,
      },
      {
        path: '/charts-and-maps',
        loader: async()=>{
          return fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
        },
        element: <ChartsAndMaps />,
      },
      {
        path: '/create-contact',
        element: <CreateContact />,
      },
      {
        path: '/edit-contact/:id',
        element: <EditContact />,
      },
      {
        path: '/view-contact/:id',
        element: <ViewContact />,
      },
    ],
  },
]);

export default routes;