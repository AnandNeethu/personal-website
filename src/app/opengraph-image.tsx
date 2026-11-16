import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const dynamic = "force-static";
export const alt = `${profile.name} · ${profile.discipline} · POSTECH`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ background: "#142b40", color: "#f8f7f3", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 78px" }}>
      <div style={{ display: "flex", fontSize: 19, letterSpacing: 3, color: "#a9c8ca" }}>THEORETICAL & COMPUTATIONAL CHEMISTRY</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}><div style={{ display: "flex", fontSize: 100, letterSpacing: -4 }}>{profile.name}<span style={{ color: "#c4a474" }}>.</span></div><div style={{ display: "flex", fontSize: 27, color: "#c9d3da" }}>Exploring the science of molecules in motion.</div></div>
      <div style={{ display: "flex", borderTop: "1px solid #496073", paddingTop: 25, justifyContent: "space-between", fontSize: 20 }}><span>{profile.designation}</span><span>{profile.department} · POSTECH</span></div>
    </div>,
    size,
  );
}
