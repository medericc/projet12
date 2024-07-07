import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { Code } from "lucide-react";
import { CustomIcons } from "./icons/CustomIcons";

export const Skills = () => {
    return (
        <Section className="flex-col items-start gap-4 ">
            <Badge variant={"outline"} className="mb-4">Skills</Badge>
            <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">I love working on </h2>
            <div className="flex max-md:flex-col gap-4">
                <div className="flex flex-col gap-4">


<CustomIcons  name="reactjs" className="animate-spin" style={{ animationDuration: "10s" }} size={62} />
                 
                 
                 
                 
                 
                    <h3 className="mt-2 mb-1 text-2xl font-semibold tracking-tight">React JS</h3>
                    <p className="text-sm text-muted-foreground">My main framework is React, with Next or Vite  it&apos;s very fun.</p>
                </div>
                <div className="flex flex-col gap-4">


                <CustomIcons name="tailwind" className="animate-spin" style={{ animationDuration: "10s" }} size={62} />
     
                 
                 
                 
                    <h3 className="mt-2 mb-1 text-2xl font-semibold tracking-tight">Tailwind CSS</h3>
                    <p className="text-sm text-muted-foreground">I love create beautiful application with Tailwind CSS.</p>
                </div>
                <div className="flex flex-col gap-4">



                <CustomIcons name="php" className="animate-spin" style={{ animationDuration: "10s" }} size={62} />
     
                 
                 
                 
                    <h3 className="mt-2 mb-1 text-2xl font-semibold tracking-tight">PHP</h3>
                    <p className="text-sm text-muted-foreground">I like using PHP for backend.</p>
                </div>
            </div>
        </Section>
    );
}
