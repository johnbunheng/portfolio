import { FaArrowRight } from "react-icons/fa";
const About = () => (
    <section className="py-20 text-white right-44 top-32 ">
        <div className="container mx-auto text-start">
            <h2 className="text-xl mb-6 font-bold" >About Me</h2>
            <hr className="w-16 border-1 border-blue-700" />
            <p className=" max-w-2xl mt-6 mx-auto">
                I'm a skilled developer with experience in<br/> Photoshop and Illustrator
            </p>
            <a href=""><h2 className="text-xl mb-6 underline mt-8"><FaArrowRight /></h2></a>
            <h2 className="text-xl mb-6 mt-8 font-bold">My Work</h2>
            <hr className="w-16 border-1 border-blue-700" />
            <p className=" max-w-2xl mx-auto mt-6 ">
                <FaArrowRight className="text-xl my-8" />
               Freelance grahpic designer (A little bit) <br />
               . Designed poster content for various client <br />
                 using adobe photoshop and illustrator
            </p>
        </div>
    </section>
);
export default About