import React from 'react'
import { useEffect } from 'react'

const Tableforms = ({modelNo, setModelNo,description,setDescription,quantity,setQuantity,
   unitPrice, setUnitPrice,totalAmount,setTotalAmount}) => {

   useEffect(()=>{
    const calculateAmount=(totalAmount)=>
   {setTotalAmount(quantity*unitPrice)}
  calculateAmount(totalAmount)
  },
   [totalAmount,unitPrice,quantity,setTotalAmount]
   
      )
  return (

    <>
     <div className='flex flex-col'>
      <label htmlFor='description'>Description</label>
      <input
       type='text'
        name='description' 
        id='description'
       placeholder='Item Description'
        value={description}
        autoComplete='off'
       onChange={(e)=>setDescription(e.target.value)}/>
      </div>

      

      <article className="md:grid grid-cols-3 gap-10">
      
<div className='flex flex-col'>
      <label htmlFor='modelNo'>Model Number</label>
      <input
       type='text'
        name='modelNo' 
        id='modelNo'
       placeholder='Model No.'
        value={modelNo}
        autoComplete='off'
       onChange={(e)=>setModelNo(e.target.value)}/>
      </div>

      <div className='flex flex-col'>
      <label htmlFor='quantity'>Quantity</label>
      <input
       type='text'
        name='quantity' 
        id='quantity'
       placeholder='Quantity'
        value={quantity}
        autoComplete='off'
       onChange={(e)=>setQuantity(e.target.value)}/>
      </div>

      <div className='flex flex-col'>
      <label htmlFor='unitPrice'>Unit Price</label>
      <input
       type='text'
        name='unitPrice' 
        id='unitPrice'
       placeholder='Unit Price'
        value={unitPrice}
        autoComplete='off'
       onChange={(e)=>setUnitPrice(e.target.value)}/>
      </div>
      </article>

      <div className='flex flex-col'>
      <label>Total Amount</label>
      <p>{totalAmount}</p>

      </div>
    </>
  )
}

export default Tableforms

