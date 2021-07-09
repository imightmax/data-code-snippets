/** Pakt de inhoud van de eerste child van een element, als er maar 1 child is. Aners moet je nog een keer de children aanroepen**/

function () {
    if (MatomoTagManager.dataLayer.get('mtm.clickElement')) {
        const conclusieComponent = document.querySelector('#app-tekstblok-vraag').children
        const uitkomstTriage = conclusieComponent[0].innerText

        
        return uitkomstTriage;
    } else { 
        return 'false';
    }
  }
