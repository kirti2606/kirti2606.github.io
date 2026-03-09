import { FileText } from 'lucide-react'
export default function Experience() {
  const clinical = [
    { title: 'General Surgery', count: 45, blurb: 'Pre-op prep, instrument counts, sterile fields.' },
    { title: 'Orthopaedics', count: 25, blurb: 'Trauma fixations, arthroscopies.' },
    { title: 'Neurosurgery', count: 18, blurb: 'Neuro-navigation support; Alzheimer’s interest.' },
    { title: 'Gynaecology', count: 35, blurb: 'OT assistance for gynae procedures.' },
    { title: 'ENT', count: 11, blurb: 'ENT OT workflows and post-op support.' },
    { title: 'Cardiology', count: 25, blurb: 'Cath lab exposure; peri-procedural support.' },
    { title: 'Ophthalmology', count: 7, blurb: 'Microsurgical support in eye surgeries.' },
    { title: 'Plastic Surgery', count: 7, blurb: 'Asepsis & instrument handling in recon.' },
    { title: 'Urology', count: 45, blurb: 'Endoscopic OT setups and case turnover.' }
  ]
  const work = [
    { org: 'Fortis Hospital Noida', role: 'Intern', when: 'Jan – Jun 2022 (6 months)', detail: 'Assisted intraoperative workflows: sterile technique, instrument handling, and OR coordination.' },
    { org: 'MLT Hospital LNJP (Lok Nayak), Delhi', role: 'Lab Technician', when: 'End of May – Sep 2021 (4.5 months)', detail: 'Blood sampling, transfusion, tissue culture, microscopy, WIDAL tests, LFT/KFT panels, bronchoscopy support.' },
    { org: 'Doon Hospital, Dehradun', role: 'Clinical Posting', when: '1 month (Dec – Jan, annually 2023–2026)', detail: 'ICU, NICU, Emergency, Cath lab rotations provided by college.' },
    { org: 'Subharti Hospital, Dehradun', role: 'Clinical Posting', when: '2 months (Jun – Jul 2024)', detail: 'General OT workflows and assistance.' },
    { org: 'Maringo Asian Hospital, Delhi', role: 'Operational Executive & Consultant & OT Management', when: '2 months (Jun & Jul 2023)', detail: 'Patient workflow; OPD/IPD; OT management; international patient journey from admission to discharge.' },
    { org: 'Prem Sukh Dialysis Centre, Dehradun', role: 'Clinical Posting', when: '1 month (Jan – Feb 2026)', detail: 'Cath lab & Emergency department; angiography/angioplasty support, ultrasound, CT, CSSD.' }
  ]
  return (
    <div className="space-y-12">
      <section className="rounded-2xl border border-white/20 bg-white/70 p-6 backdrop-blur-md dark:border-slate-600/40 dark:bg-slate-900/70">
        <h1 className="text-3xl font-bold tracking-tight">Experience & Case Logs</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Clinical rotations and hospital postings.</p>
      </section>
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">Clinical Experience (BOTT)</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">Surgical case log summary from Uttaranchal University rotations.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {clinical.map((s) => (
            <div key={s.title} className="rounded-xl border border-white/20 bg-white/70 p-6 shadow-lg backdrop-blur-md dark:border-slate-600/40 dark:bg-slate-900/70" data-aos="fade-up">
              <h3 className="mb-1 text-lg font-semibold">{s.title}</h3>
              <p className="text-3xl font-bold text-trust-blue">{s.count}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{s.blurb}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">Work Experience</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">Selected hospital and clinical postings.</p>
        </div>
        <ul className="space-y-4">
          {work.map((x) => (
            <li key={x.org} className="rounded-xl border border-white/20 bg-white/70 p-5 backdrop-blur-md dark:border-slate-600/40 dark:bg-slate-900/70" data-aos="fade-up">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold">{x.org}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{x.role} • {x.when}</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{x.detail}</p>
                </div>
                <FileText className="mt-1 h-5 w-5 text-trust-blue" />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
