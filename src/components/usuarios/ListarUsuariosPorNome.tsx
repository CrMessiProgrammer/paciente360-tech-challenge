import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FadeLoader } from "react-spinners"
import type Usuario from "../../models/Usuario"
import CardUsuarios from "../users/cardusers/CardUsers"
import { listar } from "../../services/Service"

function ListarUsuariosPorNome() {
	const [allUsuarios, setAllUsuarios] = useState<Usuario[]>([])
	const [usuariosFiltrados, setUsuariosFiltrados] = useState<Usuario[]>([])
	const [isLoading, setIsLoading] = useState(true)

	const { busca } = useParams<{ busca: string }>()

	async function buscarTodosUsuarios() {
		try {
			setIsLoading(true)
			await listar("/users", setAllUsuarios)
		} catch (error) {
			alert("Erro ao carregar usuários!")
		} finally {
			setTimeout(() => {
				setIsLoading(false)
			}, 1000)
		}
	}

	function filtrarUsuarios() {
		let filtrados = allUsuarios

		if (busca) {
			filtrados = filtrados.filter((usuario) =>
				usuario.name.toLowerCase().includes(busca.toLowerCase())
			)
		}
		setUsuariosFiltrados(filtrados)
	}

	useEffect(() => {
		buscarTodosUsuarios()
	}, [])

	useEffect(() => {
		filtrarUsuarios()
	}, [busca, allUsuarios])

	return (
		<div className="bg-gray-200 min-h-[70vh] flex flex-col items-center justify-start px-4">
			<h1 className="text-4xl text-center my-8">
				Resultados da busca por <span className="italic text-teal-800">{busca}</span>
			</h1>

			{/* Spinner */}
			{isLoading && (
				<div className="flex justify-center items-center min-h-[40vh]">
					<FadeLoader color="#0D9488" speedMultiplier={2} />
				</div>
			)}

			{/* Nenhum usuário encontrado */}
			{!isLoading && usuariosFiltrados.length === 0 && (
				<div className="flex justify-center items-center min-h-[40vh]">
					<h2 className="text-2xl text-gray-600 text-center">
						Nenhum Usuário encontrado para "{busca}"
					</h2>
				</div>
			)}

			{/* Lista de usuários */}
			{!isLoading && usuariosFiltrados.length > 0 && (
				<div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
					{usuariosFiltrados.map((usuario) => (
						<CardUsuarios key={usuario.id} usuario={usuario} />
					))}
				</div>
			)}
		</div>
	)
}

export default ListarUsuariosPorNome