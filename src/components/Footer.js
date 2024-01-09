import React from 'react'

const Footer = ({email,phone,website,bankName,bankAccount, name1,address}) => {
  return (
    <>
      <ul className="flex flex-wrap items-center justify-center mt-10">
       
      <li><span className="font-bold p-2">Your Address:</span>{address}</li>
      <li><span className="font-bold p-2">Your email:</span>{email}</li>
      <li><span className="font-bold p-2">Phone Number:</span>{phone}</li>
      <li><span className="font-bold p-2">Bank:</span>{bankName}</li>
      <li><span className="font-bold p-2">Account Holder:</span>{name1}</li>
      <li><span className="font-bold p-2">Account Number:</span>{bankAccount}</li>
      <li><span className="font-bold p-2">Website:</span> http://juyushisoftware.co.in</li>
      </ul>
      
    </>
  )
}

export default Footer
