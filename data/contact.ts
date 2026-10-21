/** Single source of truth for business contact details. */
export const PHONE_DISPLAY = '+91 81089 12433';
export const PHONE_E164 = '+918108912433';
export const PHONE_DIGITS = '8108912433';
export const WHATSAPP_NUMBER = '918108912433';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const ADDRESS_LINE = 'Kalyan, Maharashtra';
export const ADDRESS_PIN = '421306';
export const ADDRESS_FULL = 'Kalyan, Maharashtra — 421306';
export const MAP_QUERY = 'Kalyan, Maharashtra 421306';
export const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=13&output=embed`;
export const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`;

export const whatsappHref = (message: string) =>
  `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
