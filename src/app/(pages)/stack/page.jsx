import React from "react";
import CardStack from "../../ui/shared/CardStack";

export default function StackPage() {
  return (
    <div className="p-12">
      <h1 className="text-5xl font-medium mb-8">Mi Stack</h1>
      <div className="flex flex-col gap-4">
        <CardStack />
      </div>
    </div>
  );
}
