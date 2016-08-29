## 계속해서 update 되는지 안되는지도 중요함!!

## id-email ##
- 사용자는 아이디/비밀번호 를 이용해 로그인
- firebase auth system은 이메일/비밀번호 사용
- 때문에 아이디를 이메일에 매칭시키는 table이 필요
- 또한 이메일 인증 process에 대한 정보도 필요함
- key:id / value: email, validate('Y','N')

## email-token ##
- 이메일 인증을 위해 이메일과 토큰을 매칭
- key:email / value:eToken

## nickName ##
- 회원가입 시, 중복되는 닉네임이 있는지 확인을 위해
- key:nickName / value: status

## userInfo ## => 로그인 하자마자 바로 다운로드 => redux state(userState)로
- 사용자의 기본 정보
- 계속해서 추가될 것임
- key:id
- value:{email:, nickName:, team:, position:, imgUrl, award}

## userPick ##
- 사용자가 베팅한 내역
- userPick/아이디/날짜/S/원정팀_홈팀 => win, stake, odds, hit:'Y'or'N'
- userPick/아이디/날짜/M/randomKey => game:{key:원정팀_홈팀, value:away or home}, stake, odds, hit:'Y'or'N'
- userPick/아이디/날짜/잔고 => 얼마

## gameInfo ##
- 그날에 있는 경기
- key:date
- value:{away, away_odds, home, home_odds}

## ranking ## => redux state(userState)로
- 랭킹 정보
- 계속 추가될 예정
- key:season
- 2nd Key: id
- value:{cWinnings, aRate, maxOdds}


@JoinModal
- id-email
- email-token
- nickName
- userInfo
