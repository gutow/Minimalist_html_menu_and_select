# Minimalist HTML Menu and Select Dropdowns with Formattable Content
_Created by Jonathan Gutow <[gutow@uwos.edu](mailto:gutow@uwosh.edu)> 9-2026_
## Introduction
These dropdown menu and select dropdown templates were created to facilitate
the updatiang of my tutorials to help people visualize
[atomic orbiatals](http://localhost:8083/Website_for_GIT/Orbitals/Cl/Cl_AOs.shtml)
,
[hybrid orbitals and multiple bonds]((https://cms.gutow.uwosh.edu/gutow/Orbitals/N/What_are_hybrid_orbitals.shtml)).
These tutorials make use of [JSmol](https://jmol.org) to provide interactive
3-D representations of electron orbitals on atoms and molecules. This
requires extensive use of the Jmol scripting language. The menus are used to
provide the user with simple selections to activate the specialized script
calls. Typical html DOM built-ins such as `<select>` do not presently allow
for formatting of text or inclusion of images, etc. in the dropdowns. This
is my solution until browsers all consistently implement placement of
`popover` elements.

## Capabilities
* Items in the dropdowns may be any html element that can be embedded in a
  `<li>`. So, formatting, images, etc. are allowed.
* Styling is done using annotated css style sheets to facilitate adaption to
  other uses.
* Skeletal javascript is included to respond to selection of an element from
  the dropdown. Two behaviors are currently provided:
  * Menu-like with submenus that expand the menu like an accordian rather
    than popping out to one side. Depth of submenus is only limited by
    recursion limitations of javascript.
  * Selection-like where upon selection the selected item gets a check-mark
    to its left and displays just below the selection label. Currently supports:
    * Single selection only.
    * An initial selection.
    * A default selection that does not have to match the initial selection.
    * No selection, if a default selection is not specified.

## Usage
The menus and selection dropdowns are specified in html as unordered lists,
`<ul>`. Each entry in the list is an item for the menu or selection list.
The menu behavior takes advantage of css response to the state of hidden
checkboxes.
### Specifying a menu
#### A main (outer) menu
```html
<ul id="menuname" class="menuList mainmenu">
    /* id of <input> must extend menu id as shown below */
  <input type="checkbox" id="menuname_check"/>
  <label for="menuname_check">Displayed Menu Label</label>
  <li id="itemname">a menu item</li>
  <li...
</ul>
```
#### A submenu
```html
<ul id="menuname" class="menuList mainmenu">
  /* id of <input> must extend menu id as shown below */
  <input type="checkbox" id="menuname_check"/>
  <label for="menuname_check">Displayed Menu Label</label>
  <li id="itemname">a menu item</li>
  <li>
    <ul id="submenuname" class="menuList submenu">
        /* id of <input> must extend submenu id as shown below */
      <input type="checkbox" name="submenu" id="submenuname_check"/>
      <label for="submenuname_check">Item 1</label>
      <li id="2_2_1_1">Item 1</li>
    </ul>
  </li>
</ul>
```
### Specifying a selection dropdown
```html
<ul id="selectname" class="selectOneList mainmenu">
  /* id of <input> must extend select id as shown below */
  <input type="checkbox" name="menus" id="selectname_check"/>
  <label for="selectname_check">Orbital</label>
  <li class="selected defaultselection">None</li>
  <li id="itemname" >x<sup>2</sup></li>
  <li...
</ul>
```
### Complex menu/select items
If a menu item is built from multiple elements (e.g. `<div></div>`'s) it is
necessary to add the special class name `complexMenuItem` to each of the
elements so how they are wrapped, etc. in the menu item can be controlled.
The included css puts these elements all in one line.
```html
<li id="red_blue_color" class="selected defaultselection">
  <div class="colorbox red complexMenuItem"></div>
  <div class="colorbox blue complexMenuItem"></div>
  Red/Blue
</li>
```
### Formatting
The formatting is all controlled by the css style sheets. There are
currently three (min_accord_selectone.css, min_accord_menu.css and
min_accord_selectone_demo_ext.css)..need notes on getting menus to overlay
content below them.
* Items to be overlapped must have fixed position within the div that
  contains the items and the menu wrapping div.
* The menu wrapping div must have a z-index > then the other contents.

### Actions in response to selection of an item from the menu or selector
These need to be javascript calls from either the `doMenuItem` or
`doSelectOne` functions in `src/min_accord_menu.js`. The expectation is that
anyone using this code will build on the code in this js file. To keep the
code light weight this is not written as a library with a callback handler.
