import FadeIn from "@/components/FadeIn";
import { services } from "@/data/services";
import Link from "next/link";

export const metadata = {
  title: "Our Cybersecurity Solutions | Numaware",
  description:
    "Security assessments, awareness training, compliance, incident response, and managed support.",
};

export default function ServicesPage() {
  return (
    <div className="container-responsive py-16">
      <FadeIn>
        <h1 className="text-3xl md:text-4xl font-bold">Our Cybersecurity Solutions</h1>
        <p className="text-slate-300 mt-3 max-w-2xl">
          Practical, effective services to reduce risk and build resilience.
        </p>
      </FadeIn>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((svc) => (
          <FadeIn key={svc.title}>
            <div className="card-surface p-6 h-full">
              <h3 className="text-xl font-semibold">{svc.title}</h3>
              <p className="text-slate-300 mt-2">{svc.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="mt-10">
        <Link href="/contact" className="cta-primary">Get a Free Consultation</Link>
      </div>
    </div>
  );
}
