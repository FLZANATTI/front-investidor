/* eslint quote-props: "off" */
import { lazy } from 'react';

const Pages = {
  NotFound: lazy(() => import('./Pages/404')),
};

export default Pages;
