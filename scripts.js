document.body.setAttribute('moo', ''); //set phony boolean attribute

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
    if(appSidebar.hasAttribute('persistent')) {
        appSidebarContainer.removeAttribute('opened','');
        appMiniGuide.removeAttribute('hidden','');
        appMain.removeAttribute('guide-persistent-and-visible','');
        appMain.setAttribute('mini-guide-visible','');
    } else {

    }
}
