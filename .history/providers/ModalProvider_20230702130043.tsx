"use client";

import { useEffect, useState } from "react";

import M

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