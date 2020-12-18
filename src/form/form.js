import React from 'react'
import './form.css'
export default function Form(props){
const {submit,change,form,disabled,error} = props

const onSubmit = event =>{
    event.preventDefault()
    submit()
}

const onChange = event =>{
    const {name, value, checked, type} = event.target
    const valueType = type === 'checkbox'? checked : value;
    change(name,valueType)
}
return(
    <form className='form' onSubmit={onSubmit}>
        <div className='divForm'>
            <div className='errorDiv'>
                <div>{error.name}</div>
                <div>{error.size}</div>
                <div>{error.delivryInstruction}</div>
            </div>
        <label>Name&nbsp;
            <input onChange={onChange} value={form.name} name='name' type='text'/>
        </label>
        <label>Mushroom
            <input onChange={onChange} value={form.mushroom} name='mushroom' type='checkbox'/>
        </label>
        <label>Ham
            <input onChange={onChange} value={form.ham} name='ham' type='checkbox'/>
        </label>
        <label>Jalapeno
            <input onChange={onChange} value={form.jalapeno} name='jalapeno' type='checkbox'/>
        </label>
        <label>Olives
            <input onChange={onChange} value={form.olive} name='olive' type='checkbox'/>
        </label>
        <label>Extra Cheese
            <input onChange={onChange} value={form.extraCheese} name='extraCheese' type='checkbox'/>
        </label>
        <label>Choose Size
        <select onChange={onChange} value={form.size} name ="size"> 
            <option value=''>--Select--</option>
            <option value='1'>Small: 12 inch , 8 slice</option>
            <option value='2'>Medium: 14 inch , 10 slice</option>
            <option value='3'>Large: 18 inch , 12 slice</option>
        </select>
        </label>
        <label>Special Instructions
            <input onChange={onChange} type='text' value={form.delivryInstruction} name='delivryInstruction'></input>
        </label>
        <button className='btmSubmit' disabled={disabled}>Add to Order!</button>
        </div>
    </form>




)
}