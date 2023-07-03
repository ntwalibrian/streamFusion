import getSongs from "@/actions/getSongs";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import PageContent from "./components/PageContent";

export const revalidate = 0;

export default async function Home() {
  const songs = await getSongs();
  throw new ER

  return (
   <div className="
     bg-neutral-900
     rounded-lg
     h-full
     w-full
     overflow-hidden
     overflow-y-auto">
      <Header>
        <div className="nb-2">
          <h1
           className="
            text-white
            text-3xl
            font-semibold"
          >
            welcome back  
          </h1>
          <div
           className="
            grid
            grid-cols-1
            sn:grid-cols-2
            xl:grid-cols-3
            2xl:grid-cols-4
            gap-3
            nt-4
            "
          >
            <ListItem
             image="/images/liked.png"
             name="liked songs"
             href="liked"
            />

          </div>
        </div>
      </Header>
      <div className="at-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            Newest songs
          </h1>
        </div>
        <PageContent songs={songs}/>
      </div>
    </div>
  )
}
