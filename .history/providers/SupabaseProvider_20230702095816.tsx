"use client";
import { Database } from "@/types_db";
import {}
interface SupabaseProviderProps {
    children: React.ReactNode;
};

const SupabaseProvider : React.FC<SupabaseProviderProps> = ({
    children
}) => {
    const {supabaseClient} = useState()
}