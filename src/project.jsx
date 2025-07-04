const ProjectCard = ({ title, description, link }) => (
        <div className="m-auto mt-5">
            <div className="w-80 p-6 bg-blue-950 rounded-lg ">
                <h2 className="text-xl text-white font-bold mb-2 ">{title}</h2>
                <p className="text-white mb-4">{description}</p>
                <a href={link} className="text-white p-2 rounded bg-blue-700 hover:underline">View Project</a>
            </div>
        </div>  
            

   
);
const Projects = () => {
    const projects = [
        {
            title: "ABA clone",
            description: "A full-stack online store with payment integration.",
            link: "https://johnbunheng.github.io/aba2/"
        },
        {
            title: "Computer shop",
            description: "A productivity app to manage tasks and deadlines.",
            link: "https://johnbunheng.github.io/csshop/"
        },
        {
            title: "Portfolio Website",
            description: "This very portfolio built with React and Tailwind CSS.",
            link: ""
        }
    ];

    return (
            <div className="container ">
                <h2 className="text-3xl font-bold text-center mb-10 text-white">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
    );
}
export default Projects