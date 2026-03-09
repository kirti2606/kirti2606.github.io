import { Send, Linkedin, Github } from 'lucide-react'
import { sendContactEmails } from '../lib/email'

export default function Contact() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="rounded-2xl border border-white/20 bg-white/70 p-8 backdrop-blur-md dark:border-slate-600/40 dark:bg-slate-900/70" data-aos="fade-right">
        <h1 className="mb-3 text-3xl font-bold tracking-tight">Let’s Collaborate</h1>
        <p className="mb-6 text-slate-600 dark:text-slate-300">
          I’m open to research collaborations, clinical inquiries, and general networking in medical AI.
        </p>
        <ul className="mb-8 space-y-2 text-sm">
          <li className="rounded-md bg-trust-light/10 px-3 py-2 text-trust-blue">• Research Collaboration</li>
          <li className="rounded-md bg-trust-light/10 px-3 py-2 text-trust-blue">• Clinical Inquiries</li>
          <li className="rounded-md bg-trust-light/10 px-3 py-2 text-trust-blue">• General Networking</li>
        </ul>
        <div className="flex flex-wrap items-center gap-4">
          <a href="https://www.linkedin.com/in/kirti-tanwar-807a55270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-slate-500 hover:text-trust-light">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href="https://github.com/kirti2606" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-slate-500 hover:text-trust-light">
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </div>
      <div className="rounded-2xl border border-white/20 bg-white/70 p-8 backdrop-blur-md dark:border-slate-600/40 dark:bg-slate-900/70" data-aos="fade-left">
        <form
          className="space-y-4"
          onSubmit={async (e) => {
            e.preventDefault()
            const formEl = e.currentTarget as HTMLFormElement
            const form = new FormData(formEl)
            const data = Object.fromEntries(form.entries()) as Record<string, string>
            const res = await sendContactEmails({
              name: data['name'],
              email: data['email'],
              subject: data['subject'],
              message: data['message'],
            })
            if (res.ok) {
              alert(`Thanks ${data['name']}, I have sent a confirmation to ${data['email']}.`)
              formEl.reset()
            } else {
              alert(`Thanks ${data['name']}. Email service isn’t configured yet — message received.`)
              formEl.reset()
            }
          }}
        >
          <div>
            <label className="mb-1 block text-sm font-medium">Name</label>
            <input name="name" required className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-trust-light dark:border-slate-700 dark:bg-slate-800" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Professional Email</label>
            <input type="email" name="email" required className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-trust-light dark:border-slate-700 dark:bg-slate-800" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Subject</label>
            <input name="subject" required className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-trust-light dark:border-slate-700 dark:bg-slate-800" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Message</label>
            <textarea name="message" rows={5} required className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-trust-light dark:border-slate-700 dark:bg-slate-800" />
          </div>
          <button className="inline-flex items-center gap-2 rounded-md bg-trust-blue px-4 py-2 text-sm font-medium text-white transition hover:bg-trust-light">
            <Send className="h-4 w-4" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
