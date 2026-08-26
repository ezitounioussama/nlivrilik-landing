export const site = {
  name: "NlivriLik",
  url: "https://nlivrilik.ma",
  whatsappNumber: "212752904926",
  phoneDisplay: "+212 7 52 90 49 26",
  socials: {
    instagram: "https://www.instagram.com/nlivrilik1/",
    facebook: "https://www.facebook.com/profile.php?id=61575807004445",
    tiktok: "https://www.tiktok.com/@nlivrilik",
  },
} as const

export const waLink = (text?: string) =>
  `https://wa.me/${site.whatsappNumber}${
    text ? `?text=${encodeURIComponent(text)}` : ""
  }`
