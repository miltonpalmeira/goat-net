import img from '../assets/images/bbbb.jpg';
import img2 from '../assets/images/aaaa.jpeg';

const Games = () => {

    return (
        <div className="grid grid-cols-4 gap-4 px-4 text-center">
            <div className='border-2 bg-slate-800 rounded-md border-slate-500 h-96 hover:text-slate-400 transition cursor-pointer'>
                <img src={img} alt="img1" className='rounded-md h-5/6 w-full'/>
                <a className='text-[25px]'>Gradnaaaaaaaaaaaaaaaaa</a>
            </div>
            <div className='border-2 bg-slate-800 rounded-md border-slate-500 hover:text-slate-400 transition cursor-pointer'>
                <img src={img2} alt="img2" className='rounded-md h-5/6 w-full'/>
                <a className='text-[25px]'>Gradnaaaaaaaaaaaaaaaaa</a>
            </div>
            <div className='border-2 bg-slate-800 rounded-md border-slate-500 hover:text-slate-400 transition cursor-pointer'>
                <img src={img2} alt="img2" className='rounded-md h-5/6 w-full'/>
                <a className='text-[25px]'>Gradnaaaaaaaaaaaaaaaaa</a>
            </div>
            <div className='border-2 bg-slate-800 rounded-md border-slate-500 hover:text-slate-400 transition cursor-pointer'>
                <img src={img2} alt="img3" className='rounded-md h-5/6 w-full'/>
                <a className='text-[25px]'>Gradnaaaaaaaaaaaaaaaaa</a>
            </div>
        </div>
    );
};

export default Games;