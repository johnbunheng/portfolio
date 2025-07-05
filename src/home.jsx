import Contact from './contact';
import Footer from './footer';
import Hero from './hero';
import Navbar from './navbar';
import Projects from './project';
const Home = () => {
    return (
        <div className="container m-auto w-full bg-slate-950">
            <Navbar/>
            <div className='my-10 sm:px-40 sm:flex'>
                <Hero/>
                <Contact/>
            </div>
            
            <Projects/>
            <Footer/>
        </div>
     );
}
 
export default Home;