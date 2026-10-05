# Gulshan Empire (frontend only)

React + Vite. Koi backend nahi.

## Run
```
npm install
npm run dev        # local
npm run build      # production build -> dist/
```

## Kya kahan change karna hai
- Number, links, image paths: `src/config.js`
- WhatsApp number: `WHATSAPP_NUMBER` (abhi 918790504044)
- Brochure: `public/brochure.pdf` ko apni PDF se replace karo (same name)
- Images: `public/images/` (naam change karo to `src/config.js` me path bhi update karo)

| File | Kaha use hui |
|---|---|
| logo-01.png | header logo (Gulshan Empire Wave City) |
| logo-02.png | footer logo (Gulshan Experience Excellence) |
| logo-03.png | "From the house of Gulshan" big G logo |
| photo-01.jpg | hero banner |
| photo-02.jpg | overview image |
| photo-03.jpg | key highlights image (wide banner) |
| photo-04.png | residences section ka faint chess watermark |
| photo-08.jpg | location map image |
| photo-09 to 13.jpg | amenities cards |
| plan-01.jpg / plan-02.jpg | 3 BHK / 4 BHK floor plan |
| qr-01.png | RERA QR |
| icon-01 to 08.svg | residences icons |
| icon-09 to 12.svg | highlights icons |
| icon-13 to 16.svg | location icons |

## Links
- Book a Private Site Visit -> https://www.gulshan-empire.com/
- Get Exact Location / map image -> Google Maps link (config.js)
- Contact form hata diya, uski jagah WhatsApp button (floating + contact section)

Note: floor plan images CSS me blur hain (original site jaisa). Blur hatane ke liye `.plans__box img { filter: blur(5px) }` line delete karo (src/styles.css).
