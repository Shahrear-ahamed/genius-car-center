import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Order = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = `https://obscure-inlet-14741.herokuapp.com/order?email=${user.email}`;
    const findOrers = async () => {
      const getOrder = await axios.get(url);
      setOrders(getOrder.data);
    };
    findOrers();
  }, [user]);
  return (
    <div className="w-50 my-4 mx-auto">
      <h2>Your total orders {orders.length}</h2>
      <div>
        {orders.map((order) => (
          <p key={order._id}>
            {user.email} product is {order.service}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Order;
