import React, { useState } from 'react';
import TodoAndDoneBtn from './components/Button';
import { BigWrapperBox, ButtonStyle, DoneWrapperBox, InputStyle, ListWrapper, WorkingWrapperBox, WrapperInput } from './components/style';
export default function App() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [toDoArr, setToDoArr] = useState([]);
  const [doneArr, setDoneArr] = useState([]);

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const onClickAddBtn = () => {
    if(title && contents) {
    const newToDo = {
      id: toDoArr.length + 1,
      title,
      contents,
      isDone: false,
    };
    setToDoArr([...toDoArr, newToDo]);
    setTitle("");
    setContents("");
  }
  };
  console.log("Done 버튼 누르기 전 toDoArr", toDoArr)

  const onClickDeleteBtn = (deleteButtonId, listType) => {
    if (listType === "todo") {
      const deleteTodo = toDoArr.filter((data) => data.id !== deleteButtonId);
      setToDoArr(deleteTodo);
    } else if (listType === "done") {
      const deleteDone = doneArr.filter((data) => data.id !== deleteButtonId);
      setDoneArr(deleteDone);
    }
  };

  const onClickDone = (doneButtonId) => {
    const selectedTask = toDoArr.find((item) => item.id === doneButtonId);
    selectedTask.isDone = true;
    console.log(selectedTask)
    setDoneArr([...doneArr, selectedTask]);//done 추가
    setToDoArr(toDoArr.filter((data) => data.id !== doneButtonId)); //working List 삭제
  };

  console.log("Done 버튼 누른 후 toDoArr", toDoArr)

  const onClickCancel = (cancelButtonId) => {
    const selectedTask = doneArr.find((item) => item.id === cancelButtonId);
    selectedTask.isDone = false;
    setToDoArr([...toDoArr, selectedTask]);
    setDoneArr(doneArr.filter((data) => data.id !== cancelButtonId));
  };

  return (
    <div style={BigWrapperBox}>
      <div style={WrapperInput}>
        <h1>Let's make the new To Do List</h1>
        <input placeholder='제목을 입력하세요' 
        style={InputStyle} 
        value={title} 
        onChange={onChangeTitle} 
        type='text' />
        <input placeholder='할일을 입력하세요' 
        style={InputStyle} 
        value={contents} 
        onChange={onChangeContents} 
        type='text' />
        <button style={ButtonStyle} onClick={onClickAddBtn}> 
        등록하기 
        </button>
      </div>
      <div style={ListWrapper}>
        <div style={WorkingWrapperBox}>
          <h2>Working List</h2>
          {toDoArr.map((item) => (
            <TodoAndDoneBtn
              key={item.id}
              item={item}
              onClickDeleteBtn={onClickDeleteBtn}
              onClickDone={onClickDone}
              isDone={false}
            />
          ))}
        </div>
        <div style={DoneWrapperBox}>
          <h2>Done</h2>
          {doneArr.map((item) => (
            <TodoAndDoneBtn
              key={item.id}
              item={item}
              onClickDeleteBtn={onClickDeleteBtn}
              onClickCancel={onClickCancel}
              isDone={true}
            />
          ))}
        </div>
      </div>
    </div>
  );}
