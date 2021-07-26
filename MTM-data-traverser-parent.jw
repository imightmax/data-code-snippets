/** Roept de dichtsbijzijnde voorvader aan op basis van een selector **/
/** Hier moet nog iets van een logica ingebouwd worden die mij in staat stelt alleen de tekst mee te nemen **/

function () {
  if (MatomoTagManager.dataLayer.get('mtm.clickElement')) {
      const selectedChild = TagManager.dataLayer.get('mtm.clickElement')
      const closestAncestor = selectedChild.closest('spreekuur-icon-card')

      const iconCardTitel = closestAncestor.getAttribute('titel')
      
      return iconCardTitel;
  } else { 
      return 'false';
  }
}
