import { Link } from "react-router-dom"
import type Usuario from '../../../models/Usuario'

interface CardUsuarioProps {
    usuario: Usuario
}

function CardUsuarios({ usuario }: CardUsuarioProps) {
    return (
        <Link to={`/usuarios/${usuario.id}`}>
            <div className="flex flex-col items-center justify-center overflow-hidden border rounded-2xl bg-white shadow-md p-6 hover:shadow-lg cursor-pointer transition text-center space-y-2">
                <img
                    src={`https://i.pravatar.cc/150?img=${usuario.id}`}
                    alt={`Avatar de ${usuario.name}`}
                    className="w-24 h-24 rounded-full"
                />

                <h2 className="text-xl font-bold">{usuario.name}</h2>

                <p className="text-gray-600 text-sm">
                    <strong>Email:</strong> {usuario.email}
                </p>

                <p className="text-sm text-teal-700 font-medium hover:underline mt-2">
                    Saiba mais →
                </p>
            </div>
        </Link>
    )
}

export default CardUsuarios