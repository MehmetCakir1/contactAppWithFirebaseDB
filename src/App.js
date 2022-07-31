import "./App.css"
import Form from './components/Form'
import Table from './components/Table'
import { Grid} from "@mui/material";
import { useState } from 'react';
import {addUser,updateUser} from "./utils/functions"
import { ToastContainer } from 'react-toastify';



const initialValues={username:"",phoneNumber:"",gender:""}

const App = () => {

  const [isAdd,setIsAdd]=useState(false)
  const handleSubmit= (e)=>{
    e.preventDefault()
    // console.log(info)
    if(info.id){
      updateUser(info)
    }else{
        addUser(info)
    }
    setInfo(initialValues);
    setIsAdd(false)
  }

  const editUser=(id,username,phoneNumber,gender)=>{
    setIsAdd(true)
    setInfo({id,username,phoneNumber,gender})
  }

  const [info,setInfo]=useState(initialValues)
  return (
    <Grid container alignItems="center" justifyContent="center" sx={{padding:"2rem"}} className="mainContainer">
      <Form info={info} setInfo={setInfo}handleSubmit={handleSubmit} isAdd={isAdd} />
      <Table editUser={editUser}/>
      <ToastContainer/>
    </Grid>
  )
}

export default App