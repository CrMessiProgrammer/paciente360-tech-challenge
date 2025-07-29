import { useEffect, useState } from 'react'
import { listar } from '../../../services/Service'
import type Usuario from '../../../models/Usuario'
import CardUsuarios from '../cardusers/CardUsers'
import { FadeLoader } from 'react-spinners'

function ListarUsuarios() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    // Paginação
    const [paginaAtual, setPaginaAtual] = useState(1)
    const itensPorPagina = 6

    const inicio = (paginaAtual - 1) * itensPorPagina
    const fim = inicio + itensPorPagina
    const usuariosPaginados = usuarios.slice(inicio, fim)

    const totalPaginas = Math.ceil(usuarios.length / itensPorPagina)

    async function buscarUsuarios() {
        setIsLoading(true)

        try {
            await listar('/users', setUsuarios)
            setPaginaAtual(1)
        } catch (error: any) {
            console.log("Erro ao listar os Usuários!")
        } finally {
            // Spinner visível por pelo menos 0.8s
            setTimeout(() => {
                setIsLoading(false)
            }, 800)
        }
    }

    useEffect(() => {
        buscarUsuarios()
    }, [])

    return (
        <>
        <div className="flex justify-center w-full my-4">
            <div className="container flex flex-col mx-4">
            {/* Spinner visível enquanto carrega */}
            {isLoading && (
                <div className="flex justify-center items-center my-8">
                <FadeLoader color="#0D9488" speedMultiplier={2} />
                </div>
            )}

            {/* Mensagem caso não haja usuários (sem estar carregando) */}
            {!isLoading && usuarios.length === 0 && (
                <span className="my-8 text-3xl text-center">
                Nenhum usuário foi encontrado
                </span>
            )}

            {/* Exibi cards de usuários apenas quando não estiver carregando */}
            {!isLoading && (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {usuariosPaginados.map((usuario) => (
                    <CardUsuarios usuario={usuario} key={usuario.id} />
                ))}
                </div>
            )}

            {/* Paginação abaixo dos cards */}
            {!isLoading && usuarios.length > itensPorPagina && (
                <div className="flex justify-center items-center gap-4 mt-8 flex-wrap">
                {/* Botão Anterior */}
                <button
                    onClick={() => setPaginaAtual(prev => Math.max(prev - 1, 1))}
                    disabled={paginaAtual === 1}
                    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 hover:bg-gray-400"
                >
                    ← Anterior
                </button>

                {/* Números das páginas */}
                {Array.from({ length: totalPaginas }, (_, index) => (
                    <button
                    key={index}
                    onClick={() => setPaginaAtual(index + 1)}
                    className={`px-4 py-2 rounded ${
                        paginaAtual === index + 1
                        ? 'bg-teal-600 text-white'
                        : 'bg-gray-200 text-gray-800 hover:bg-teal-200'
                    }`}
                    >
                    {index + 1}
                    </button>
                ))}

                {/* Botão Próxima */}
                <button
                    onClick={() => setPaginaAtual(prev => Math.min(prev + 1, totalPaginas))}
                    disabled={paginaAtual === totalPaginas}
                    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 hover:bg-gray-400"
                >
                    Próxima →
                </button>
                </div>
            )}
            </div>
        </div>
        </>
    )
}

export default ListarUsuarios