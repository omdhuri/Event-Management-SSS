/** Single source of truth for business contact details. */
export const PHONE_DISPLAY = '+91 81089 12433';
export const PHONE_E164 = '+918108912433';
export const PHONE_DIGITS = '8108912433';
export const WHATSAPP_NUMBER = '918108912433';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const ADDRESS_LINE = 'Kalyan, Maharashtra';
export const ADDRESS_PIN = '421306';
export const ADDRESS_FULL = 'Kalyan, Maharashtra — 421306';
export const MAP_QUERY = 'Shree Swami event kalyan';
export const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
export const MAP_LINK = 'https://share.google/YTrEblUFTK0XtRmy5';
export const GOOGLE_REVIEWS_URL =
  'https://www.google.com/maps/place/Shree+Swami+event+kalyan/@19.2145838,73.1397656,17z/data=!4m8!3m7!1s0x3be7950042b6b265:0x3d0c6ad87db6f131!8m2!3d19.2145838!4d73.1397656!9m1!1b1!16s%2Fg%2F11zxcg6g22?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D';
export const GOOGLE_SEARCH_URL = 'https://www.google.com/search?q=Shree+Swami+event+kalyan+Kalyan';
export const GOOGLE_RATING = '5.0';
export const GOOGLE_REVIEW_COUNT = 18;

export const INSTAGRAM_HANDLE = '@shreeswamisamarthevent_07';
export const INSTAGRAM_URL = 'https://www.instagram.com/shreeswamisamarthevent_07/';

export const whatsappHref = (message: string) =>
  `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
