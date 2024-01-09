import React from "react";
import { useState } from "react";
import Clientdetails from "./components/Clientdetails";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import Table from './components/Table';
import Dates from './components/Dates';
import Main from './components/Main';
import Header from './components/Header';
import Tableforms from "./components/Tableforms";


function App() {
  const handlePrint=()=>{
    window.print()
  }
  
  const [showInvoice,setShowInvoice]=useState(false);
  const [name1,setName1]= useState("Hannan");
  const [name2,setName2]= useState("Vishal");
  const [contact1,setContact1]=useState("97573452");
  const [contact2,setContact2]=useState("65426265");
  const [address,setAddress]= useState("souk Safat,Kuwait.");
  const [email,setEmail]= useState("hannan.antri@gmail.com");
  const [phone,setPhone]= useState("2560652");
  const [bankName,setBankName]= useState("Gulf Bank");
  const [bankAccount,setBankAccount]= useState("431313");
  const [website,setWebsite]= useState("http://juyushisoftware.co.in");
  const [clientName,setClientName]= useState("");
  const [clientAddress,setClientAddress]= useState("");
  const [invoiceNumber,setInvoiceNumber]= useState("");
  const [invoiceDate,setInvoiceDate]= useState("");
  const [dueDate,setDueDate]= useState("");
  const [notes,setNotes]= useState("Please submit your cheque.");
  const [modelNo, setModelNo] = useState("");
  const [description,setDescription]= useState("");
  const [quantity,setQuatity] = useState("");
  const [unitPrice,setUnitPrice]= useState("");
  const [totalAmount,setTotalAmount]=useState("");
  


  return (
    <main className=" flex flex-wrap mb-5 m-5 p-5 justify-center 
    item-center xl:max-w-4xl xl:mx-h-auto bg-white rounded shadow">

    {showInvoice ? ( <div>
   
   <Header handlePrint={handlePrint}/>

   <Main name1={name1} name2={name2} contact1={contact1} contact2={contact2} />

   <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate}
   /> 

   <Clientdetails clientName={clientName} clientAddress={clientAddress}/>

   <Table description={description} modelNo={modelNo} quantity={quantity}
   unitPrice={unitPrice} totalAmount={totalAmount}/>

   <Notes notes={notes} />

   <Footer email={email} phone={phone} name1={name1}
    website={website} bankName={bankName} bankAccount={bankAccount} address={address}/>
   <button onClick={()=>setShowInvoice(false)} className="bg-blue-500 text-white
    font-bold py-2 px-8 rounded shadow border-2
 border-blue-500 hover:bg-transparent hover:text-blue-500
  transition-all duration-300 mt-5 " > Edit Information </button>
   </div>): (
    <> 
    {/* name, address, email,phone,bankname,bank account number,
    website,clientname,client address,invoice number, invoice date,
    due date,notes */}

    <div className="flex flex-col justify-center">


        <article className="md:grid grid-cols-2 gap-10">
        <div className="flex flex-col">
   <label html for="name1"> Name-1: </label>
    <input type='text'
    name="name1"
    id="name1"
    placeholder="Enter name-1"
    autoComplete="off"
    value={name1}
    onChange={(e)=>setName1(e.target.value)}
     /> 
   </div>

   <div className="flex flex-col">
<label html for="contact1"> Contact-1: </label>
    <input type='text'
    name="contact1"
    id="contact1"
    placeholder="Enter contact-1"
    autoComplete="off"
    value={contact1}
    onChange={(e)=>setContact1(e.target.value)}
     /> 
   </div>
     </article>

     <article className="md:grid grid-cols-2 gap-10">
     <div className="flex flex-col">
       
       <label html for="name2">Name-2: </label>
        <input type='text'
        name="name2"
        id="name2"
        placeholder="Enter name-2"
        autoComplete="off"
        value={name2}
        onChange={(e)=>setName2(e.target.value)}
         /> 
      </div>
    
    <div className="flex flex-col">
    <label html for="contact2">Contact-2: </label>
        <input type='text'
        name="contact2"
        id="contact2"
        placeholder="Enter contact-2"
        autoComplete="off"
        value={contact2}
        onChange={(e)=>setContact2(e.target.value)}
         /> 
    </div>
     </article>

    

    
<article className="md:grid grid-cols-3 gap-10">
<div className="flex flex-col">
 <label html for="address">Address: </label>
    <input type='text'
    name="address"
    id="address"
    placeholder="Enter your address."
    autoComplete="off"
    value={address}
    onChange={(e)=>setAddress(e.target.value)}
/>
 </div>

 <div className="flex flex-col">
 <label html for="email"> Email: </label>
    <input type='email'
    name="email"
    id="email"
    placeholder="Enter your Email."
    autoComplete="off"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
/>
 </div>

<div className="flex flex-col">
<label html for="phone"> Phone Number: </label>
    <input type='text'
    name="phone"
    id="phone"
    placeholder="Enter your phone number"
    autoComplete="off"
    value={phone}
    onChange={(e)=>setPhone(e.target.value)}
/>
</div>
</article>


<article className="md:grid grid-cols-2 gap-10">
<div className="flex flex-col">
<label html for="bankname"> Bank Name : </label>
    <input type='text'
    name="bankname"
    id="bankname"
    placeholder="Enter your Bank Name"
    autoComplete="off"
    value={bankName}
    onChange={(e)=>setBankName(e.target.value)}
/>
</div>

<div className="flex flex-col">
<label html for="bankaccount">Bank Account Number : </label>
    <input type='text'
    name="bankaccount"
    id="bankaccount"
    placeholder="Enter your Bank Account"
    autoComplete="off"
    value={bankAccount}
    onChange={(e)=>setBankAccount(e.target.value)}
/>
</div>
</article>

<div className="flex flex-col">
<label html for="website"> Website :</label>
    <input type='text'
    name="website"
    id="website"
    placeholder="Enter Website"
    autoComplete="off"
    value={website}
    onChange={(e)=>setWebsite(e.target.value)}
/>
</div>



<article className="md:grid grid-cols-2 gap-10 mt-16">
<div className="flex flex-col">
<label html for="clientname">Client's Name :</label>
    <input type='text'
    name="clientname"
    id="clientname"
    placeholder="Enter your Client's Name"
    autoComplete="off"
    value={clientName}
    onChange={(e)=>setClientName(e.target.value)}
/>
</div>

<div className="flex flex-col">
<label html for="clientaddress">Client's Address:</label>
    <input type='text'
    name="clientaddress"
    id="clientaddress"
    placeholder="Enter your Client's Address"
    autoComplete="off"
    value={clientAddress}
    onChange={(e)=>setClientAddress(e.target.value)}
/>
</div>
</article>



<article className="grid grid-cols-3 gap-10 mt-16">
    
<div className="flex flex-col">
<label html for="invoicenumber"> Invoice Number: </label>
    <input type='text'
    name="invoicenumber"
    id="invoicenumber"
    placeholder="Enter your invoice number"
    autoComplete="off"
    value={invoiceNumber}
    onChange={(e)=>setInvoiceNumber(e.target.value)}
/>
</div>

<div className="flex flex-col">
<label html for="invoicedate"> Invoice Date: </label>
    <input type='date'
    name="invoicedate"
    id="invoicedate"
    placeholder=" Invoice Date"
    autoComplete="off"
    value={invoiceDate}
    onChange={(e)=>setInvoiceDate(e.target.value)}
/>
</div>
<div className="flex flex-col">
    
<label html for="duedate"> Due Date: </label>
    <input type='date'
    name="duedate"
    id="duedate"
    placeholder=" Due Date"
    autoComplete="off"
    value={dueDate}
    onChange={(e)=>setDueDate(e.target.value)}
/>
</div>
</article>


<article>
    <Tableforms modelNo={modelNo} setModelNo={setModelNo} description={description}
     setDescription={setDescription} quantity={quantity} setQuantity={setQuatity} 
     unitPrice={unitPrice} setUnitPrice={setUnitPrice} totalAmount={totalAmount}
      setTotalAmount={setTotalAmount}/>
</article>
<label html for="notes">Enter notes....</label>
    <input type='text'
    name="notes"
    id="notes"
    placeholder="Enter Notes..."
    autoComplete="off"
    value={notes}
    onChange={(e)=>setNotes(e.target.value)}
/>




<button onClick={()=>setShowInvoice(true)} className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2
 border-blue-500 hover:bg-transparent hover:text-blue-500
  transition-all duration-300">Preview Invoice</button>
    </div>
    </>
   )}
      
    </main>
  );
}

export default App;
