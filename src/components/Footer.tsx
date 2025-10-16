import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-800/60">
      <div className="container-responsive py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-white font-semibold text-lg">Numaware</h3>
          <p className="text-slate-400 mt-2 max-w-sm">
            Empowering businesses with cybersecurity confidence through assessments, training, and
            managed security.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-slate-200 font-medium">Quick Links</h4>
            <ul className="mt-2 space-y-2 text-slate-400">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/course">Course</Link>
              </li>
              <li>
                <Link href="/resources">Resources</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-200 font-medium">Follow</h4>
            <ul className="mt-2 space-y-2 text-slate-400">
              <li>
                <a href="#" aria-label="LinkedIn">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" aria-label="Twitter">
                  Twitter/X
                </a>
              </li>
              <li>
                <a href="#" aria-label="YouTube">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-slate-400">
          <p className="mb-2">numsalamsecurit@gmail.com</p>
          <p className="mb-2">+2347075665178</p>
          <p>© 2025 Numaware. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
