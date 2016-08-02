var utils = {};


/*  navi
    뒤로가기 했을 시, 밑의 네비가 색 변경을 위해서 */
utils.naviColor = (page) =>{
  let naviTd = document.getElementsByClassName("naviTd");
  for(var i=0; i<naviTd.length;  i++){
    utils.removeClass(naviTd[i],'naviClick');
  }
  if(page){
    let colorNavi = document.getElementById('navi'+page);
    utils.addClass(colorNavi, 'naviClick');
  }
};



/*  tab event 처리 */
utils.tabClick = (e) =>{
  let targetName = e.target.getAttribute('name');

  let page = targetName.substr(0,targetName.length-3);
  let num = targetName.slice(-1);

  //전체적으로 class 제거
  let pageTab = page + 'Tab';
  let allTab = document.getElementsByClassName(pageTab);
  for(var i=0; i<allTab.length;  i++){
    utils.removeClass(allTab[i],'tabClick');
  }

  //click 된 element 대해서 처리
  utils.addClass(e.target, 'tabClick');
  utils.addClass(document.getElementById(pageTab+num), 'tabClick');

}


/*  className 추가 삭제 */
utils.addClass = (element, className) =>{
    element.className += " " + className;
};

utils.removeClass = (element, className) =>{
    let check = new RegExp("(\\s|^)" + className + "(\\s|$)");
    element.className = element.className.replace(check, " ").trim();
};

utils.toggleClass = (element, className) =>{
    let check = new RegExp("(\\s|^)" + className + "(\\s|$)");
    if (check.test(element.className)) {
        element.className = element.className.replace(check, " ").trim();
    } else {
        element.className += " " + className;
    }
};

/*  modal */
utils.makeAlert = (type,msg1,bt1,f,bt2,g,msg2) =>{
  //console.log('making modal');
  var img;
  if(!msg2) msg2='';
  $('#alertModal').find('#alertImg').css('height','auto');
  if(type==0){
    $('#alertModal').find('#alertImg').css('height','40px');
  }
  if(msg2.length>0){
    $('#alertModal').find('#alertImg').css('margin','10px 0px 20px');
  }
  else{
    $('#alertModal').find('#alertImg').css('margin','30px 0px');
  }
  if(type==1) img='/images/popup_small_success.png';
  else if(type==2) img='/images/popup_small_caution.png';
  $('#alertModal').modal('hide');
  $('#alertModal').find('#alertBody1').html(msg1);
  $('#alertModal').find('#alertBody2').html(msg2);
  $('#alertModal').find('.alertImg').remove();
  if(type){
    $('#alertModal').find('#alertImg').append(
      "<img class='alertImg' src='"+img+"' />"
    );
  }
  $('#alertModal').find('#alertOK').off('click');
  $('#alertModal').off('keyup');
  $('#alertModal').find('#alertCancel').off('click');
  if(bt1){
    $('#alertModal').find('#alertOK').show();
    $('#alertModal').find('#alertOK').text(bt1);
    $('#alertModal').find('#alertOK').click(function(){
      $('#alertModal').modal('hide');
      if(f) f();
    });
    $('#alertModal').keyup(function(e){
      if(e.keyCode == 13){
        $('#alertOK').click();
      }
    });
  }
  else{$('#alertModal').find('#alertOK').hide();}
  if(bt2){
    $('#alertModal').find('#alertCancel').show();
    $('#alertModal').find('#alertCancel').text(bt2);
    $('#alertModal').find('#alertCancel').click(function(){
      $('#alertModal').modal('hide');
      if(g) g();
    });
  }
  else{$('#alertModal').find('#alertCancel').hide();}
  $('#alertModal').modal('show');
}


module.exports = utils;
