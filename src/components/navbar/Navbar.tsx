import { User } from "@phosphor-icons/react"
import { MagnifyingGlass, Stethoscope } from "@phosphor-icons/react/dist/ssr"
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom"

function Navbar() {

	const navigate = useNavigate();
	
	const [busca, setBusca] = useState<string>('')

    function handleBuscarUsuario(e: ChangeEvent<HTMLInputElement>) {
        setBusca(e.target.value)
    }

    function buscarUsuario(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        navigate(`/busca/${busca}`)
        setBusca('')
    }

	return (
		<>
			<div className="flex justify-center w-full py-4 text-white bg-slate-800">
				<div className="container flex items-center justify-between mx-4 text-lg">
                    <Link to='/home'>
                        <Stethoscope
                            size={30}
                            weight="bold"
                        />
                    </Link>
					<Link to='/home' className="text-2xl font-bold">Paciente360</Link>

					<div className="relative flex items-center justify-center w-2/5 text-black">
						<form 
							className="flex items-center justify-center w-full"
							onSubmit={buscarUsuario}
						>
							<input
								className="w-10/12 px-4 py-4 bg-white rounded-lg h-9 focus:outline-none"
								type="search"
								placeholder="Pesquisar usuário"
								id="busca"
								name="busca"
								required
								value={busca}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => handleBuscarUsuario(e)}
							/>
							<button
								type="submit"
								className="h-9 w-9 p-2.5 ms-2 text-sm font-medium text-white bg-teal-500 hover:bg-teal-900 rounded-lg border border-teal-700 cursor-pointer"
							>
								<MagnifyingGlass
									size={14}
									weight="bold"
								/>
							</button>
						</form>
					</div>

					<div className="flex items-center gap-4 py-4">
						<Link
							to="/usuarios"
							className="hover:underline"
						>
							Listar Usuários
						</Link>
						<Link to="/usuarios">
							<User size={32} weight="bold"/>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar