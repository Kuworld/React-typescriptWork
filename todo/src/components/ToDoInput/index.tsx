import { useState, useContext } from "react";
import styled from "@emotion/styled";
import { TextInput } from "components/TextInput";
import { Button } from "components/Button";
import { Title } from "components/Title";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(0 0 0 / 75%);
`;

const Contentss = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: aliceblue;
  padding: 32px;
  border-radius: 8px;
  z-index: 1;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Props {
    readonly onAdd: (toDo: string) => void;
}

export const ToDoInput = ({ onAdd }: Props) => {
    const [toDo, setToDo] = useState('');

    const onAddToDo = () => {

        if (toDo === '') return;

        onAdd(toDo);
        setToDo('');
    };


return (
    <Container>
        <Background />
        <Contentss>
          <Title label="할 일 추가" />
          <InputContainer>
            <TextInput value={toDo} onChange={setToDo} />
            <Button label="추가" color="#304ffe" onClick={onAddToDo} />
          </InputContainer>
        </Contentss>
    </Container>
  );
};