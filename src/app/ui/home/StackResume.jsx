import React from "react";
import CardStack from "../shared/CardStack";

export default function StackResume() {
  return (
    <div className="mt-12">
      <h3 className="font-medium text-xl">Stack</h3>
      <div className="grid grid-cols-1 gap-2 xl:grid-cols-3">
        <CardStack
          title={"Framer"}
          description={"Animations"}
          imgSrc={"/icons/react.png"}
        />
        <CardStack
          title={"Framer"}
          description={"Animations"}
          imgSrc={"/icons/react.png"}
        />
        <CardStack
          title={"Framer"}
          description={"Animations"}
          imgSrc={"/icons/react.png"}
        />
        <CardStack
          title={"Framer"}
          description={"Animations"}
          imgSrc={"/icons/react.png"}
        />
      </div>
    </div>
  );
}
