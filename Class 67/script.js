console.log('drag n drop practice');

const zone1 = document.querySelector('.zone-1');
const zone2 = document.querySelector('.zone-2');
const zone3 = document.querySelector('.zone-3');
const zone4 = document.querySelector('.zone-4');

const item = document.querySelector('.item');

zone1.addEventListener('dragover', allowDrop);
zone2.addEventListener('dragover', allowDrop);
zone4.addEventListener('dragover', allowDrop);


function allowDrop(event) {
    event.preventDefault();
}

item.addEventListener('dragstart', drag);

function drag(event) {
    event.dataTransfer.setData('class', event.target.className);
    console.log(event.dataTransfer)
}

zone1.addEventListener('drop', drop);
zone1.addEventListener('drop', setLandingZone);
zone1.addEventListener('dragleave', removeLandingZone);


zone2.addEventListener('drop', drop);
zone2.addEventListener('drop', setLandingZone);
zone2.addEventListener('dragleave', removeLandingZone);


zone3.addEventListener('dragenter', preventDropStyle);
zone3.addEventListener('dragleave', disablePreventDropStyle);


zone4.addEventListener('drop', drop);
zone4.addEventListener('drop', setLandingZone);
zone4.addEventListener('dragleave', removeLandingZone);

function drop(event) {
    const className = event.dataTransfer.getData('class');
    console.log(event.target);
    if (event.target.classList.contains('zone')) {
        event.target.append(document.getElementsByClassName(className)[0])
    }
}

function preventDropStyle(event) {
    event.target.classList.add('preventDrop')
}

function disablePreventDropStyle(event) {
    event.target.classList.remove('preventDrop')
}

function allowDropStyle(event) {
    event.target.classList.add('allowDrop')
}

function disableAllowDropStyle(event) {
    event.target.classList.remove('allowDrop')
}


function setLandingZone(event) {
    if (event.target.classList.contains('zone')) {
        event.target.classList.add('landingZone')
        event.target.classList.remove('defaultBorder')
    }
}

function removeLandingZone(event) {
    if (event.target.classList.contains('zone')) {
        event.target.classList.remove('landingZone')
        event.target.classList.add('defaultBorder')
    }
}



