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

## Day03 ( 간단한 카운터 앱 만들어 보기)
    > Props 와 State
        * 리액트의 핵심 개념 
        * props '특성'이라는 의미를 갖는다 리액트 컴포넌트의 특성을 나타내며 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달할 수 있다
          부모컴포넌트로부터 받은 데이터는 자식 컴포넌트에서 변경이 불가하다
        * state는 '상태'를 의미한다. 컴포넌트의 현재 상태를 의미하며 컴포넌트 상태는 변경이 가능하다. 유동적인 데이터를 다룰 때 사용된다.
   
    
    > 카운터 앱
<img src="https://github.com/user-attachments/assets/fd9d28c9-ca73-4091-8832-21473991edc0" width=300>

> 1. CSS-in-JS 라이브러리인 Emotion을 사용하여 스타일링 하였다
>
> 2. 리액트가 제공하는 useState 훅을 사용하여 버튼 클릭시 유동적으로 데이터가 변하게 하였다
>    > const [변수명, set함수명] = useState(데이터초깃값)
>    >
>    > // 배열[0] : 데이터 초깃값이 들어간 변수
>    >
>    > // 배열[1] : 데이터를 수정할 수 있는 set함수
>
> 3. Props를 알아보기 위해 Button , Label 컴포넌트를 별도의 파일로 분리하였다
### Button/index.tsx
```javascript
/*
    insterface 인터페이스명 {
        변수명 : 변수타입;
    }
  */
    interface Props{
        readonly label: string;
        readonly onClick: () => void;
    }
  export const Button = ({ label, onClick }: Props) => {
    return <Container onClick={onClick}>{label}</Container>;
  }
```
### Label/index.tsx
```javascript
interface Props {
    readonly data : number;
}
export const Label = ({data}: Props) => {
    return <Container>{data}</Container>
};
```
### App
```javascript
   <Container>
        <Title>Counter App</Title>
          <Contents>
            <Button label="-" onClick={sub}/>
            <Label data={counter}/>
            <Button label="+" onClick={add} />
          </Contents>
    </Container>            
```
## Day04 (Class Component)
> 1. 클래스 컴포넌트(Class Component)
>     >
>     > 리액트 훅이 나오기 전까지 클래스 컴포넌트를 기본 컴포넌트로 사용하였다.             
>     > 함수 컴포넌트에서는 상태 관리를 하는데 State를 사용할 수 없었기 때문이다.
>
> 2. 이전에 함수 컴포넌트를 사용하여 개발한 카운더 앱을 클래스 컴포넌트로 리팩토링 해보았다.
>     > ### Button/index.tsx
>     > ```javascript
>     >     import { Component } from "react";
>     >     // Component를 리액트로 부터 불러온다
>     > ```
>     > ```javascript
>     >   export class Button extends Component<Props> {
>     >      render() {
>     >                const { label, onClick } = this.props;
>     >            return <Container onClick={onClick} >{ label } </Container>
>     >      }
>     >    }
>     > // export class 클래스 컴포넌트명 extends Component<Props의 제네릭, State의 제네릭>{
>     > //    ...........
>     > //    } 
>     > ```
>     > * 리액트에서 클래스 컴포넌트를 생성하기 위해서는 리액트의 Component 클래스를 상속받아 새로운 클래스를 생성할 필요가 있다.
>     >
>     > ### Label/index.tsx
>     > ```javascript
>     > export class Label extends Component<Props>{
>     >  render() {
>     >    const { data } = this.props;
>     >    return <Container>{ data }</Container>
>     >  }
>     >}
>     > ```
>     >
>     > * Label 컴포넌트도 클래스 컴포넌트로 리팩토링 해보았다.
>
> 3. 라이프사이클 함수
>     > * constructor 함수 : 생성자 함수
>     > 
>     > * render 함수 : 클래스 컴포넌트의 화면 표시부분을 정의하는 데 사용
>     > 
>     > * getDerivedStateFromProps 함수 : 부모 컴포넌트로부터 받은 Props와 State를 동기화할 때 사용
>     > 
>     > * componentDidMount 함수 : 컴포넌트가 화면에 처음 표시된 후 한번만 호출, Ajax를 통한 데이터 습득이나 다른 자바스크립트 라이브러리와 연동을 수행할 때 주로 사용.
>     >
>     > * shouldComponentUpdate 함수 : 특정 이유로 Props나 State가 변경되었을 경우 화면을 다시 리렌더링 하지 않게 제어.
>     >
>     > * getSnapshotBeforeUpdate 함수 : 화면을 갱신하는 동안 수동으로 스크롤 위치를 고정해야 할때 사용
>     >
>     > * componentDidUpdate 함수 : getSnapshotBeforeUpdate와 함께 수동으로 스크롤을 고정시킬 때 사용
>     > 
>     > * componentWillUnmount 함수 : componentDidUpdate 함수에서 연동한 자바스크립트 라이브러리를 해제하거나 setTimeout, setInterval 등의 타이머를 해제할 때 사용
>     >
>     > * componentDidCatch 함수 : render함수의 JSX 부분에서 발생하는 에러를 예외 처리할 수 있게 도와주는 함수 

## Day05 (할 일 목록 앱 만들기 진행 중)


