import Image from "next/image";
import useQuiosco from "@/hooks/useQuiosco";

const Categoria = ({categoria}) => {
    const { categoriaActual, handleClickCategoria } = useQuiosco();

    const { nombre, icono, id } = categoria;
  return (
      <button
            type="button"
            className={`${categoriaActual?.id === id ? "bg-amber-400" : ""} flex items-center w-full border p-5  text-xl font-bold hover:bg-amber-400 hover:cursor-pointer`}
            onClick={() => handleClickCategoria(id)}
        >
            <Image 
                width={70}
                height={70}
                src={`/assets/img/icono_${icono}.svg`}
                alt="Imagen Icono"
            />        
            <span className="px-2"> </span>
            {nombre}

        </button>
  )
}

export default Categoria