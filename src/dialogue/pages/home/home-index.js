import xs from 'xstream'
import isolate from '@cycle/isolate'
import {div, h1} from '@cycle/dom'

function Home (sources) {
  return {
    DOM: xs.of(
      div({}, [
        h1('.welcome', 'Cycle.js Diversity XStream Boilerplate!')
      ]))
  }
}

export default sources => isolate(Home)(sources)

// import view   from './home-view'
// import intent from './home-intent'
// import model  from './home-model'
//
// // returning our DOM
// const Home = (sources) => {
//   const props$ = sources.Props;
//   const actions = intent(sources);
//   const state$ = model({...actions,props$});
//
//   return {
//     DOM: view(state$),
//     Props: state$,
//   }
// };
//
// export default Home
