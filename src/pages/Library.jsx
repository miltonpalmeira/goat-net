import Navbar from "../components/Navbar";
import Games from "../components/Games";

const Library = () => {
    return (
        <div>
            <Navbar/>
            <div className="px-4">
                <div className="bg-slate-600 rounded px-3 mt-4 mb-4 text-left text-xl">
                    Meu jogos
                </div>
            </div>
            <Games />
        </div>
    )
}

export default Library;