"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/components/AModal";

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
      <AuthModal/>
    </>
  );
}

export default ModalProvider;