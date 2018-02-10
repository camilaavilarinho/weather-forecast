/* dom.js */

require('isomorphic-fetch'); //solve ReferenceError: fetch is not defined ref: https://stackoverflow.com/questions/38485826/getting-referenceerror-fetch-is-not-defined-when-running-react-native-tests-in

var jsdom = require('jsdom').jsdom;
var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};
