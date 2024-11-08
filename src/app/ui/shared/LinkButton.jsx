import { ArrowRight } from "@geist-ui/icons";
import Link from "next/link";

export default function LinkButton({ href, text }) {
  return (
    <Link href={href} className="">
      <button className="w-full px-3 py-2 rounded-md border border-slate-400 flex gap-x-1 justify-center items-center">
        <span>{text}</span>
        <ArrowRight size={16} />
      </button>
    </Link>
  );
}
