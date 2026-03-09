import emailjs from '@emailjs/browser'

type Payload = {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactEmails(data: Payload) {
  const serviceId = import.meta.env['VITE_EMAILJS_SERVICE_ID'] as string | undefined
  const ownerTemplateId = import.meta.env['VITE_EMAILJS_OWNER_TEMPLATE_ID'] as string | undefined
  const replyTemplateId = import.meta.env['VITE_EMAILJS_REPLY_TEMPLATE_ID'] as string | undefined
  const publicKey = import.meta.env['VITE_EMAILJS_PUBLIC_KEY'] as string | undefined

  if (!serviceId || !ownerTemplateId || !replyTemplateId || !publicKey) {
    return { ok: false, reason: 'missing_config' as const }
  }

  const sId = serviceId as string
  const ownerTpl = ownerTemplateId as string
  const replyTpl = replyTemplateId as string
  const pub = publicKey as string

  emailjs.init(pub)
  const ownerParams: Record<string, string> = {
    from_name: data.name,
    from_email: data.email,
    subject: data.subject,
    message: data.message,
  }
  const replyParams: Record<string, string> = {
    to_name: data.name,
    to_email: data.email,
    subject: data.subject,
  }

  await emailjs.send(sId, ownerTpl, ownerParams)
  await emailjs.send(sId, replyTpl, replyParams)
  return { ok: true as const }
}
