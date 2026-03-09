import { ExternalLink, FileText, Brain } from 'lucide-react'
import { Link } from 'react-router-dom'

type ResearchCardProps = {
  tag: 'AI in Healthcare' | 'Deep Learning'
  title: string
  summary: string
  href: string
}

function ResearchCard({ tag, title, summary, href }: ResearchCardProps) {
  return (
    <div
      className="group rounded-xl border border-white/20 bg-white/70 p-6 shadow-lg backdrop-blur-md transition hover:shadow-xl dark:border-slate-700/50 dark:bg-slate-900/60"
      data-aos="fade-up"
    >
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-trust-light/10 px-3 py-1 text-xs font-medium text-trust-blue">
        <Brain className="h-4 w-4" /> {tag}
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">{summary}</p>
      <div className="flex items-center gap-3">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-trust-blue px-4 py-2 text-sm font-medium text-white transition hover:bg-trust-light"
        >
          <FileText className="h-4 w-4" />
          Read Full Article
        </a>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="External link"
          className="text-slate-500 transition group-hover:text-trust-light"
        >
          <ExternalLink className="h-5 w-5" />
        </a>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="space-y-20">
      <section className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/70 p-6 sm:p-8 backdrop-blur-md dark:border-slate-600/40 dark:bg-slate-900/70">
        <div className="absolute inset-0 neural-bg pointer-events-none opacity-60 dark:opacity-20" />
        <div className="relative z-10">
          <div className="flex flex-col-reverse items-start justify-between gap-6 md:flex-row">
            <div className="mt-4 md:mt-0">
              <h1 className="mb-3 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Kirti
              </h1>
              <p className="mb-3 text-base font-semibold text-trust-blue">BOTT (3rd Year) · AI in Healthcare</p>
              <p className="max-w-2xl text-slate-600 dark:text-slate-300">
                Operation Theatre Technology student at{' '}
                <a className="text-trust-light underline-offset-4 hover:underline" href="https://www.uudoon.in/" target="_blank" rel="noreferrer">
                  Uttaranchal University, Dehradun
                </a>. Specializations: Anesthesia, NABH, patient safety & quality control, and healthcare SOPs development & workflow implementations.
              </p>
              <p className="mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
                I combine sterile OT precision with practical SOP design and AI-driven early Alzheimer’s detection.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {['BOTT', 'AI in Healthcare', 'OT Management', 'NABH'].map((chip) => (
                  <span key={chip} className="rounded-full bg-trust-light/10 px-3 py-1 text-xs font-medium text-trust-blue">
                    {chip}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  to="/research"
                  className="inline-flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 dark:bg-slate-100 dark:text-slate-900"
                >
                  Explore Research
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-900 hover:border-trust-light dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                >
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="w-full md:w-56">
              <div className="aspect-square overflow-hidden rounded-full border border-white/30 bg-white/80 p-1 ring-1 ring-white/40 shadow-md backdrop-blur-md dark:border-slate-600/40 dark:bg-slate-900/70 dark:ring-slate-400/20">
                <img
                  src="/image.png"
                  alt="Kirti portrait"
                  className="h-full w-full rounded-full object-cover object-center scale-110"
                  loading="eager"
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement
                    el.src = '/profile.jpg'
                    el.onerror = () => {
                      el.src = '/profile.svg'
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="pros" className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900" data-aos="fade-up">
        <h2 id="pros" className="mb-2 text-2xl font-semibold">Professional Strengths</h2>
        <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">
          Key capabilities that I bring to perioperative care and healthcare operations.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            'Anesthesia assistance and perioperative monitoring',
            'NABH-aligned patient safety and quality control',
            'Healthcare SOPs: drafting, onboarding, audits, and updates',
            'OT management and sterile workflow optimization',
            'AI-driven early Alzheimer’s detection research pipelines'
          ].map((p) => (
            <div key={p} className="rounded-lg border border-slate-200 bg-white p-4 text-sm dark:border-slate-800 dark:bg-slate-900">
              {p}
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="workflow" className="rounded-2xl border border-white/20 bg-white/70 p-6 backdrop-blur-md dark:border-slate-600/40 dark:bg-slate-900/70" data-aos="fade-up">
        <h2 id="workflow" className="mb-2 text-2xl font-semibold">Healthcare SOPs — Implementation Workflow</h2>
        <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">
          End-to-end pathway for safe, compliant practice (NABH focus).
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: 'SOP Development', d: 'Draft evidence-based SOPs aligned to NABH.' },
            { t: 'Training & Onboarding', d: 'Cross-functional drills and competency sign-offs.' },
            { t: 'Compliance & Audit', d: 'Checklists, RCA of deviations, corrective actions.' },
            { t: 'Continuous Improvement', d: 'Update SOPs from incident learnings & metrics.' }
          ].map((x) => (
            <div key={x.t} className="rounded-lg border border-white/20 bg-white/70 p-4 backdrop-blur-md dark:border-slate-600/40 dark:bg-slate-900/70" data-aos="fade-up">
              <h3 className="text-base font-semibold">{x.t}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="research" className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/70 p-6 backdrop-blur-md dark:border-slate-600/40 dark:bg-slate-900/70">
        <div className="absolute inset-0 neural-bg pointer-events-none opacity-60 dark:opacity-20" />
        <div className="relative space-y-6">
          <div>
          <h2 id="research" className="text-2xl font-semibold">Featured Research</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Alzheimer’s detection with deep learning pipelines across imaging and clinical signals.
          </p>
        </div>
        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ResearchCard
            tag="AI in Healthcare"
            title="Explainable CNNs for Early Alzheimer’s on MRI"
            summary="Pipeline integrating bias-aware preprocessing, 3D CNNs, and Grad-CAM interpretability to spotlight hippocampal atrophy patterns."
            href="https://example.com/alzheimers-mri-cnn.pdf"
          />
          <ResearchCard
            tag="Deep Learning"
            title="Multimodal Fusion of MRI and Cognitive Scores"
            summary="Late-fusion transformers blending imaging embeddings with MMSE trajectories to enhance early-stage sensitivity."
            href="https://example.com/multimodal-fusion.pdf"
          />
          <ResearchCard
            tag="AI in Healthcare"
            title="Edge Inference for Memory Clinics"
            summary="Quantized models for low-latency screening in clinic settings; benchmarks on embedded hardware."
            href="https://example.com/edge-inference.pdf"
          />
        </div>
        <div className="relative">
          <Link
            to="/research"
            className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 dark:bg-slate-100 dark:text-slate-900"
          >
            Explore All Research
          </Link>
        </div>
        </div>
      </section>

      <section className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/70 p-6 backdrop-blur-md dark:border-slate-600/40 dark:bg-slate-900/70" data-aos="fade-up">
        <div>
          <h2 className="text-2xl font-semibold">Experience & Case Logs</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">View clinical rotations and detailed hospital postings.</p>
        </div>
        <Link
          to="/experience"
          className="inline-flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 dark:bg-slate-100 dark:text-slate-900"
        >
          Open Experience
        </Link>
      </section>
    </div>
  )
}
