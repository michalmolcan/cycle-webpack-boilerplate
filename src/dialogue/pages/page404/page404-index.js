import xs   from 'xstream';
import view from './page404-view'

const Page404 = () => {
  const view$ = xs.of(view());
  return {
    DOM: view$
  }
};

export default Page404
