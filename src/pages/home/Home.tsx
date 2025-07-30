import { useEffect, useState } from "react"
import ListaUsuarios from "../../components/users/listausers/ListaUsers"
import { FadeLoader } from "react-spinners"

function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 200) // espera 0.2 segundos

    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      {/* Seção hero/topo */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-800 to-slate-600 flex justify-center">
        <div className="container grid grid-cols-1 md:grid-cols-2 text-white gap-8 md:gap-0 px-4">
          <div className="flex flex-col gap-4 items-center justify-center py-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold">Seja Bem Vindo(a)!</h2>
            <p className="text-base md:text-xl">Encontre alguns de nossos Clientes</p>
          </div>

          <div className="flex justify-center items-center">
            <img
              src="https://ik.imagekit.io/m1iwfxqae/drive-download-20250120T144504Z-001/Health%20professional%20team-amico.svg?updatedAt=1753775108116"
              alt="Imagem Página Home"
              className="w-2/3 max-w-xs md:max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </div>

      {/* Lista de usuários na Home */}
      <div className="container mx-auto my-8 px-4">
        <h3 className="text-3xl font-bold text-center pb-1">Lista de Usuários</h3>
        
        {isLoading ? (
          <FadeLoader
            color="#0D9488"
            speedMultiplier={2}
            className="mx-auto my-8"
          />
        ) : (
          <ListaUsuarios />
        )}
      </div>
    </>
  )
}

export default Home