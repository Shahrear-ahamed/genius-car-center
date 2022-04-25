import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useServiceDetails from "../../../hooks/useServiceDetails";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);
  const [user] = useAuthState(auth);

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

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const order = {
      name: user.displayName,
      email: user.email,
      service: service.name,
      serviceId: serviceId,
      address: e.target.address.value,
      mobile: e.target.mobile.value,
    };
    axios.post("https://obscure-inlet-14741.herokuapp.com/order", order).then((res) => {
      const { data } = res;
      if (data.insertedId) {
        toast.success("Your order is book!!");
        e.target.reset();
      }
    });
  };

  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center">Please Book {service.name}</h2>
      <form className="my-4" onSubmit={handlePlaceOrder}>
        <input
          className="w-100 mb-3"
          type="text"
          name="name"
          value={user?.displayName}
          placeholder="Name"
          readOnly
          disabled
          required
        />
        <br />
        <input
          className="w-100 mb-3"
          type="email"
          name="email"
          value={user?.email}
          placeholder="Email"
          readOnly
          disabled
          required
        />
        <br />
        <input
          className="w-100 mb-3"
          type="text"
          name="service"
          value={service.name}
          placeholder="Service"
          readOnly
          disabled
          required
        />
        <br />
        <input
          className="w-100 mb-3"
          type="text"
          name="address"
          placeholder="Address"
          required
        />
        <br />
        <input
          className="w-100 mb-3"
          type="text"
          name="mobile"
          placeholder="Mobile"
          required
        />
        <br />
        <input className="btn btn-primary" type="submit" value="Check Out" />
      </form>
    </div>
  );
};

export default Checkout;
