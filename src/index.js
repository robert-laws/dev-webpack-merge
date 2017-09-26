import { cube, square_root } from './math.js';

if(process.env.NODE_ENV !== 'production') {
  console.log("Looks like we are in development mode!")
} else {
  console.log("production mode!")
}

function component() {
  var element = document.createElement('div')
  var preElement = document.createElement('pre')
  var horizontalRule = document.createElement('hr')
  var preElement2 = document.createElement('pre')

  preElement.innerHTML = [
    'Hello webpack!!',
    '7 cubed is equal to ' + cube(7)
  ].join('\n\n');

  preElement2.innerHTML = [
    'Howdy again!',
    'The square root of 81 is ' + square_root(81)
  ].join('\n\n')

  element.appendChild(preElement)
  element.appendChild(horizontalRule)
  element.appendChild(preElement2)

  return element
}

let element = component()
document.body.appendChild(element)

if (module.hot) {
  module.hot.accept('./math.js', function() {
    console.log('Accepting the updated myMath module!');
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    document.body.appendChild(element);
  })
}