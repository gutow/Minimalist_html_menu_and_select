/* This supports css based menus and select dropdowns that can support
html within each menu item, allowing for formatted text, images, etc...

The idea was to have minimal javascript with most of the menu behavior
provided by the css.
J. Gutow (gutow@uwosh.edu) 9-2026.
 */
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
  /*window.alert('The clicked item:'+itemID);*/
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

function doSelectOne(triggerElem){
  /* toggle selection state of item. No selection from list is allowed*/
  if (triggerElem.classList.contains('selected')){
    triggerElem.classList.remove('selected');
    /* Call a function that does what is necessary when the selection is removed */
    /* Set to default if available */
    let parent = triggerElem.parentElement;
    let defaultelem = parent.querySelector('.defaultselection');
    if (defaultelem){
      defaultelem.classList.add('selected');
    }
  } else {
    triggerElem.classList.add('selected');
    /* Unselect all other items in the menu and submenus*/
    let sibling = triggerElem.previousElementSibling;
    while (sibling){
      sibling.classList.remove('selected');
      sibling = sibling.previousElementSibling;
    }
    sibling = triggerElem.nextElementSibling;
    while (sibling){
      sibling.classList.remove('selected');
      sibling = sibling.nextElementSibling;
    }
  }
  closeMenu(triggerElem);
  /* Call a function that does what is necessary when the selection is changed */
}

function handleClickEvent(event){
  /*window.alert(event.target.nodeName)*/
  if (event.target.nodeName=="LI" && event.target.parentNode.classList.contains('menuList')){
    doMenuItem(event.target);
    } else {
    if (event.target.nodeName=="LI" && event.target.parentNode.classList.contains('selectOneList')){
    doSelectOne(event.target);
    }
  }
  return;
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

