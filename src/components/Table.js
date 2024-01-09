import React from 'react'

const Table = ({description,modelNo,quantity,totalAmount,unitPrice}) => {
  return (
    <>
     <table width="100%">
      <thead>
      <tr className='bg-gray-200 font-bold'>
        <td>Model No.</td>
        <td>Description</td>
        <td>Qty</td>
        <td>Unit Price</td>
        <td>Total Amount</td>
      </tr>
      </thead>

      <tbody>
      <tr >
        <td>{modelNo}</td>
        <td>{description}</td>
        <td>{quantity}</td>
        <td>{unitPrice}</td>
        <td>{totalAmount}</td>
      </tr>
      </tbody>
     </table>
          
  
      
        
    </>
  )
}

export default Table
