import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { v4 as uuidv4 } from 'uuid'
import { Container, ToDoList, Button, Input, ListItem, IconBox, Title } from './style.js'
import { FaTrashAlt, FaCheck } from "react-icons/fa";



function App() {

  document.addEventListener('keypress', function(e){
    if(e.key === "Enter"){
      console.log('a tecla enter foi pressionada');
    }
  });

  const [list, setList] = useState('')
  const [inputTask, setInputTask] = useState('')

  function change(e) {
    setInputTask(e.target.value)
  }

  function click(e) {
    if (inputTask) {
      setList([...list, { id: uuidv4(), task: inputTask, finished: false }])
    }

    else {
      alert('Digite uma tarefa')
    }
  }



  function finalizaTarefa(id) {
    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))
    setList(newList)
  }
  function deleteItem(id){
    const newList = list.filter(item =>  item.id !== id )
    setList(newList)
  }

 


  return (
    <Container>
      <ToDoList>
        <Input type="text" onChange={change} placeholder='Digite sua tarefa' />
        <Button onClick={click} >Adicionar</Button>
        <ul>
          {list.length > 0 ? (
          list.map((item) => (
            <ListItem key={item.id} isFinished={item.finished} >
              <IconBox>
                <FaCheck onClick={() => finalizaTarefa(item.id)} />
              </IconBox>
              <li >{item.task}</li>
              <IconBox>
                <FaTrashAlt onClick={()=> deleteItem(item.id)}/>
              </IconBox>
            </ListItem>
          ))
          ): (<Title>Não há tarefas.</Title>)
        }
        </ul>
      </ToDoList>
    </Container>
  )
}
export default App
