import '../css/app.scss';
import './slider/sliderDOM';
import './maps/maps';
import './menu';

if(navigator.serviceWorker){
    navigator.serviceWorker.register('sw.js')
}