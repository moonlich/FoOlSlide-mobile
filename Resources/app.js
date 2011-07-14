// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});
Ti.include('/others/http_requester.js')


var JsonWindow=win1;
httpRequest({
	url:'http://foolrulez.org/slide/api/chapter/tonnurasan/en/1/6/1/page/1',
	urlType:'/others/json_files/images.js'
});

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});



//
//  add tabs
//
tabGroup.addTab(tab1);  
//tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
