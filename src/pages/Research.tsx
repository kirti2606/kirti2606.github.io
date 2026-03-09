import { FileText, ExternalLink } from 'lucide-react'

export default function Research() {
  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/70 p-6 backdrop-blur-md dark:border-slate-600/40 dark:bg-slate-900/70">
        <div className="absolute inset-0 neural-bg pointer-events-none opacity-60 dark:opacity-20" />
        <div className="relative space-y-3">
          <h1 className="text-3xl font-bold tracking-tight">Kirti’s Research Portfolio</h1>
          <p className="max-w-2xl text-slate-600 dark:text-slate-300">Neuro‑Innovation & AI for early Alzheimer’s detection — methods and publications.</p>
        </div>
      </section>

      {/* Methodology removed as requested */}

      <section aria-labelledby="repository" className="space-y-3">
        <h2 id="repository" className="text-xl font-semibold">All Publications</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { tag: 'AI in Healthcare', title: 'Explainable CNNs for Early AD', href: 'https://example.com/alzheimers-mri-cnn.pdf' },
            { tag: 'Deep Learning', title: 'Multimodal MRI + MMSE Fusion', href: 'https://example.com/multimodal-fusion.pdf' },
            { tag: 'AI in Healthcare', title: 'Edge Inference in Clinics', href: 'https://example.com/edge-inference.pdf' }
          ].map((r) => (
            <article key={r.title} className="rounded-xl border border-white/20 bg-white/70 p-5 shadow-lg backdrop-blur-md dark:border-slate-600/40 dark:bg-slate-900/70" data-aos="fade-up">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-trust-light/10 px-3 py-1 text-xs font-medium text-trust-blue">{r.tag}</div>
              <h3 className="mb-3 text-lg font-semibold">{r.title}</h3>
              <div className="flex items-center gap-3">
                <a href={r.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-trust-blue hover:underline">
                  <FileText className="h-4 w-4" /> Read Full Article
                </a>
                <a href={r.href} target="_blank" rel="noopener noreferrer" aria-label="External link" className="text-slate-500 hover:text-trust-light">
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
