import type { Metadata } from "next"
import WorkClient from "./WorkClient"

export const metadata: Metadata = {
  title: "Our Work — Featured Projects & Portfolio | TD STUDIOS",
  description:
    "Flagship experiences for ambitious brands. Transformative digital experiences that drive results and elevate brands to new heights.",
  openGraph: {
    title: "Our Work — TD STUDIOS",
    description: "Featured projects representing our commitment to luxury, strategy, and exceptional creativity.",
  },
}

export default function WorkPage() {
  return <WorkClient />
}
