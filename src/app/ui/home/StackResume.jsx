import React from "react";
import CardStack from "../shared/CardStack";
import LinkButton from "../shared/LinkButton";
import { stackExperience } from "../../seed/stack-experience";

export default function StackResume() {
  return (
    <div className="mt-12">
      <h3 className="font-medium text-xl">Stack</h3>
      <div className="grid grid-cols-1 gap-2 xl:grid-cols-3">
        {stackExperience.map((stack, i) => {
          return (
            <CardStack key={stack.name + i} {...stack} experience={null} />
          );
        })}
      </div>
      <div className="flex flex-col md:flex-row md:justify-end mt-8">
        <LinkButton href={"/stack"} text={"Ver Stack"} />
      </div>
    </div>
  );
}
