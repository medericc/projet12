import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Code, MessageCircle, Rss, StickyNote, ArrowUpRight, LucideIcon, Weight, Atom, Music, ListMusic, Wind, Database } from "lucide-react";
import { ContactCard } from "./ContactCard";
import { SideProject, SideProjectProps } from "./SideProject";
import { Work, WorkProps } from "./Work";


export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">

      <div className="flex-[3] w-full">

        <Card className="w-full p-4 flex flex-col gap-2 w-full">
        <div className="flex-[2] w-full flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col gap-6">
        <Card className="p-3 flex-1">
          <p className="m-3 text-lg text-muted-foreground">School</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work
                key={index}
                image={work.image}
                title={work.title}
                role={work.role}
                date={work.date}
                url={work.url}
              />
            ))}
          </div>
        </Card>
        <Card className="p-2 flex-1 ">
          <p className="text-lg text-muted-foreground m-3 mb-2">Contact</p>
          <div className="flex flex-col gap-4">
            <ContactCard
              url="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
              name="Médéric"
              image="https://yt3.ggpht.com/-_WPbqawy-4bRFPhSClf10d1ln54YTPSrqOZgg-0Reg09mgw1l7Mjxw9Vxz_Xvu-LjMcABtBsQ=s600-c-k-c0x00ffffff-no-rj-rp-mo"
              mediumImage="https://www.freepnglogos.com/uploads/linkedin-basic-round-social-logo-png-13.png"
              description="Bordenave"
            />
            <ContactCard
              url="https://flowbite.com/blocks/marketing/feature/"
              name="Médéric"
              image="https://yt3.ggpht.com/-_WPbqawy-4bRFPhSClf10d1ln54YTPSrqOZgg-0Reg09mgw1l7Mjxw9Vxz_Xvu-LjMcABtBsQ=s600-c-k-c0x00ffffff-no-rj-rp-mo"
              mediumImage="https://static.vecteezy.com/system/resources/previews/016/716/465/original/gmail-icon-free-png.png"
              description="Bordenave"
            />
           
          </div>
        </Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: ListMusic,
    title: "Fantasy League",
    description: "Application Symfony",
    url: "/",
  },
  {
    Logo: Wind,
    title: "Application Next.Js",
    description: "Next.Js et Taildwind CSS",
    url: "/",
  },
  {
    Logo: Database,
    title: "PHP Natif / MySql",
    description: "Manage a Database with Auth ",
    url: "/",
  },
  {
    Logo: Atom,
    title: "Application React",
    description: "Manage a Basket Game",
    url: "/",
  },
  
  {
    Logo: Atom,
    title: "Application React",
    description: "Manage a Database",
    url: "/",
  },
 
];

const WORKS: WorkProps[] = [
  {
    image: "https://upload.wikimedia.org/wikipedia/fr/0/0d/Logo_OpenClassrooms.png",
    title: "OCR",
    role: "Développeur",
    date: "2024 - NOW",
    url: "https://openclassrooms.com/fr/",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/fr/0/0d/Logo_OpenClassrooms.png",
    title: "OCR",
    role: "Intégrateur",
    date: "2023 - 2024",
    url: "https://openclassrooms.com/fr/",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFoHD1bTHjSxTczRK4W6fnz9agLahElcs8CW-Ms1-SqqRe7RxsZF7u0O2UrSTzUeDshX0&usqp=CAU",
    title: "B.T.S.",
    role: "Informatique",
    date: "2021 - 2023",
    url: "https://openclassrooms.com/fr/",
  },
];
