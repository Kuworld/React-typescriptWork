import './App.css';
import styled from '@emotion/styled';
import { useState } from 'react';
import { DataView } from 'components/DataView';
import { ToDoInput } from 'components/ToDoInput';
import { ShowInputButton } from 'components/ShowInputButton';
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;




function App() {
  const [toDoList, setToDoList] = useState(['리액트 공부하기', '운동하기', '책읽기']);

  //const [toDo, setToDo] = useState([[...]]);
  const [ShowToDoINput, setShowToDoInput] = useState(false);


  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  };

  const onAdd = (toDo: string) => {
    setToDoList([...toDoList, toDo]);
    setShowToDoInput(false);
  };

  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete} />
      {ShowToDoINput && <ToDoInput onAdd={onAdd}/>}
      <ShowInputButton 
        show={ShowToDoINput}
        onClick={() => setShowToDoInput(!ShowToDoINput)}
      />
        
    </Container>
  );
}

export default App;
