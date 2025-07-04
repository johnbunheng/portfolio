import { FaArrowRight } from "react-icons/fa";
const About = () => (
    <section id="about" className="py-20 absolute text-white right-44 top-32 ">
        <div className="container mx-auto text-start  hidden lg:block">
            <h2 className="text-xl mb-6 font-bold" >About Me</h2>
            <hr className="w-16 border-1 border-blue-700" />
            <p className=" max-w-2xl mt-6 mx-auto">
                I'm a skilled developer with experience in<br/> HTML CSS Taialwind Bootsrap React, JavaScript,<br/> and modern web technologies.
                I love building <br/> responsive and user-friendly applications.
            </p>
            <a href=""><h2 className="text-xl mb-6 underline mt-8"><FaArrowRight /></h2></a>
            <h2 className="text-xl mb-6 mt-8 font-bold">My Work</h2>
            <hr className="w-16 border-1 border-blue-700" />
            <p className=" max-w-2xl mx-auto mt-6 ">
                No Experience but stilling learn .
            </p>
        </div>
    </section>
);
export default About