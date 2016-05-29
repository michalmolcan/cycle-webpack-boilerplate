import xs   from 'xstream';
import view from './page2-view'

const Page2 = (sources) => {
  const props$ = sources.Props;
  const $view = view(props$);

  return {
    DOM: xs.of($view),
    Props: props$,
  }
};

export default Page2
