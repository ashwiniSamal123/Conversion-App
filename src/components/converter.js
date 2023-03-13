import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

const Converter = () => {

    
    const [fromUnit, setFromunit]= useState("Kg")
    const [toUnit, setTounit]= useState("gm")
    const [value, setValue]= useState("")
    const [result, setResult]= useState("")
    const [currentconversion, setCurrentconversion]= useState("")

    const onSelectChange =(event)=>{
        console.log('event', event.target.value)
        const value = event.target.value
        setCurrentconversion(event.target.value)
        setValue('')
        setResult('')
        if(value =='1'){
            setFromunit('Kg')
            setTounit('gm')
        }else if(value == '2'){
            setFromunit('Km')
            setTounit('Meter')
        }  else if( value == '3'){
            setFromunit('Dollar')
            setTounit('Indian Rupee')
        } else if( value == '4'){
            setFromunit('Meter')
            setTounit('Foot')
        }

    }

    const onValueChange = (event)=>{
        setValue(event.target.value)
        if(event.target.value == ''){
            setResult('')
        }else{
            if(currentconversion =='1'){
                setResult(parseFloat(event.target.value)*1000)
            }else if(currentconversion =='2'){
                setResult(parseFloat(event.target.value)*1000)
            }else if( currentconversion =='3'){
                setResult(parseFloat(event.target.value)*81.39)
            }else if( currentconversion =='4'){
                setResult(parseFloat(event.target.value)*3.28084)
            }

        }
      
    }

    const onResultChange = (event)=>{
        setResult(event.target.value)
        if(event.target.value ==''){
            setValue('')
        }else{
            if(currentconversion =='1'){
                setValue(parseFloat(event.target.value)/1000)
            }else if(currentconversion =='2'){
                setValue(parseFloat(event.target.value)/1000)
            }else if( currentconversion =='3'){
                setValue(parseFloat(event.target.value)/81.39)
            }else if( currentconversion =='4'){
                setValue(parseFloat(event.target.value)/3.28084)
            }

        }
        
    }


  return (
    <Form>
     <Form.Group className="mb-3" controlId="conversion">
        <Form.Label>Select Your conversion</Form.Label>
        <Form.Select aria-label="Default select example" onChange={onSelectChange}>
      <option value="1">Kg-gm</option>
      <option value="2">Km-Meter</option>
      <option value="3">Dollar-Indian Rupee</option>
      <option value="4">Meter-Foot</option>
    </Form.Select>
     </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{fromUnit}</Form.Label>
        <Form.Control type="text" placeholder="Enter value" value={value} onChange={onValueChange}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="result">
        <Form.Label>{toUnit}</Form.Label>
        <Form.Control type="text" placeholder="result" value={result} onChange={onResultChange}/>
      </Form.Group>
      
    </Form>
  )
}

export default Converter