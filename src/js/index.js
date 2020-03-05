import {fieldGeneration} from './generation.js';
import {start} from './start.js';

window.onload = fieldGeneration;
document.getElementById('start').addEventListener('click', start);