import { useState } from "react";
import SectionHeaderText from "../UI/SectionHeaderText";
import TechnologyIcon from "../UI/TechnologyIcon";
import { ProjectCard } from "./ProjectCard";
import { Project } from "./Project";
import projects from "../../assets/data/projects";
import { useTranslation } from "react-i18next";

export default function ProjectsSection() {
    const [projectsArray] = useState<Project[]>([...projects, ...projects, ...projects, ...projects, ...projects]);
    const { t } = useTranslation();

    return (
        <section id="section4" className="px-12 overflow-x-hidden py-32" >
            <div className="container mx-auto pb-10">
                <SectionHeaderText
                    mainText={t("Projects")}
                    secondaryText={t("Some projects I have done before:")}
                />

                <div className="flex flex-wrap justify-center gap-20 ">
                    {projectsArray.map((project, index) =>
                        <ProjectCard
                            mainText={project.mainText}
                            secondaryText={t(project.secondaryText)}
                            src={project.src}
                            alt={project.alt}
                            link={project.link}
                            linkWebsite={project.linkWebsite}
                            key={index}
                        >
                            {project.icons.map((icon, index) =>
                                <TechnologyIcon
                                    src={icon.src}
                                    alt={icon.alt}
                                    key={index}
                                />)}
                        </ProjectCard>)}
                </div>
            </div>


        </section >);
}