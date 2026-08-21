const whatsappNumber = (import.meta.env.VITE_WHATSAPP_NUMBER || '').replace(/\D/g, '')

export const isWhatsAppConfigured = Boolean(whatsappNumber)

export function getWhatsAppHrefForMessage(message = '') {
  if (!isWhatsAppConfigured) return '#contacto'

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message.trim())}`
}

export function getWhatsAppHref(interest = '') {
  const selectedInterest = interest.trim()
  const message = selectedInterest
    ? `Hola, quiero recibir información sobre UCALP Abierta.\n\nMe interesa: ${selectedInterest}`
    : 'Hola, quiero recibir información sobre UCALP Abierta.'

  return getWhatsAppHrefForMessage(message)
}
