import '../../assets/css/app.scss';
import './slider/sliderDOM';
import './maps/maps';
import './menu';
import './imgs/imgSrcs'

if(navigator.serviceWorker){
    navigator.serviceWorker.register('sw.js')
}