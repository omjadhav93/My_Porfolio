import Image from 'next/image';
import Link from 'next/link';
import { ListIn } from "./FramerMotion";
import AnimatedSectionWrapper from "./AnimationWrapper";

const ProjectGrid = (props) => {
    const projects = [
        {
            title: "KodeSkool - Coding School Platform",
            description: "Kode Skool is an innovative startup empowering school students with tech skills through hands-on coding lessons and real-world projects.",
            image: "/KodeSkool/KodeSkool_Dashboard.png",
            projectId: "KodeSkool"
        },
        {
            title: "AJWS - E-Commerce Website",
            description: "AJ Water Solutions is a full-fledged E-Commerce platform offering water purifier sales, installation, and maintenance services.",
            image: "/AJWS/AJWS_Homepage.mp4",
            projectId: "AJWS"
        },
        {
            title: "My Portfolio - Personal Website",
            description: "This portfolio website showcases my journey as a Full-Stack Developer, designed to reflect my technical expertise and creative capabilities.",
            image: "/Portfolio/Portfolio_Homepage.png",
            projectId: "Portfolio"
        }
    ];

    return (
        <AnimatedSectionWrapper>
            <section className={"mt-16 mx-auto xl:px-40 lg:px-24 md:px-12 sm:px-10 px-8"}>
                <div className="font-mono xl:text-xl lg:text-lg md:text-base text-sm">.../My Projects...</div>
                <div className="grid mt-10 grid-cols-2 lg:grid-cols-3 xl:gap-8 lg:gap-6 md:gap-4 gap-3">
                    {projects.map((project, index) => (
                        <ListIn key={index} index={index}>
                            <Link href={`/Projects/${project.projectId}`} className="block h-full">
                                <div className="bg-slate-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                                    <div className="relative w-full aspect-video">
                                        {project.image.endsWith('.mp4') ? (
                                            <video
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className="w-full h-full object-cover"
                                            >
                                                <source src={project.image} type="video/mp4" />
                                            </video>
                                        ) : (
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        )}
                                    </div>
                                    <div className="p-4 flex-grow">
                                        <h3 className="xl:text-xl lg:text-lg md:text-base text-sm font-semibold text-blue-400 mb-2">{project.title}</h3>
                                        <p className="xl:text-base lg:text-sm md:text-xs text-[10px] text-neutral-300 line-clamp-2">{project.description}</p>
                                    </div>
                                </div>
                            </Link>
                        </ListIn>
                    ))}
                </div>
            </section>
        </AnimatedSectionWrapper>
    );
};

export default ProjectGrid; 