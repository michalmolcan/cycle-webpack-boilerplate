import xs   from 'xstream';
import view from './page1-view'

const Page1 = (sources) => {
  const props$ = sources.Props;
  const $view = view(props$);

  return {
    DOM: xs.of($view),
    Props: props$,
  }
};

export default Page1
