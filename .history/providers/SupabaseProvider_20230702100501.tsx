"use client";
import { Database } from "@/types_db";
import { SessionContextP}
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
interface SupabaseProviderProps {
    children: React.ReactNode;
};

const SupabaseProvider : React.FC<SupabaseProviderProps> = ({
    children
}) => {
    const {supabaseClient} = useState(() =>
    createClientComponentClient<Database>()
    );
    return (
        <SessionContextProvider supabaseClient={supabaseClient}>
            {children}
        </SessionContextProvider>
    )
}