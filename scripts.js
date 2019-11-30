const body = document.querySelector('body');
const appSidebar = document.querySelector('.app-sidebar');
const appScrim = document.querySelector('.app-scrim');
const appTopbarNavicon = document.querySelector('.app-topbar-navicon');
const appMiniGuide = document.querySelector('.app-mini-guide');
const appSidebarContainer = document.querySelector('.app-sidebar-container');
const appGuideNavicon = document.querySelector('.app-guide-navicon');
const appGuideSpacer = document.querySelector('.app-guide-spacer');
const appGuideHeader = document.querySelector('.app-guide-header');
const appMain = document.querySelector('.app-main');


//navicon
appTopbarNavicon.addEventListener("click", toggleMenu);

function toggleMenu() {

    if(appSidebar.hasAttribute('persistent') && appSidebar.hasAttribute('opened')) {
        appSidebar.removeAttribute('opened','');
        appSidebarContainer.removeAttribute('opened','');
        appMiniGuide.removeAttribute('hidden','');
        appMain.removeAttribute('guide-persistent-and-visible','');
        appMain.setAttribute('mini-guide-visible','');
    } else if (appSidebar.hasAttribute('persistent')) {
        //appSidebar.removeAttribute('persistent','');
        appSidebar.setAttribute('opened','');
        appSidebarContainer.setAttribute('opened','');
        appMiniGuide.setAttribute('hidden','');
        appMain.setAttribute('guide-persistent-and-visible','');
        appMain.removeAttribute('mini-guide-visible','');
    } else if (!appSidebar.hasAttribute('persistent') && !appSidebar.hasAttribute('opened')) {
        console.log('not persistent an not opened');
        appSidebar.setAttribute('opened','');
        appSidebarContainer.setAttribute('opened','');
        body.style.overflow = 'hidden';
        appGuideNavicon.focus();
        appScrim.setAttribute('visible','');
    }

}

//guide navicon
appGuideNavicon.addEventListener("click", closeGuideMenu);

function closeGuideMenu() {
    console.log('closeGuideMenu');
    appSidebar.removeAttribute('opened','');
    appSidebarContainer.removeAttribute('opened','');
    appMain.removeAttribute('guide-persistent-and-visible','');
    appMain.removeAttribute('mini-guide-visible','');
    appScrim.removeAttribute('visible','');
    body.style.removeProperty('overflow');
}


//backdrop
appScrim.addEventListener("click", closeScrimMenu);
function closeScrimMenu() {
    console.log('closeScrimMenu');
    appSidebar.removeAttribute('opened','');
    appSidebarContainer.removeAttribute('opened','');
    appScrim.removeAttribute('visible','');
    body.style.removeProperty('overflow');
}

//screen resizing

// CSS media queries JS inform

var breakpoints = ['34rem', '48rem', '63.25rem', '80rem'];


let mqls = [
	window.matchMedia("(min-width: 34rem)"),
    window.matchMedia("(min-width: 48rem)"),
    window.matchMedia("(min-width: 63.25rem)"),
    window.matchMedia("(min-width: 80rem)")
];

function mediaqueryresponse(mql){
	if (mqls[0].matches){ // {max-width: 34rem} query matched
        //console.log('min-width is 34');
        appSidebar.removeAttribute('persistent','');
        appMiniGuide.setAttribute('hidden','');
        appMain.removeAttribute('guide-persistent-and-visible','');
        appMain.removeAttribute('mini-guide-visible','');
        appGuideHeader.setAttribute('visible','');
        appGuideSpacer.removeAttribute('visible','');
	}
	if (mqls[1].matches){ // {max-width: 48rem} query matched
        appMiniGuide.removeAttribute('hidden','');
        appSidebar.removeAttribute('persistent','');
        appSidebar.removeAttribute('opened','');
        appSidebarContainer.removeAttribute('opened','');
        appMain.setAttribute('mini-guide-visible','');
            //console.log('min-width is 63.25');
    }
    if (mqls[2].matches){ // {max-width: 48rem} query matched

    }
    if (mqls[3].matches){ // {max-width: 48rem} query matched
        appSidebar.setAttribute('persistent','');
        appSidebar.setAttribute('opened','');
        appSidebarContainer.setAttribute('opened','');
        appMiniGuide.setAttribute('hidden','');
        appMain.removeAttribute('mini-guide-visible','');
        appMain.setAttribute('guide-persistent-and-visible','');
        appGuideHeader.removeAttribute('visible','');
        appGuideSpacer.setAttribute('visible','');
            //console.log('min-width is 80');
    }

}

for (var i=0; i<mqls.length; i++){
	mediaqueryresponse(mqls[i]) // call listener function explicitly at run time
	mqls[i].addListener(mediaqueryresponse) // attach listener function to listen in on state changes
}
