import GraficoPrincipal from "../Graficos/GraficoPrincipal";

function CardPrincipal ({title, dataInfectados, dataMuertes, dataRecuperados, dataActivos}) {
    return (
        <section className="flex justify-center Cards align-center h-4/5">
            <section className="flex flex-col items-center justify-center w-11/12 border-2 border-black border-solid rounded-3xl">
                <div className="flex items-center justify-center w-full h-full mt-5 text-white bg-gray-200">
                    <GraficoPrincipal dataInfectados={dataInfectados} dataMuertes={dataMuertes} dataRecuperados={dataRecuperados} dataActivos={dataActivos}/>
                </div>
                <h2 className="text-lg md:text-2xl">{title}</h2>
            </section>
        </section>
      );
}

export default CardPrincipal;