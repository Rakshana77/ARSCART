
import React,{useState} from 'react';

export default function Payment() {
  const [amount, setamount] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(amount === ""){
    alert("please enter amount");
    }else{
      var options = {
        key: "rzp_test_ffSb2yIkIflJH9",
        key_secret:"iExGzM7nCvTIo41Rk4iV9kye",
        amount: amount *100,
        currency:"INR",
        name:"STARTUP_PROJECTS",
        description:"for testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"Rakshana",
          email:"sonarakshana@gmail.com",
          contact:"9585407302"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }
  return (
   <div className="container py-5">
       <div className="row justify-content-center">
        <div className="col-md-6">
         <div className="card shadow">
            <div className="card-body">
               <h2 className="text-center mb-4">
                 <i className="fas fa-credit-card"></i> Payment
               </h2>
   
     <br/>
     <input type="text"placeholder='Enter Amount'value={amount}onChange={(e)=>setamount(e.target.value)} />
     <br/><br/>
     <button onClick={handleSubmit}>submit</button>
    </div>
          </div>
        </div>
      </div>
      </div>
              
  )
  
}

// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';

// export default function Payment() {
//   const location = useLocation();
//   const cartTotal = location.state?.cartTotal || 0;
//   const [amount, setAmount] = useState(cartTotal);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!amount || amount <= 0) {
//       alert("Please enter a valid amount");
//       return;
//     }

//     setIsSubmitting(true);

//     const options = {
//       key: "rzp_test_ffSb2yIkIflJH9", // Public Razorpay key
//       amount: amount * 100, // Amount in smallest currency unit (paise)
//       currency: "INR",
//       name: "STARTUP_PROJECTS",
//       description: "Test transaction",
//       handler: function (response) {
//         alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
//         setIsSubmitting(false);
//         // Handle post-payment actions here
//       },
//       prefill: {
//         name: "Rakshana",
//         email: "sonarakshana@gmail.com",
//         contact: "9585407302",
//       },
//       notes: {
//         address: "Razorpay Corporate office",
//       },
//       theme: {
//         color: "#3399cc",
//       },
//     };

//     const razorpay = new window.Razorpay(options);
//     razorpay.open();

//     razorpay.on("payment.failed", function (response) {
//       alert(`Payment failed! Error: ${response.error.description}`);
//       setIsSubmitting(false);
//     });
//   };

//   return (
//     <div className="container py-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="card shadow">
//             <div className="card-body">
//               <h2 className="text-center mb-4">
//                 <i className="fas fa-credit-card"></i> Payment
//               </h2>
//               <form onSubmit={handleSubmit}>
//                 <div className="form-group mb-3">
//                   <label htmlFor="amount" className="form-label">
//                     Total Amount
//                   </label>
//                   <input
//                     type="number"
//                     id="amount"
//                     className="form-control"
//                     placeholder="Enter Amount"
//                     value={amount}
//                     onChange={(e) => setAmount(e.target.value)}
//                     disabled={isSubmitting}
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="btn btn-primary btn-block"
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? "Processing..." : "Pay Now"}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
