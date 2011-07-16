var DWidth=  Ti.Platform.displayCaps.platformWidth;
var DHeight= Ti.Platform.displayCaps.platformHeight;

var chapterDataArray=[];
for (var i=0; i < respo.chapters.length; i++) {
  chapterData= respo.chapters[i];
  
  var row=Ti.UI.createTableViewRow({
  	height:'auto',
  	layout:'horizontal'
  });
  
  var thumbnail= Ti.UI.createImageView({
  	image:chapterData.comic.thumb_url,
  	height:DWidth/4,
  	width:DWidth/4,
  	top:2,
  	left:2
  });
  var chapterName=chapterData.chapter.name?chapterData.chapter.name:'chapter '+chapterData.chapter.chapter

  var MangaAndChapter= Ti.UI.createLabel({
    text:chapterData.comic.name+'\n'+chapterName,
    textAlign:'left',
    left:2,
    top:2,
    height:'auto',
    width:DWidth/8*5
  })

  row.add(thumbnail);
  row.add(MangaAndChapter);


  row._chapterID=chapterData.chapter.id;
  row._mName=chapterData.comic.name;
  row._cName=chapterData.chapter.name;
  chapterDataArray.push(row);
};

var ReleaseTableView= Ti.UI.createTableView({
	data:chapterDataArray
})
ReleaseTableView.addEventListener('click',function(e){
  alert(e.rowData._chapterID);
  alert(e.rowData._mName);
  alert(e.rowData._cName);
})
win1.add(ReleaseTableView);

JsonWindow.remove(WaiterView);
