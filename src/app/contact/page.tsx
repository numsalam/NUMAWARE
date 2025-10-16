import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Contact Numaware",
  description: "Get in touch for assessments, training, or support.",
};

export default function ContactPage() {
  return (
    <div className="container-responsive py-16">
      <FadeIn>
        <h1 className="text-3xl md:text-4xl font-bold">Contact</h1>
        <p className="text-slate-300 mt-3 max-w-2xl">
          Tell us about your goals. We’ll reply within one business day.
        </p>
      </FadeIn>

      <div className="grid gap-10 md:grid-cols-3 mt-10">
        <form
          action="https://formspree.io/f/your-id"
          method="POST"
          className="md:col-span-2 card-surface p-6 grid gap-4"
        >
          <label className="grid gap-1">
            <span className="text-slate-300">Name</span>
            <input name="name" required className="rounded bg-slate-900 border border-slate-700 px-3 py-2" />
          </label>
          <label className="grid gap-1">
            <span className="text-slate-300">Email</span>
            <input type="email" name="email" required className="rounded bg-slate-900 border border-slate-700 px-3 py-2" />
          </label>
          <label className="grid gap-1">
            <span className="text-slate-300">Message</span>
            <textarea name="message" rows={5} required className="rounded bg-slate-900 border border-slate-700 px-3 py-2" />
          </label>
          <button type="submit" className="cta-primary w-max">Send Message</button>
        </form>

        <div className="card-surface p-6">
          <h3 className="text-lg font-semibold">Numaware</h3>
          <p className="text-slate-300 mt-2">contact@numaware.com</p>
          <p className="text-slate-400 mt-2">Hyderabad, India</p>
        </div>
      </div>
    </div>
  );
}
