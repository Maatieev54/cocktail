import { useState } from "react";
import Hero from "../component/Hero";
import Browse from "../component/Browse";
import DetailsModal from "../component/DetailsModal";

export default function Home() {
  const [selected, setSelected] = useState(null);
  const open = (id) => setSelected(id);
  const close = () => setSelected(null);

  return (
    <>
      <Hero onOpen={open} />
      <Browse onOpen={open} />
      <DetailsModal id={selected} open={Boolean(selected)} onClose={close} />
    </>
  );
}
