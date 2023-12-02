import { Spinner } from "@chakra-ui/react";

export default function LoadingPage() {
  return (
    <section style={{
      display: "grid",
      placeContent: "center",
      height: "100vh"
    }}>
      <Spinner size='xl' justifySelf={"center"} />
    </section>
  )
}