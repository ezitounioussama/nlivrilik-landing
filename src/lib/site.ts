export const site = {
  name: "NlivriLik",
  url: "https://nlivrilik.ma",
  whatsappNumber: "212610336499",
  phoneDisplay: "+212 6 10 33 64 99",
  socials: {
    instagram: "https://www.instagram.com/nlivrilik1/",
    facebook: "https://www.facebook.com/profile.php?id=61575807004445",
    tiktok: "https://www.tiktok.com/@nlivrilik",
  },
} as const

// Main cities served — used for SEO keywords and JSON-LD areaServed.
export const cities = [
  "Casablanca",
  "Rabat",
  "Salé",
  "Fès",
  "Marrakech",
  "Tanger",
  "Meknès",
  "Oujda",
  "Kénitra",
  "Agadir",
  "Tétouan",
  "Témara",
  "Safi",
  "Mohammedia",
  "Khouribga",
  "El Jadida",
  "Béni Mellal",
  "Nador",
  "Taza",
  "Settat",
  "Berrechid",
  "Khémisset",
  "Larache",
  "Ksar El Kébir",
  "Guelmim",
  "Berkane",
  "Al Hoceïma",
  "Ouarzazate",
  "Errachidia",
  "Essaouira",
  "Chefchaouen",
  "Ifrane",
  "Laâyoune",
  "Dakhla",
  "Tiznit",
  "Taroudant",
] as const

export const waLink = (text?: string) =>
  `https://wa.me/${site.whatsappNumber}${
    text ? `?text=${encodeURIComponent(text)}` : ""
  }`
