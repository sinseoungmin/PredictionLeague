./
├── .babelrc                # babel 설정파일
├── package.json		
├── public                  # 클라이언트 디렉토리
│    ├── bundle.js          # 컴파일된 스크립트
│    └── index.html         # 메인 페이지
├── server.js               # 서버 파일
├── src
│    ├── index.js           # react-router
│    ├── routes.js          # react-router
│    ├── utils.js           # 공통함수
│    ├── firebase_init.js   # firebase 초기세팅
│    ├── actions            # redux-action
│    ├── store              # redux-store
│    ├── data               # 기본 data
│    ├── componenet         # 화면 구성
│    └── stylesheets        # 스타일
├── webpack.config.js       # webpack 설정파일
└── webpack.dev.config.js   # webpack-dev-server 를 위한 설정파일


## 해야함
1) server rendering 구현 안됨.
2) 필요한면 다시 해보기.

## 필요한 것
1) 로고
2) 도메인 predictionleague.co.kr

## 추가 설치함
npm install --save firebase
npm install --save lodash
npm install --save body-parser(1.15.2)
npm install nodemailer(2.5.0)
npm install image-webpack-loader --save-dev


## set up authentication 할 때, database 접근권한 다시 설정해야 함.


## redux 설정 시
1) action/ store/ initialstate 작업 해야함
2) store.dispatch(actions.gameInfo(game));
