import { useState } from "react";
import styled from "@emotion/styled";
import { Button } from "components/Button";
import { Label } from "components/Label";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  margin-bottom: 32px;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;






function App() {
  const [counter, setCounter] = useState(0);

  /*
    const [변수명, set 함수명] = useState (데이터 초깃값);

    // 배열[0]: 데이터 초깃값이 들어간 변수
    // 배열[1]: 데이터를 수정할 수 있는 set 함수
  */

    const sub = () => {
      setCounter(counter - 1);
    };
    const add = () => {
      setCounter(counter + 1);
    };

  return (
    <Container>
        <Title>Counter App</Title>
          <Contents>
            <Button label="-" onClick={sub}/>
            <Label data={counter}/>
            <Button label="+" onClick={add} />
          </Contents>
    </Container>
  );
}

export default App;
