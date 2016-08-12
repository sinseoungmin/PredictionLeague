
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

## userInfo ##
- 사용자의 기본 정보
- 계속해서 추가될 것임
- key:id
- value:{email:, nickName:, team:,position:}
