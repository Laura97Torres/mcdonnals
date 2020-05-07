
import HomePage from '../pages/home.f7.html';
import mcdelivery from '../pages/mcdelivery.f7.html';
import cupones from '../pages/cupones.f7.html';
import miscupones from '../pages/miscupones.f7.html';
import tourdenuestracocina from '../pages/tourdenuestracocina.f7.html';


var routes = [
  {
    path: '/',
    component: HomePage,
  },

  {
    path: '/mcdelivery/',
    component: mcdelivery,
  },

  {
    path: '/cupones/',
    component: cupones,
  },

  {
    path: '/tourdenuestracocina/',
    component: tourdenuestracocina,
  },

  {
    path: '/miscupones/',
    component: miscupones,
  },
];

export default routes;
