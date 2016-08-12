var utils = {};


/*  인증 이메일 발송  */
utils.sendEmail = (_id, _email, _eToken)=>{
  console.log('이메일: '+_email+' 발송 시작!');
  $.ajax({
    url: '/contactus',
    type:"POST",
    dataType: 'text',
    data:{
      id: _id,
      email: _email,
      eToken: _eToken
    },
    cache: false,
    success: function(data) {
        // Success..
        console.log('success');
        console.log(data);
    }.bind(this),
    error:function(req,status,error){
      console.log("code:"+req.status+"\n"+"message:"+req.responseText+"\n"+"error:"+error);
    }.bind(this)
  });
}
/*  url에서 para 가져오기  */
utils.getParameter = (name)=>{
  let rtnval = '';
  let nowAddress = unescape(location.href);
  let parameters = (nowAddress.slice(nowAddress.indexOf('?')+1,nowAddress.length)).split('&');
  for(let i = 0 ; i < parameters.length ; i++){
      let varName = parameters[i].split('=')[0];
      if(varName.toUpperCase() == name.toUpperCase()){
          rtnval = parameters[i].split('=')[1];
          break;
      }
  }
  return rtnval;
}
/*  random key 생성  */
utils.randKey = (num) =>{
  let arraySet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','W','T','U','V','W','X','Y','Z',
  '0','1','2','3','4','5','6','7','8','9']
  let rN = '';
  for(let i=0; i<num; i++){
    let randIndex = Math.floor(Math.random()*arraySet.length);
    rN += arraySet[randIndex];
  }
  return rN
}


/*  plusminus를 통해, 며칠 전후의 날짜를 구할 수 있음 */
utils.getCurrentDate = (plusminus)=>{
  let week = new Array('일', '월', '화', '수', '목', '금', '토');
  let today = new Date();

  let targetDay = new Date(today.valueOf() + plusminus*(24*60*60*1000));
  let year = targetDay.getFullYear();
  let month = targetDay.getMonth() + 1;
  let day = targetDay.getDate();
  let dayName = week[targetDay.getDay()];

  let rDay = year.toString()+(month.toString().length==2? month.toString() : "0"+month.toString())+day.toString();

  return rDay;
  //console.log("날짜는 %d-%d-%d %s요일 입니다.", year, month, day, dayName);
}


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
}



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
utils.makeAlert = (title,contents,footer) =>{
  if(title)    {$('#alertModalH').html(title)}
  if(contents) {$('#alertModalB').html(contents)}
  if(footer)   {$('#alertModalF').html(footer)}

  $('#alertModal').modal();
}
utils.loadingStart = () =>{
  $('#loadingModal').modal({
    backdrop:'static',
    keyboard:false
  });
}
utils.loadingEnd = () =>{
  $('#loadingModal').modal('toggle');
}



module.exports = utils;
