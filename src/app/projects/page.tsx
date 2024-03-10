import dynamic from "next/dynamic";
const DynamicProjectsPage = dynamic(() => import("@/components/AllProjectsSection"))

const page = () => {
  return (
    <DynamicProjectsPage />
  )
}

export default page