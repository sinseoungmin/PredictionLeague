## detail 처리 ##
1. 로그인 여부에 따른 처리
2. 지나간 경기는 클릭 안되도록 처리
3. css


## Predict ##
1. 통계 부분에 어떤걸 넣을지
    - 새로운 DB Table 필요

    1) 경기 전
        a) 참가자 수
        b) 전체 베팅금액
        c) 최고 배당률

    2) 경기 후
        a) 적중률
            - 단일픽
            - 복수픽
        b) 오늘의 예측가? Top 10

    3) 그래프 등 시각적 효과 있으면 좋을 것 같음


2. 경기 전 / 경기 중 / 경기 후 에 따라서 component, event 다르게 처리
    - gameInfo에 away_score, home_score, state('before', 'ing', '이긴팀') key를 추가함으로써 구분!

    1) 시작한 경기
        a) 클릭이 안되도록
        b) 가운데 '경기중'

    2) 끝난 경기
        a) 클릭이 안되도록
        b) 가운데 점수표시
        c) 오른쪽 승리표시 (클릭 시 임팩트를 승리팀 쪽으로)


## Ranking ##
1. 프사 이미지 업로드 to Firebase

2. 개인: # / 닉네임 / 누적 금액 / 포지션 / 팀

3. 팀: # / 팀명 / 누적 금액 / 총 인원수
