import About from "./about";

const Contact = () => (
    <section className="mt-20 sm:mt-0 sm:right-36">
        <div className="container mx-auto text-center sm:text-start">
            <h2 className="text-xl text-white items-center font-bold mb-6">Get in Touch</h2>
            <hr className="w-16 border-1 m-auto border-blue-700" />
            <p className=" text-white mb-6 mt-6">Feel free to reach out for collaborations <br /> or inquiries!</p>
            <div className="space-x-4">
                <a href="mailto:example@email.com" className="text-blue-500 hover:underline">Emaile</a>
                <a href="https://linkedin.com" className="text-blue-500 hover:underline">LinkedIn</a>
                <a href="https://github.com" className="text-blue-500 hover:underline">GitHub</a>
            </div>
        </div>
        <About/>
    </section>
);
export default Contact