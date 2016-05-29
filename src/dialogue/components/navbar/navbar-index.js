import view from './navbar-view'

const navbar = (sources, route$) => {

  const view$ = view(sources, route$);
  return {
    DOM: view$,
  }
};

export default navbar;
