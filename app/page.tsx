import Image from "next/image";
import { Hero } from "./_landing/Hero";
import { Work } from "./_landing/Work";
import { Footer } from "./_landing/footer";
import { Header } from "./_landing/Header";
import { Spacing } from "./_landing/Spacing";
import { Status } from "./_landing/Status";
import { Skills } from "./_landing/Skills";
import { ContactCard } from "./_landing/ContactCard";
import { Contact } from "./_landing/Contact";

export default function Home() {
  return (
    <main className ="h-full" >

<Header/>
<Spacing height={1}/>
<Hero />
<Spacing height={1}/>
<Status/>
<Spacing height={1}/>
<Skills/>
<Spacing height={1}/>
<Contact/>
<Spacing height={1}/>
<Footer />
    </main>
  );
}
