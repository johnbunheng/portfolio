import img1 from "../src/img/Form.png"
import img2 from "../src/img/passapp.png"
import img3 from "../src/img/Watch.png"
import img4 from "../src/img/shapoo.png"
import img5 from "../src/img/shirt.png"
import img6 from "../src/img/9vecheka.png"
const ProjectCard = ({ title, img }) => (
        <div className="m-auto mt-5">
            <div className="w-96 p-6 bg-blue-950 rounded-lg ">
                <h2 className="text-xl text-yellow-500 font-bold py-2 px-4 underline">{title}</h2>
                <img src={img}alt="" 
                className="w-[90%] m-auto"/>
                
            </div>
        </div>    
);
const Projects = () => {
    const projects = [
        {
            title: "Poster Form",
            img: img1
        },
        {
            title: "Poster PassApp",
            img: img2
        },
        {
            title: "Poster Watch",
            img: img3
        },
         {
            title: "Poster Shapoo",
            img: img4
        },
         {
            title: "Poster Shirt",
            img: img5
        },
         {
            title: "Poster ៩​ វិច្ឆិកា",
            img: img6
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