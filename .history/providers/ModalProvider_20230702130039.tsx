"use client";

import { useEffect, useState } from "react";

i

const ModalProvider = () =>{
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Madal/>
    </>
  );
}

export default ModalProvider;