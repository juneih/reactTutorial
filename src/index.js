import {createStore} from 'redux';
import React from 'react';
import { render } from 'react-dom';

function reducer (counter=0, action){
	if (action.type === 'USER_CLICKED'){
		counter++;
		console.log(counter);
	}
	return counter;
}

let store = createStore(reducer);


document.addEventListener('click', () => store.dispatch({ type: 'USER_CLICKED' }));



function Counter(props) {
  return <div>{props.counter}</div>;
}

let MyApp = () => {
	render(<Counter counter={store.getState()} />, document.querySelector('#app'));
}

store.subscribe(MyApp, document.querySelector('#app'));

MyApp();
