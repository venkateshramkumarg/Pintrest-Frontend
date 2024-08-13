import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ searchTerm, setSearchTerm }) => {
    const navigate = useNavigate();

    const handleCreateClick = () => {
        navigate('/create');
    };

    return (
        <div className="md:flex md:font-semibold md:w-full md:justify-between md:text-2xl flex justify-between font-semibold">
            <div className="md:flex md:justify-evenly md:items-center md:w-[25%] md:gap-x-6 flex justify-evenly items-center">
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJjSZcYEnndhn9RvjJusPNh1Ccyusvl77M4A&s" 
                    alt="" 
                    className="w-12 h-12 m-1 p-1" 
                /> 
                <button 
                    className="m-1 px-4 h-10 hover:bg-black hover:rounded-2xl hover:text-white"
                    onClick={() => navigate('/')}
                >
                    Home
                </button>
                <button 
                    className="m-1 px-4 h-10 hover:bg-black hover:rounded-2xl hover:text-white"
                    onClick={() => navigate('/watchList')}
                >
                    WatchList
                </button>
                <button 
                    className="m-1 px-4 h-10 hover:bg-black hover:rounded-2xl hover:text-white"
                    onClick={handleCreateClick}
                >
                    Create
                </button>
            </div>
            <div className="md:flex md:w-[60%] md:items-center md:justify-end md:px-10 flex items-center">
                <input 
                    type="text" 
                    placeholder="Search" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border rounded-2xl bg-gray-100 hover:bg-slate-200 m-1 px-2 h-16 w-full" 
                />
            </div>
            <div className="md:flex md:items-center md:justify-evenly md:w-[10%]">
                <button className="m-1 px-2 h-12 w-12 hover:rounded-full hover:bg-slate-200">
                    <img 
                        src="https://i.pinimg.com/564x/9f/c6/6e/9fc66e90e264c04a9b69b3b724fb6dc4.jpg" 
                        alt="" 
                    />
                </button>
                <button className="m-1 p-2 h-12 w-12 hover:rounded-full hover:bg-slate-200">
                    <img 
                        src="https://e7.pngegg.com/pngimages/394/867/png-clipart-computer-icons-message-email-symbol-black-message-box-miscellaneous-angle.png" 
                        alt=""
                    />
                </button>
            </div>
        </div>
    );
};

export default Header;
