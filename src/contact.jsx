import About from "./about";

const Contact = () => (
    <section className="mt-20  ">
        <div className="mx-auto text-start sm:text-start">
            <h2 className="text-xl text-white font-bold mb-6">Get in Touch</h2>
            <hr className="w-16 border-1 border-blue-700" />
            <p className=" text-white mb-6 mt-6">Feel free to reach out for collaborations  or <br />inquiries!</p>
            <div className="space-x-4">
                <a href="chunjohn002@email.com" className="text-blue-500 hover:underline">Emaile</a>
                <a href="https://linkedin.com" className="text-blue-500 hover:underline">LinkedIn</a>
                <a href="https://github.com" className="text-blue-500 hover:underline">GitHub</a>
            </div>
        </div>
        <About/>
    </section>
);
export default Contact