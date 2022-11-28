document.addEventListener('DOMContentLoaded', async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const doorNr = urlParams.get('d');
    if (doorNr == '') return (window.location.href = '/');
    console.log(doorNr);

    if (!checkDateLock(doorNr)) return;

    setTitleNr(doorNr);

    setVideoEmbed(data, doorNr);
});

const checkDateLock = (doorNr) => {
    //const doorUnlockDate = new Date(2022, 11, doorNr); // Dezember: 12 aber -1 -> 11

    const doorUnlockDate = new Date(1999, 11, 11);

    if (Date.now() < doorUnlockDate) {
        console.log('access denied');
        window.location.href = '/';
        return false;
    }
    return true;
};

const setTitleNr = (doorNr) => {
    let titleNodes = document.getElementsByClassName('title');

    for (let i = 0; i < titleNodes.length; i++) {
        titleNodes[i].innerText = 'Türchen Nr.' + doorNr;
    }
};

const setVideoEmbed = (doorConfig, doorNr) => {
    const doorData = doorConfig[doorNr - 1];


    console.table(doorData);

    let videoID = doorData.contentID;
    let videoTitle = doorData.title;
    let videoDescribtion = doorData.describtion;

    
    let embedElement = document.getElementById('videoEmbed');
    embedElement.setAttribute('src', "https://www.youtube.com/embed/"+videoID);
    
    let titelElement = document.getElementById('videoTitle');
    if (!videoID || !videoTitle || !videoDescribtion) {
      titelElement.textContent = "Content not implemented!";
    } else {
      titelElement.textContent = videoTitle;

    }
    
    let describtionElement = document.getElementById('videoDescribtion');
    describtionElement.textContent = videoDescribtion;


};
