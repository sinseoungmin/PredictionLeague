var utils = {};

/* 뒤로가기 했을 시, 밑의 네비가 색 변경을 위해서 */
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


/* className 추가 삭제 */
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
