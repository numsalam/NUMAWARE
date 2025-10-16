import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function HomePage() {
  return (
    <div className="container-responsive">
      <section className="py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <FadeIn>
          <div>
            <Image src="/logo.png" alt="Numaware" width={96} height={96} className="mb-6 rounded" />
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Empowering Businesses with <span className="text-gradient-cyan">Cybersecurity Confidence.</span>
            </h1>
            <p className="text-slate-300 mt-4 max-w-2xl">
              Assessments, training, compliance, and managed support to strengthen your security posture.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/services" className="cta-primary">Explore Services</Link>
              <Link href="/course" className="cta-secondary">Start Free Awareness Course</Link>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="card-surface p-6">
            <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-cyan/20 via-slate-800 to-slate-900 grid place-content-center text-slate-200">
              <p className="text-center px-6">Secure your organization with modern, pragmatic cybersecurity.
                Tailored for small and mid-size businesses.</p>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
