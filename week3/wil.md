# Week 3 WIL

스터디 정리
---
## 절대경로와 상대경로

    - 절대경로 : 루트 디렉토리(폴더)를 기준으로   
    - 상대경로 : 현재 위치를 기준으로     
    - 상위폴더 : '../(경로)'

## CSS?
    - HTML의 스타일을 표현하는 언어
    - HTML은 문서 구조의 짜임새 구성   
    - 보기 좋은 디자인을 위하여 CSS 사용
    
HTML 등의 마크업 언어로 작성된 문서가 표현되는 방법을 정해주는 **스타일** 시트 언어
   

## 인라인 스타일
    - 가장 최우선으로 적용되는 스타일
    - 태그에 직접적으로 스타일을 적용 (style 속성으로 구현)

한번에 모든 h에 스타일을 적용할 수 없을까?
## 내부 스타일 방식
    - head 내부에 정의
    - 인라인 스타일보다는 우선순위가 낮음



### 예시
---
![이미지](./스크린샷%202024-10-02%20오전%201.02.17.png)
\<style>    
h1, h2, h3, h4, h5, h6 {    
color: yellow;  
background-color: red;  
}   
\</style>

<br>

**모든 파일에 한번에 적용할 수 없을까?**

## 외부 스타일 방식
    - 별개의 파일에서 스타일을 지정하는 방법
    - 여러 HTML 문서에 적용할 수 있어 유지보수에 용이함
    
    style.css
    
## css 파일 연결하기
    <link rel="stylesheet" href="./style.css">
    (link 태그로 연결)

## 색상 정의 방법
    1. RGB 
        rgb(255,0,0)
    2. HEX code
        #FF0000

## CSS 특성
### Cascading
- 외부 스타일 < 내부 스타일 < 인라인 스타일 의 우선순위
- 여러 스타일 규칙이 적용될 때, 우선순위에 따라 스타일이 결정된다.
- 계단식 성격

### Sheet
- 구글시트처럼 표의 느낌으로
- StyleSheet는 CSS의 스타일 규칙들을 모아둔 파일이나 블록을 의미함

<br>

---
# margin, padding
## margin
    - 요소의 **외부 여백**을 설정하는 속성
    - 인접한 요소와의 간격을 조정할 때 사용
### margin 사용법
    1. 모든 방향에 동일한 margin 설정   
    margin: 20px;

    2. 개별 방향에 다른 값 설정 (상, 우, 하, 좌)   
    (시계방향으로 설정?)    
    margin: 10px 20px 30px 40px;

    3. 상하, 좌우에 다른 값 설정    
    margin: 10px 20px;

    4. 상, 좌우, 하에 다른 값 설정
    margin: 10px 20px 30px;
### 개별 속성
    margin-top: 상단 외부 여백
    margin-right: 우측 외부 여백
    margin-bottom: 하단 외부 여백
    margin-left: 좌측 외부 여백
<br>

## padding
    - 요소의 내부 여백을 설정하는 속성
    - 요소의 내용과 테두리 사이의 간격을 조정할 때 사용
### 사용법
    1. 모든 방향에 동일한 padding 설정 
    padding: 20px;

    2. 개별 방향에 다른 값 설정 (상, 우, 하, 좌)
    padding: 10px 20px 30px 40px;

    3. 상하, 좌우에 다른 값 설정 
    padding: 10px 20px;

    4. 상, 좌우, 하에 다른 값 설정
    padding: 10px 20px 30px;

### 개별 속성
    padding-top: 상단 내부 여백
    padding-right: 우측 내부 여백
    padding-bottom: 하단 내부 여백
    padding-left: 좌측 내부 여백

## Margin과 Padding의 차이점
- Margin: 요소와 요소 사이의 외부 간격을 설정.
- Padding: 요소의 테두리와 내용 사이의 내부 간격을 설정.

