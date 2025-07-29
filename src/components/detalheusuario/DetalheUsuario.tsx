import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeft } from "@phosphor-icons/react"
import { FadeLoader } from "react-spinners"
import type Usuario from "../../models/Usuario"
import { listar } from "../../services/Service"

function DetalheUsuario() {
    const [usuario, setUsuario] = useState<Usuario | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()

    async function buscarUsuario() {
        try {
            setIsLoading(true)
            await listar(`/users/${id}`, setUsuario)
        } catch (error) {
            alert("Erro ao carregar detalhes do usuário")
        } finally {
            // Simula um pequeno tempo de carregamento
            setTimeout(() => setIsLoading(false), 1000)
        }
    }

    useEffect(() => {
        buscarUsuario()
    }, [id])

    if (isLoading) {
        return (
            <div className="min-h-[70vh] flex items-center justify-center bg-gray-200">
                <FadeLoader color="#0D9488" speedMultiplier={2} />
            </div>
        )
    }

    if (!usuario) {
        return <p className="text-center my-8">Usuário não encontrado.</p>
    }

    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-200 px-4 py-10">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-sm w-full text-center">
                <img
                    src={`https://i.pravatar.cc/150?img=${usuario.id}`}
                    alt={`Avatar de ${usuario.name}`}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                />

                <h2 className="text-2xl font-bold mb-2">{usuario.name}</h2>
                <p className="text-gray-600 mb-1"><strong>Email:</strong> {usuario.email}</p>
                <p className="text-gray-500 text-sm">ID: {usuario.id}</p>

                <button
                    onClick={() => navigate(-1)}
                    className="mt-6 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 flex items-center gap-2 mx-auto"
                >
                    <ArrowLeft size={18} weight="bold" />
                    Voltar
                </button>
            </div>
        </div>
    )
}

export default DetalheUsuario