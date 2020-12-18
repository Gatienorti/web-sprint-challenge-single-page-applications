import React, {useState, useEffect} from "react";
import Form from './form/form'
import axios from'axios'
import * as yup from 'yup'
import {Route, Link} from 'react-router-dom'
import schema from './schema/schema'
import './App.css'

const orderArray=[];
const itIsDisabled=true;

const initForm = {
  name:'',
  size:'',
  delivryInstruction:'',
  mushroom:false,
  ham:false,
  jalapeno:false,
  olive:false,
  extraCheese:false,
}

const formError = {
  name:'',
  size:'',
  delivryInstruction:''
}

function App(){

  const [order, setOrder] = useState(orderArray)
  const [form, setForm] = useState(initForm)
  const [formErr, setFormErr] = useState(formError)
  const [disabled, setDisabled] = useState(itIsDisabled)

  const postOrder = (newOrder) => {
    axios
      .post('https://reqres.in/api/users', newOrder)
      .then((res)=> {
        setForm([...order, res.data])
      })
      .catch((err)=>{
        debugger
      })
      .finally(()=>{
        setForm(initForm)
      })
  }
  const inputChange = (name ,value) =>{
    yup
      .reach(schema, name)
      .validate(value)
      .then(()=>{
        setFormErr({
          ...formErr,
          [name]:''
        })
      })
      .catch((err)=>{
        setFormErr({
          ...formErr,
          [name]: err.errors[0]
        })
      })
      setForm({
        ...form,
        [name]: value
      })
  }

    const formSubmit = ()=>{
      const newOrder ={
          name:form.name.trim(),
          size:form.size.trim(),
          delivryInstruction:form.delivryInstruction.trim(),
          mushroom:form.mushroom,
          ham:form.ham,
          jalapeno:form.jalapeno,
          olive:form.olive,
          extraCheese:form.extraCheese,
      }
      postOrder(newOrder)
    } 

    useEffect(() => {
      schema.isValid(form).then((valid) => {
        setDisabled(!valid);
      });
    }, [form]);



  return (
    <div className='App'>
      <div className='tittle'>
      <Link className='titleBtn'to='/pizza'>
        Hungry? Click Here!!!
      </Link>
      </div>
      {/* <Link to='/'>
        Home
      </Link> */}
      {/* <Route exact path='/'>
        <Home></Home>
      </Route> */}
      <Route path='/pizza'>
        <Form change={inputChange} submit={formSubmit} form={form} disabled={disabled} error={formErr}></Form>
      </Route>
    </div>
  );
};
export default App;
