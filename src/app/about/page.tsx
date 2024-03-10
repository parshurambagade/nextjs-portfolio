
import dynamic from "next/dynamic"

const DynamicAboutSection = dynamic(() => import("@/components/AboutSection"))

export default function About() {
  return (
    <DynamicAboutSection />
  )
}
