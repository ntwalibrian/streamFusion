"use client";
import { Database } from "@/types_db";
import { createBrowserSupabaseClient} fr
import { useState } from "react";
interface SupabaseProviderProps {
    children: React.ReactNode;
};

const SupabaseProvider : React.FC<SupabaseProviderProps> = ({
    children
}) => {
    const {supabaseClient} = useState(() =>
     createBrowserSupaBaseClient
    )
}