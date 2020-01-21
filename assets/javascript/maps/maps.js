import styles from './styles';

function initMap(){
    const coords = {
        lat : 48.856613,
        lng : 2.352222
    };
    let map =   new google.maps.Map(document.querySelector('#map'),{
        center :coords,
        zoom : 13,
        styles
    });
    let marker = new google.maps.Marker({
        position : coords,
        map
    })

}

initMap();