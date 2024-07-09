"use client";
import { Section } from "./Section";
import { ComponentPropsWithoutRef } from "react";
import { CustomIcons } from "./icons/CustomIcons";
import { Badge } from "@/components/ui/badge";
import { Code } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Modal } from "@/components/ui/Modal";
import { useState } from "react";

export const Skills = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pdfUrl, setPdfUrl] = useState("");

    const handleIconClick = (url: string) => {
        setPdfUrl(url);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setPdfUrl("");
    };

    return (
        <Section className="flex-col items-start gap-4">
            <Badge variant={"outline"} className="mb-4">Skills</Badge>
            <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">I love working on</h2>
            <div className="flex max-md:flex-col gap-4">
                <div className="flex flex-col gap-4">
                    <CustomIcons
                        name="reactjs"
                        className="animate-spin"
                        style={{ animationDuration: "10s" }}
                        size={62}
                    />
                    <h3 className="mt-2 mb-1 text-2xl font-semibold tracking-tight">React JS</h3>
                    <p className="text-sm text-muted-foreground">My main framework is React.</p>
                </div>
                <div className="flex flex-col gap-4">
                    <CustomIcons
                        name="tailwind"
                        className="animate-spin"
                        style={{ animationDuration: "10s" }}
                        size={62}
                    />
                    <h3 className="mt-2 mb-1 text-2xl font-semibold tracking-tight">Tailwind</h3>
                    <p className="text-sm text-muted-foreground">I like using Tailwind for CSS.</p>
                </div>
                <div className="flex flex-col gap-4">
                    <CustomIcons
                        name="php"
                        className="animate-spin"
                        style={{ animationDuration: "10s" }}
                        size={62}
                    />
                    <h3 className="mt-2 mb-1 text-2xl font-semibold tracking-tight">PHP</h3>
                    <p className="text-sm text-muted-foreground">I like using PHP for backend.</p>
                </div>
                <div className="flex flex-col gap-4">
                    <CustomIcons
                        name="django"
                        className="animate-spin"
                        style={{ animationDuration: "10s" }}
                        size={62}
                        onClick={() => handleIconClick("python.png")}
                    />
                    <h3 className="mt-2 mb-1 text-2xl font-semibold tracking-tight">Django</h3>
                    <p className="text-sm text-muted-foreground">I like using Django for backend.</p>
                </div>
            </div>
            {isModalOpen && (
                <Modal onClose={closeModal}>
                    <iframe src={pdfUrl} className="w-full h-full" />
                </Modal>
            )}
        </Section>
    );
};
