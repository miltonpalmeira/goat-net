import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Games from "../components/Games";
import img from "../assets/icon/market-icons-15740-Windows.ico";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Carousel />
            <div className="px-4 mb-3">
                <div className="bg-gradient-to-r from-slate-700 to-slate-600 rounded grid grid-cols-10 px-3 text-left text-xl">
                    <div>
                        <a className="cursor-pointer hover:text-slate-400">
                            Mais Vendidos
                        </a>
                    </div>
                    <div>
                        <a className="cursor-pointer ml-6 hover:text-slate-400">
                            MMO
                        </a>
                    </div>
                    <div>
                        <a className="cursor-pointer hover:text-slate-400">
                            RPG
                        </a>
                    </div>
                    <div>
                        <a className="cursor-pointer hover:text-slate-400">
                            MOBA
                        </a>
                    </div>
                    <div>
                        <a className="cursor-pointer hover:text-slate-400">
                            Esportes
                        </a>
                    </div>
                    <div className=" col-start-8 border-2 border-slate-600 rounded-md">
                        <div className='max-w-md mx-auto'>
                            <div className="relative flex items-center w-full h-full rounded-lg focus-within:shadow-lg overflow-hidden">
                                <div className="grid place-items-center h-full w-12 text-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>

                                <input
                                    className="peer h-full w-full outline-none text-sm text-white pr-2 bg-transparent"
                                    type="text"
                                    id="search"
                                    placeholder="Pesquisar jogos" />
                            </div>
                        </div>
                    </div>
                    <div className="col-start-11">
                        <img className="h-7 w-7" src={img} alt="" />
                    </div>
                </div>
            </div>
            <Games />
        </div>
    )
}

export default Home;