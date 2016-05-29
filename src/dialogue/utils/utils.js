import Rx from 'rx'
import {forEach} from 'ramda'

const getUrl = event => event.target.href.replace(location.origin, ``);

const extractValue = (val, obs) => obs.map(obj => obj[val]); // return "/page1"

const events = (selector, _events) => {
  return Rx.Observable.merge(
    _events.map(event => selector.events(event))
  )
};

const requireSources = (componentName, sources, ...sourcesNames) => {
  forEach(n => {
    if (!sources[n]) {
      throw new Error(`${componentName} must have ${n} specified`)
    }
  }, sourcesNames)
}

export {
  requireSources,
  getUrl,
  extractValue,
  events,
}
