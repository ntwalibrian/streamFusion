"use client";
import { Database } from "@/types_db";
import { useState } from "r"
interface SupabaseProviderProps {
    children: React.ReactNode;
};

const SupabaseProvider : React.FC<SupabaseProviderProps> = ({
    children
}) => {
    const {supabaseClient} = useState()
}