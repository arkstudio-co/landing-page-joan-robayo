import { ImageResponse } from "next/og";

export const alt = "JoanRobayo Tattoo - Tatuajes profesionales en Medellín";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

async function getFontData(): Promise<ArrayBuffer[]> {
  const css = await fetch(
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap",
    { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" } }
  ).then((r) => r.text());

  const urls = Array.from(css.matchAll(/url\((https:\/\/fonts\.gstatic\.com[^)]+)\)/g), (m) => m[1]);

  if (urls.length < 2) throw new Error("Could not find font URLs");

  return Promise.all(
    urls.map((url) =>
      fetch(url, {
        headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" },
      }).then((r) => {
        if (!r.ok) throw new Error(`Font fetch failed: ${r.status}`);
        return r.arrayBuffer();
      })
    )
  );
}

export default async function Image() {
  const [inter400, inter700] = await getFontData();

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
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(206, 152, 97, 0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(206, 152, 97, 0.08) 0%, transparent 50%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: "#e2e2e2",
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            JOANROBAYO
          </div>
          <div
            style={{
              width: 80,
              height: 2,
              background: "#ce9861",
              marginBottom: 24,
            }}
          />
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: "0.15em",
              color: "#ce9861",
              marginBottom: 8,
            }}
          >
            Tatuajes profesionales en Medellín
          </div>
          <div
            style={{
              fontSize: 18,
              fontWeight: 400,
              color: "rgba(226, 226, 226, 0.6)",
              letterSpacing: "0.05em",
              marginTop: 8,
            }}
          >
            Realismo · Neotradicional · Línea Fina
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            gap: 24,
            fontSize: 14,
            color: "rgba(206, 152, 97, 0.5)",
            letterSpacing: "0.1em",
          }}
        >
          <span>8+ AÑOS DE EXPERIENCIA</span>
          <span>·</span>
          <span>500+ TATUAJES</span>
          <span>·</span>
          <span>★★★★★ 5.0</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: inter400,
          style: "normal",
          weight: 400,
        },
        {
          name: "Inter",
          data: inter700,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
