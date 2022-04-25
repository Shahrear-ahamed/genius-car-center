import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Order = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/order?email=${user.email}`;
    const findOrers = async () => {
      const getOrder = await axios.get(url);
      setOrders(getOrder.data);
    };
    findOrers();
  }, [user]);
  return (
    <div>
      <h2>Your total orders {orders.length}</h2>
    </div>
  );
};

export default Order;
