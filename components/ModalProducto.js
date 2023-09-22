import { useEffect, useState } from "react";
import Image from "next/image";
import useQuiosco from "@/hooks/useQuiosco";
import { formatearDinero } from "@/helpers";


const ModalProducto = () => {
    const { producto, handleChangeModal, handleAgregarPedido, pedido } = useQuiosco();
    const [cantidad, setCantidad] = useState(1);
    const [edicion, setEdicion] = useState(false);

    // Comprobar si el Modal actual esta en el pedido

    useEffect(() => {
        if(pedido.some(pedidoState => pedidoState.id == producto.id)) {
            const productoEdicion = pedido.find(pedidoState => pedidoState.id == producto.id);
            setEdicion(true);
            setCantidad(productoEdicion.cantidad);
        }
    }, [producto, pedido])

  return (
    <div className="md:flex gap-10">
        <div className="md:w-1/3">
            <Image 
                width={300}
                height={400}
                alt={`Imagen producto ${producto.nombre}`}
                src={`/assets/img/${producto.imagen}.jpg`}
            />

        </div>
        <div className="md:w-2/3">
            <div className="flex justify-end">
                <button
                    onClick={handleChangeModal}
                >
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-xbox-x" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9e9e9e" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" />
                    <path d="M9 8l6 8" />
                    <path d="M15 8l-6 8" />
                </svg>
                </button>
            </div>
            <h1 className="text-3xl font-bold">{producto.nombre}</h1>

            <div className="flex gap-2 items-center">
            <div className="md:w-2/4">
                <p className="mt-5 font-black text-5xl text-amber-500 text-center">
                    {formatearDinero(producto.precio)}
                </p>

                <div className="flex gap-4 mt-5 items-center justify-around">
                    <button
                        type="button"
                        onClick={() => {
                            if(cantidad <= 1) return;
                            setCantidad(cantidad - 1)
                        }}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alarm-minus" width="48" height="48" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M7 4l-2.75 2" />
                        <path d="M17 4l2.75 2" />
                        <path d="M10 13h4" />
                    </svg>
                    </button>

                    <p className="text-3xl">{cantidad}</p>

                    <button
                        type="button"
                        onClick={() => {
                            if(cantidad >= 5) return;
                            setCantidad(cantidad + 1)
                        }}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alarm-plus" width="48" height="48" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M7 4l-2.75 2" />
                        <path d="M17 4l2.75 2" />
                        <path d="M10 13h4" />
                        <path d="M12 11v4" />
                    </svg>
                    </button>
                </div>

                <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded w-full"
                    onClick={() => handleAgregarPedido({...producto, cantidad})}
                >{edicion ? "Guardar Cambios" : "Añadir al Pedido"}
                </button>
            </div>
            <div className="md:w-2/4">
                <Image 
                    width={100}
                    height={200}
                    alt="Imagen Cocinero"
                    src={`/assets/img/cooker.svg`}
                    className="mx-auto"
                />
            </div>
            </div>
        </div>
    </div>
  )
}

export default ModalProducto