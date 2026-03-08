import type { ReactNode } from "react";
import type { Models } from "appwrite";

export type ProjectDocument = Models.Document & {
    name: string;
    client: string;
    status: string;
    time: string;
    userId?: string;
    userName?: string;
};

export type Projectsdata = {
    id: number;
    projectname: string;
    client: string;
    status: string;
    deadline: string;
};

export type Cards = {
    id:string,
    title: string;
    content: string;
    value: number;
    icon: ReactNode;
};

