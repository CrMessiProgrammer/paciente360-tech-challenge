import axios from "axios"

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
})

export const listar = async (url: string, setDados: Function) => {
  try {
    const resposta = await api.get(url)
    setDados(resposta.data)
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error)
  }
}