const whatsappNumber = (import.meta.env.VITE_WHATSAPP_NUMBER || '').replace(/\D/g, '')

export const isWhatsAppConfigured = Boolean(whatsappNumber)

export function getWhatsAppHref(interest = '') {
  if (!isWhatsAppConfigured) return '#contacto'

  const selectedInterest = interest.trim()
  const message = selectedInterest
    ? `Hola, quiero recibir información sobre UCALP Abierta.\n\nMe interesa: ${selectedInterest}`
    : 'Hola, quiero recibir información sobre UCALP Abierta.'

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}
