import React from 'react'

const Notes = ({notes}) => {
  return (
    <>
      
     <section className="mb-5 mt-20">
      {/* Text Area-Notes to the Client..... */}
      <p>
       {notes} 
      </p>
      </section> 
      <section className='flex flex-row justify-between font-bold'>
      <p>Salesman Sign</p>
      <p>Receivers Sign</p>
      </section>
    </>
  )
}

export default Notes
