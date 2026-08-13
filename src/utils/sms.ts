export const BUSINESS_NAME = '1Beginning';
export const BUSINESS_FULL_NAME = '1Beginning Junk & Debris Removal';
export const BUSINESS_PHONE = '(216) 825-3184';
export const BUSINESS_PHONE_RAW = '+12168253184';
export const BUSINESS_PHONE_NUMERIC = '2168253184';
export const BUSINESS_ADDRESS = '11215 Hazeldell Dr, Cleveland, OH 44108';
export const BUSINESS_HOURS = 'Open until 8:00 PM (Daily 7:00 AM – 8:00 PM)';
export const BUSINESS_RATING = '4.9';
export const BUSINESS_REVIEW_COUNT = '132+';
export const BUSINESS_LOCATION = 'Cleveland, OH';
export const BUSINESS_SERVICE_AREA = 'Cleveland & surrounding Northeast Ohio areas';

export const CALL_NOW_HREF = `tel:${BUSINESS_PHONE_RAW}`;

export const DEFAULT_SMS_MESSAGE =
  'Hi 1Beginning, I need an estimate for junk / debris removal in Cleveland. My address is ________. Can you provide a quote?';

/**
 * Builds a universal SMS URI compatible with iOS, Android, and Desktop SMS handlers.
 */
export function buildSmsHref(
  customAddress?: string,
  serviceType?: string,
  note?: string,
  customerName?: string,
  customerPhone?: string,
  preferredDate?: string
): string {
  let message = `Hi 1Beginning, I need a free estimate!`;
  
  if (customerName && customerName.trim()) {
    message += `\n• Name: ${customerName.trim()}`;
  }
  if (customerPhone && customerPhone.trim()) {
    message += `\n• Phone: ${customerPhone.trim()}`;
  }
  if (customAddress && customAddress.trim()) {
    message += `\n• Address: ${customAddress.trim()}`;
  }
  if (serviceType && serviceType.trim()) {
    message += `\n• Service: ${serviceType.trim()}`;
  }
  if (preferredDate && preferredDate.trim()) {
    message += `\n• Preferred Date: ${preferredDate.trim()}`;
  }
  if (note && note.trim()) {
    message += `\n• Details: ${note.trim()}`;
  }

  message += `\nCan you give me a quote / ETA?`;

  const encodedBody = encodeURIComponent(message);
  
  const isApple =
    typeof navigator !== 'undefined' &&
    (/iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));

  if (isApple) {
    return `sms:${BUSINESS_PHONE_RAW}&body=${encodedBody}`;
  }

  return `sms:${BUSINESS_PHONE_RAW}?body=${encodedBody}`;
}

export function triggerSmsApp(
  customAddress?: string,
  serviceType?: string,
  note?: string,
  customerName?: string,
  customerPhone?: string,
  preferredDate?: string
): void {
  const href = buildSmsHref(customAddress, serviceType, note, customerName, customerPhone, preferredDate);
  try {
    window.location.href = href;
  } catch (err) {
    console.error('Failed to trigger SMS handler:', err);
  }
}



