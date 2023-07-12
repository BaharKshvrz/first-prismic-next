import CounterCallout from "@/components/CounterCallout";
import LogosCallout from "@/components/LogosCallout";
import ScrollZoomSnippet from "@/components/ScrollZoomSnippet";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";

export default function Home() {
  return (
    <div className="flex flex-col">
       <Header/>
       <main>
          <Hero/>
          <ScrollZoomSnippet/>
          <CounterCallout/>
          <LogosCallout/>
      </main>
    </div>
  )
}
