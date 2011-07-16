// this sets the background color of the master UIView (when there are no windows/tab groups on it)
var isAndroid= Ti.Platform.osname == 'android'?true:false;
if (isAndroid) {
  var BGC='#000'
}else{
  var BGC='#fff'
}
Titanium.UI.setBackgroundColor(BGC);

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'blubb',
    backgroundColor:BGC
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'blubb',
    window:win1
});
Ti.include('/others/http_requester.js')


var JsonWindow=win1;
httpRequest({
	url:'http://foolrulez.org/slide/api/reader/chapters/orderby/desc_created/',
	urlType:'/others/json_files/images.js'
});

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:BGC
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
