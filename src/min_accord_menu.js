function closeMenu(triggerElem){
  const parent=triggerElem.parentNode;
  const whichmenu = parent.id;
  const menu_check = document.querySelector('#'+whichmenu+'_check');
  menu_check.checked=false;
  if (parent.classList.contains('submenu')){
    const wraplist = parent.parentNode;
    closeMenu(wraplist);
  } else {
    return
  }
}

function doMenuItem(triggerElem){
  const itemID = triggerElem.id;
  window.alert('The clicked item:'+itemID);
  switch (itemID) {
    case '':
      /* This is where to put your action or call appropriate functions
       one case for each menu item
       */
      break;
    default:
      break;
  }
  closeMenu(triggerElem);
}

function handleClickEvent(event){
  /*window.alert(event.target.nodeName)*/
  if (event.target.nodeName=="LI" && event.target.parentNode.classList.contains('menuList')){
    doMenuItem(event.target)
  } else {
    return
  }
}
function addListeners(){
    // This adds the listeners. Goal is to have a limited number and take advantage of events bubbling up through the DOM.
    // Try just one. If this does not work will do three different ones.
        document.addEventListener("click", handleClickEvent);
        console.log("added click listener for accordian menus to document.");
    // Orbital choice
    // Orbital color
    // Orbital display mode
}

// Add the event listeners once the page is loaded
window.addEventListener("DOMContentLoaded", ()=>{
    addListeners();
});

