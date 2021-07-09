//** Takes the next element of the clicked element. 

function () {
    if (MatomoTagManager.dataLayer.get('mtm.clickElement')) {
        cardFooter = MatomoTagManager.dataLayer.get('mtm.clickElement').nextElementSibling;
        var cardTitle = cardFooter.innerText

        return cardTitle;
    } else { 
        return 'false';
    }
  }
