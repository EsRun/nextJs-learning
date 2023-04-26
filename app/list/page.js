import Image from "next/image";

export default function List() {
  let goods = ["Tomato", "Pasta", "Count"];

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {goods.map((el, idx) => {
        return (
          <div className="food" key={idx}>
            <img src={`/food${idx}.png`} className="food-img" />
            <h4>{el} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
