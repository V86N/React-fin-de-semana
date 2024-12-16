import React, { useEffect, useState } from 'react'

const Form = () => {
 const initialValue = {
    title:"",
    body:"",
    date:"",
    author:""
 }
 const [data, setData] = useState(initialValue)
 //const [btnDisabled, setBtnDisabled] = useState(true);
 //const [message, setMessage] = useState("");
 
 const handleOnChange = (e) => {
     setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
 
  /*const validateForm = () => {
    if (!data.name) {
      setMessage("");
    } else if (data.name.length < 3) {
      setMessage("Name must be at least 3 characters");
      setBtnDisabled(true);
    } else {
      setMessage("");
      setBtnDisabled(false);
    }
  };*/ //He intentado implementar validaciones y botón disable pero no me funciona bien, el botón se queda todo el rato en disable.

 const onSubmit =(e)=>{
    e.preventDefault()
    console.log(data)
    setData(initialValue)
  }
 
 /*useEffect(() =>{
    validateForm()
 }, [data])*/
 
 
 return (
    <div>Form
      <form>
         <input type='text' name='title' value={data.title} placeholder='Introduce a title' onChange={handleOnChange}/>
         <input type='text' name='body' value={data.body} placeholder='Introduce a body' onChange={handleOnChange}/>
         <input type='date' name='date' value={data.date} placeholder='Introduce a date' onChange={handleOnChange}/>
         <input type='text' name='author' value={data.author} placeholder='Introduce the author' onChange={handleOnChange}/>

         <button onClick={onSubmit} /*disabled = {btnDisabled}*/>Send</button>
         
      </form>

    </div>
  )
}

export default Form