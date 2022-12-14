require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import cards from './modules/cards';
import tabs from './modules/tabs';
import modal, {
	modalOpen
} from './modules/modal';
import timer from './modules/timer';
import forms from './modules/forms';
import slider from './modules/slider';
import calc from './modules/calc';


window.addEventListener('DOMContentLoaded', () => {

	const modalTimerId = setTimeout(() => modalOpen('.modal', modalTimerId), 60000);

	tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
	cards();
	modal('[data-modal]', '.modal', modalTimerId);
	timer('.timer', '2022-10-13');
	forms('form', modalTimerId);
	slider({
		container: '.offer__slider',
		nextArrow: '.offer__slider-next',
		prevArrow: '.offer__slider-prev',
		slide: '.offer__slide',
		totalCounter: '#total',
		currentCounter: '#current',
		wrapper: '.offer__slider-wrapper',
		field: '.offer__slider-inner'
	});
	calc();

});