# React를 공부 해보자

## Day 01
    > 윈도우 개발 환경 설정
        * Chocolatey 설치
        * Node 설치
        * create-react-app 설치 및 프로젝트 생성 및 실행
    
    > 타입 스크립트 
        * create-react-app의 타입스크립트 템플릿 사용하기

    > 스타일링 
        * CSS-in-JS(Emotion) 사용하기
## Day02
    > 절대 경로로 컴포넌트 추가 하기

    > Prettier 코드 포맷터
        * 설치, 설정, 실행
        * prettier는 미리 약속한 코드 스타일에 맞춰 자동으로 코드의 형식을 수정해 주는 도구
        * 협업시 여러 개발자들의 코드 스타일을 맞추는 데 큰 도움을 준다. 일관 된 코드 스타일을 유지할 수 있도록 도와줌
        * singleQuote: 싱글 쿼트를 주로 사용하도록 설정
          trailingComma: 콤마를 추가 추가할 수 있다면, 콤마를 추가
          printWidth:  한 줄에 작성할 수 있는 최대 코드 문자 수를 설정
        * package.json 에 스크립트 추가
            - format 스크립트는 prettier check 옵션과 함께 실행하여 설정한 내용에 위반 되는 내용이 있는 검사
            - format:fix는 prettier wrtie 옵션과 함계 사용하여 잘못된 내용을 설정한 내용에 맞게 자동으로 수정 해준다
    > Eslint
        * 설치 설정 실행
        * eslint 9버전 부터는 eslint를 설치 했을 때  .eslintrc.js가 생성되지 않고...
          eslint.config.js 가 생성된다...(이것 때문에 조금 애 먹었다... 책을 보며 혼자 공부 하다 보니 이 부분에서 막혀 버렸다)
          https://eslint.org/docs/latest/use/configure/configuration-files 참고해 해결했다.(더 열심히 하자👍)
         
