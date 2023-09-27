import React from "react"

const Navbar = () => {
    return (
        <div className='w-full h-25 gb-[#00af9a] flex justify-between' >
            <h1 className="text-white font-bold md:text-4x1 sm:3x1 text-xl p-3">Tienda en Linea</h1>
            <ul className="flex p-3">
                <li className="text-white font-bold p-2 hover:bg-[#000300] cursor-pointer">Inicio</li>
                <li className="text-white font-bold p-2 hover:bg-[#000300] cursor-pointer">Carro de Compras</li>
                <li className="text-white font-bold p-2 hover:bg-[#000300] cursor-pointer">Sesion</li>
                <li className="text-white font-bold p-2 hover:bg-[#000300] cursor-pointer">Registrar</li>
            </ul>
        </div>
    );
};

export default Navbar;