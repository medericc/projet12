import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Spacing } from "./Spacing";

export type SideProjectProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    url: string;
  };
  
 export const SideProject = (props: SideProjectProps) => {
    return (
        
      <Link href={props.url} className="inline-flex items-center gap-3 hover:bg-accent/50 transition-colors p-1 rounded">
       <div>
        
          <span className="text-accent-foreground rounded-sm">
            <props.Logo size={25} />
          </span>
          <p className="text-lg font-semibold">{props.title}</p>
          <p className="text-sm text-muted-foreground">{props.description}</p>
        </div>
      </Link>
    );
  };