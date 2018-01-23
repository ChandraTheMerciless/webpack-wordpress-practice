import _ from 'lodash';
import './style.css';
import CoolCat from './coolCat.png';
import Data from './data.xml';

function component() {
  var element = document.createElement('div');

  // Lodash, imported by this script
  element.innerHTML = _.join(['Hello', 'webpack', '!!!'], ' ');
  element.classList.add('hello');

  // Add image to existing div
  var cat = new Image();
  cat.src = CoolCat;

  element.appendChild(cat);

  console.log(Data);

  return element;
}

document.body.appendChild(component());
