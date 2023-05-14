"use client";

import { useEffect, useState } from "react";
import { age, name } from "./data";

export default function Cart() {
  const [values, setValues] = useState({
    name: "",
    age: "",
  });

  useEffect(() => {
    fetch("/api/comments")
      .then((res) => res.json())
      .then((data) => {
        data;
        setValues({
          ...values,
          ...data,
        });
      });
  }, []);
  return (
    <div>
      <h4 className="title">Cart</h4>
      {Object.entries(values).map(([key, value], idx) => (
        <CartItem key={idx} age={value.age} name={value.name} />
      ))}
    </div>
  );
}

function CartItem({ age, name }) {
  return (
    <div className="cart-item">
      <p>{age}</p>
      <p>{name}</p>
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
