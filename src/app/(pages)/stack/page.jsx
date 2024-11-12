import { stackExperience } from "../../seed/stack-experience";
import CardStack from "../../ui/shared/CardStack";
import * as motion from "motion/react-client";

export default function StackPage() {
  return (
    <div className="p-12">
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0, transition: { duration: 0.3 } }}
      >
        <h1 className="text-5xl font-medium mb-8">Mi Stack</h1>
        <div className="flex flex-col gap-4">
          {stackExperience.map((stack, i) => {
            return <CardStack key={stack.name + i} {...stack} />;
          })}
        </div>
      </motion.div>
    </div>
  );
}
