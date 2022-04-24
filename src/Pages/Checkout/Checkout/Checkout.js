import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useServiceDetails from "../../../hooks/useServiceDetails";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);

  // its just another process show value
  // const [user , setUser] = useState({
  //   name:"shahrer ahamed",
  //   email:"its.shahrear@gmail.com",
  //   address:"amtoli poschim para, 2nd durgapur union",
  //   phone: "01303401619"
  // })
  // const handleAddress = e =>{
  //   const {address, ...rest} = user;
  //   const newAddress = e.target.value;
  //   const newUser = {address:newAddress, ...rest};
  //   setUser(newUser);
  // }



  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center">Please Book {service.name}</h2>
      <form className="my-4">
        <input className="w-100 mb-3" type="text" name="name" placeholder="Name" required />
        <br />
        <input className="w-100 mb-3" type="email" name="email" placeholder="Email" required />
        <br />
        <input className="w-100 mb-3" type="text" name="service" value={service.name} placeholder="Service" required />
        <br />
        <input className="w-100 mb-3" type="text" name="address" onChange={handleAddress} value={user.address} placeholder="Address" required />
        <br />
        <input className="w-100 mb-3" type="text" name="mobile" placeholder="Mobile" required />
        <br />
        <input className="btn btn-primary" type="submit" value="Check Out" />
      </form>
    </div>
  );
};

export default Checkout;
