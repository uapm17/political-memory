import { title } from "@/components/primitives";

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      <h1 className={title({ class: "mb-8" })}>Blog</h1>
      <p className="p-2 text-left">To be here ...</p>
    </div>
  );
}
