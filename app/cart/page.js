"use client";

import { useEffect, useState } from "react";
import { age, name } from "./data";

export default function Cart() {
  const [values, setValues] = useState({
    name: "",
    age: "",
  });

  const { name, age } = values;

  useEffect(() => {
    fetch("/api/comments")
      .then((res) => res.json())
      .then((data) => {
        data;
        setValues({
          ...values,
          [Object.keys(data)]: Object.values(data),
        });
        console.log(values);
      });
  }, []);
  return (
    <div>
      <h4 className="title">Cart</h4>
      <div className="cart-item">
        <p>
          {name} {age}
        </p>
        <p>$40</p>
        <p>1개</p>
      </div>
      <CartItem></CartItem>
      <CartItem></CartItem>
      <CartItem></CartItem>
    </div>
  );
}

function CartItem() {
  return (
    <div className="cart-item">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
