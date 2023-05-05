import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("main");
  });
  return (
    <div>
      <h4>메인 페이지</h4>
    </div>
  );
}
