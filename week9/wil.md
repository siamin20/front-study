# Week 9 WIL

[과제 배포링크](https://create-react-app-gamma-mocha.vercel.app/)

## react 실행
처음 **react-app**을 만들기 위해 사용하는 명령어

~~~
npx create-react-app week9
~~~

이후 해당 디렉토리로 이동하여 아래 명령어로 실행한다.
~~~
npm start
~~~

<br>


## Django를 같이 사용할 때 

연구실 프로젝트에서는 **django**와 **node.js**를 이용하여 프로젝트를 구성하였다. 

### 1. 백엔드 서버
~~~
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
~~~
- makemigrations는 models.py에서 정의된 DB에 대한 변경사항을 기록하는 migration 파일을 생성하는 명령어이다.
- 이후 migrate 명령어를 이용하여 이 파일을 실제 DB에 적용한다.
- 실제 서버 실행시에는 runserver로 실행

### 2. 프론트엔드 서버
~~~
(최초) npm i
npm run build
npm start
~~~
- npm i는 최초 실행 시 pakage.json 파일에 작성한 모듈들을 모두 설치한다.
- npm run build를 통하여 코드를 번들링한다.
- npm start로 시작 스크립트를 실행하여 node.js 서버를 실행한다. 


### npx? npm?
요새는 npx를 더 많이 사용한다.
기존의 npm은 
~~~
npm install -g create-react-app
~~~
이 명령어를 통해 전역으로 설치를 한 후 사용한다. <br>
그러나 npx는 따로 설치하지 않고 일회성으로 최신 버전 패키지를 가져와 생성한다. <br>
따라서 공간 절약과 버전 충돌 해결을 위해서 최근에는 npx를 사용하는 추세이다.

