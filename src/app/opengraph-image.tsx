import { ImageResponse } from "next/og"

export const alt =
  "NlivriLik — Livraison express au Maroc : colis, courses, repas et documents"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #EA9932 0%, #D8670F 55%, #0D6F3A 130%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: "rgba(255,255,255,0.12)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: -100,
            width: 380,
            height: 380,
            borderRadius: 9999,
            background: "rgba(13,111,58,0.35)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            background: "rgba(255,255,255,0.95)",
            borderRadius: 24,
            padding: "18px 42px",
            marginBottom: 42,
          }}
        >
          <span style={{ fontSize: 54, fontWeight: 800, color: "#CD231D" }}>
            NLIVRI
          </span>
          <span style={{ fontSize: 54, fontWeight: 800, color: "#0D6F3A" }}>
            LIK
          </span>
        </div>
        <div
          style={{
            fontSize: 58,
            fontWeight: 700,
            color: "white",
            textAlign: "center",
            maxWidth: 950,
            lineHeight: 1.15,
          }}
        >
          Livraison express au Maroc
        </div>
        <div
          style={{
            marginTop: 22,
            fontSize: 30,
            color: "rgba(255,255,255,0.92)",
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          Colis · Courses · Repas · Documents — en moins d&apos;une heure
        </div>
        <div
          style={{
            marginTop: 40,
            display: "flex",
            alignItems: "center",
            gap: 14,
            background: "#25D366",
            color: "white",
            fontSize: 30,
            fontWeight: 700,
            padding: "16px 38px",
            borderRadius: 9999,
          }}
        >
          Commandez sur WhatsApp · +212 7 52 90 49 26
        </div>
      </div>
    ),
    { ...size }
  )
}
