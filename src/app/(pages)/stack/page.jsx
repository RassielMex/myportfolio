import { stackExperience } from "../../seed/stack-experience";
import CardStack from "../../ui/shared/CardStack";

export default function StackPage() {
  return (
    <div className="p-12">
      <h1 className="text-5xl font-medium mb-8">Mi Stack</h1>
      <div className="flex flex-col gap-4">
        {stackExperience.map((stack, i) => {
          return <CardStack key={stack.name + i} {...stack} />;
        })}
      </div>
    </div>
  );
}
