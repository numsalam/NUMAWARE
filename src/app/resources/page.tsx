import FadeIn from '@/components/FadeIn';
import { posts } from '@/data/posts';

export const metadata = {
  title: 'Resources & Insights | Numaware',
  description: 'Tips, news, and updates to stay secure.',
};

export default function ResourcesPage() {
  return (
    <div className="container-responsive py-16">
      <FadeIn>
        <h1 className="text-3xl md:text-4xl font-bold">Resources</h1>
        <p className="text-slate-300 mt-3 max-w-2xl">Cybersecurity tips, news, and updates.</p>
      </FadeIn>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <FadeIn key={p.title}>
            <article className="card-surface p-6 h-full">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-slate-400 mt-2">{p.excerpt}</p>
              <p className="text-slate-500 mt-4 text-sm">{new Date(p.date).toDateString()}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
