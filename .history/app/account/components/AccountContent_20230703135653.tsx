"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useUser } from "@/hooks/useUser";
import Button from "@/components/Button";
//import useSubscribeModal from "@/hooks/useSubscribeModal";
//import { postData } from "@/libs/helpers";

const AccountContent = () => {
  const router = useRouter();
  //const subscribeModal = useSubscribeModal();
  const { isLoading, user } = useUser();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/');
    }
  }, [isLoading, user, router]);

  return ( 
    <div className="mb-7 px-6">
      Account act
    </div>
  );
}
 
export default AccountContent;