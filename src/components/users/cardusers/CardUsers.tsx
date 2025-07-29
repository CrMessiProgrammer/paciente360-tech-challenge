import { Link } from "react-router-dom"
import type Usuario from '../../../models/Usuario'

interface CardUsuarioProps {
    usuario: Usuario
}

function CardUsuarios({ usuario }: CardUsuarioProps) {
    return (
        <Link to={`/usuarios/${usuario.id}`}>
            <div className="flex flex-col items-center justify-center overflow-hidden border rounded-2xl bg-white shadow-md p-6 hover:shadow-lg cursor-pointer transition text-center">
                <img
                    src={`https://i.pravatar.cc/150?img=${usuario.id}`}
                    alt={`Avatar de ${usuario.name}`}
                    className="w-24 h-24 rounded-full mb-4"
                />

                <h2 className="text-xl font-bold mb-2">{usuario.name}</h2>
                <p className="text-sm text-teal-700 font-medium hover:underline">
                    Saiba mais →
                </p>
            </div>
        </Link>
    )
}

export default CardUsuarios