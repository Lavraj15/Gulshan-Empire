// ======================================================
//  Yaha se sab kuch change kar sakte ho (number, links, images)
// ======================================================

// WhatsApp number (country code ke saath, + ya space ke bina)
export const WHATSAPP_NUMBER = "918790504044";
export const WHATSAPP_TEXT =
  "Hi, I am interested in Gulshan Empire, Wave City. Please share details.";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

// Call button / phone number jo page par dikhta hai
export const PHONE_DISPLAY = "+91 87905 04044";
export const PHONE_TEL = "tel:+918790504044";
export const EMAIL = "info@gulshangroup.com";

// "Book a Private Site Visit" button yaha jayega
export const SITE_VISIT_LINK = "https://www.gulshan-empire.com/";

// Location (Google Maps)
export const MAP_LINK =
  "https://www.google.com/maps/place/Ghaziabad,+Uttar+Pradesh/@28.6652432,77.4962028,3a,75y,168.17h,88.24t/data=!3m7!1e1!3m5!1siYVrq6SaYTH9FjiKT8YhpQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D1.7625664583624427%26panoid%3DiYVrq6SaYTH9FjiKT8YhpQ%26yaw%3D168.16831094691486!7i16384!8i8192!4m6!3m5!1s0x390cf1bb41c50fdf:0xe6f06fd26a7798ba!8m2!3d28.6691565!4d77.4537578!16zL20vMDZkbG0x?entry=tts&g_ep=EgoyMDI2MDQyOC4wIPu8ASoASAFQAw%3D%3D&skid=36bb3a23-ca18-480e-a961-43f0b9b23903";

// Brochure PDF (public/brochure.pdf ko replace kar dena)
export const BROCHURE = "/brochure.pdf";

// Saari images public/images/ folder me hain. Naam badalne ho to
// file rename karo aur yaha path update kar do.
export const IMG = {
  logo: "/images/logo-01.png", // header logo
  logoFooter: "/images/logo-02.png", // footer logo
  logoLegacy: "/images/logo-03.png", // "From the house of Gulshan" G logo
  hero: "/images/slide1.webp", // hero banner
  overview: "/images/photo-02.jpg", // chess king image
  watermark: "/images/photo-04.png", // residences ke neeche faint chess piece
  highlights: "/images/photo-03.webp", // key highlights image
  locationMap: "/images/photo-08.jpg", // map image
  reraQr: "/images/qr-01.png",
  plan3: "/images/plan-01.png",
  plan4: "/images/plan-02.png",
  amenities: [
    "/images/photo-09.jpg",
    "/images/photo-10.jpg",
    "/images/photo-11.jpg",
    "/images/photo-12.jpg",
    "/images/photo-13.jpg",
  ],
  residenceIcons: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `/images/icon-0${n}.svg`),
  highlightIcons: [
    "/images/icon-09.png",
    "/images/icon-10.png",
    "/images/icon-11.png",
    "/images/icon-12.png",
  ],
  locationIcons: [
    "/images/icon-13.png",
    "/images/icon-14.png",
    "/images/icon-15.png",
    "/images/icon-16.png",
  ],
};
