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


module.exports = utils;
