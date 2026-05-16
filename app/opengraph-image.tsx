import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Alok VVS";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #0ea5e9 100%)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Arial, sans-serif",
          height: "100%",
          justifyContent: "center",
          padding: "80px",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            marginBottom: 24,
          }}
        >
          Alok VVS
        </div>
        <div
          style={{
            fontSize: 36,
            lineHeight: 1.3,
            maxWidth: 900,
            opacity: 0.92,
          }}
        >
          Autoriseret VVS-installator og kloakmester
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
