const appSidebar = document.querySelector('.app-sidebar');
const appScrim = document.querySelector('.app-scrim');
const appTopbarNavicon = document.querySelector('.app-topbar-navicon');
const appMiniGuide = document.querySelector('.app-mini-guide');
const appSidebarContainer = document.querySelector('.app-sidebar-container');
const appGuideNavicon = document.querySelector('.app-guide-navicon');
const appGuideSpacer = document.querySelector('.app-guide-spacer');
const appGuideHeader = document.querySelector('.app-guide-header');
const appMain = document.querySelector('.app-main');



appTopbarNavicon.addEventListener("click", toggleMenu);

function toggleMenu() {
    console.log('foo');
    if(appSidebar.hasAttribute('persistent') && appSidebar.hasAttribute('opened')) {
        appSidebar.removeAttribute('opened','');
        appSidebarContainer.removeAttribute('opened','');
        appMiniGuide.removeAttribute('hidden','');
        appMain.removeAttribute('guide-persistent-and-visible','');
        appMain.setAttribute('mini-guide-visible','');
    } else if (appSidebar.hasAttribute('persistent')) {
        appSidebar.setAttribute('opened','');
        appSidebarContainer.setAttribute('opened','');
        appMiniGuide.setAttribute('hidden','');
        appMain.setAttribute('guide-persistent-and-visible','');
        appMain.removeAttribute('mini-guide-visible','');
    }

}


//screen resizing

var mql = window.matchMedia('(max-width: 600px)');

function screenTest(e) {
  if (e.matches) {
    /* the viewport is 600 pixels wide or less */
    appScrim.setAttribute('visible','');
    console.log('This is a narrow screen — less than 600px wide.');
  } else {
    /* the viewport is more than than 600 pixels wide */
    appScrim.removeAttribute('visible','');
    console.log('This is a wide screen — more than 600px wide.');
  }
}

screenTest(mql);
mql.addListener(screenTest);
