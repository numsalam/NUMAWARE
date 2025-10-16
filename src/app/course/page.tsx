import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { modules } from "@/data/modules";

export const metadata = {
  title: "Cybersecurity Awareness for Business Owners | Numaware",
  description: "Free 9-module course to build a security-aware organization.",
};

export default function CoursePage() {
  return (
    <div className="container-responsive py-16">
      <FadeIn>
        <h1 className="text-3xl md:text-4xl font-bold">Cybersecurity Awareness for Business Owners</h1>
        <p className="text-slate-300 mt-3 max-w-2xl">
          Learn the essentials of modern cybersecurity and empower your team to stay safe.
        </p>
      </FadeIn>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((m) => (
          <FadeIn key={m.title}>
            <div className="card-surface p-6 h-full flex flex-col">
              <h3 className="text-lg font-semibold">{m.title}</h3>
              <p className="text-slate-300 mt-2 flex-1">{m.description}</p>
              <Link href="#" className="cta-secondary mt-4">Start Lesson</Link>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="mt-12">
        <Link href="#" className="cta-primary">Get Certified</Link>
      </div>
    </div>
  );
}
