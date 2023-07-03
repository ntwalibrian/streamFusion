"use client";
import { Database } from "@/types_db";
import { useSt}
interface SupabaseProviderProps {
    children: React.ReactNode;
};

const SupabaseProvider : React.FC<SupabaseProviderProps> = ({
    children
}) => {
    const {supabaseClient} = useState()
}