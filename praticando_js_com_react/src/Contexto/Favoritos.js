import { createContext, useContext, useState } from "react";

//criando um contexto, pela função createContext do react
export const FavoritosContext = createContext();
//dando nome a ela 
FavoritosContext.displayName = 'Favoritos';

export default function FavoritosProvider({ children }) {

    const [favorito, setFavorito] = useState([]);

    return (
        <FavoritosContext.Provider value={{favorito, setFavorito}}>
            {children}
        </FavoritosContext.Provider>
    )
};

export function useFavoritoContext(){
    const { favorito, setFavorito } = useContext(FavoritosContext);

    function adicionarFavorito(novoFavorito) {
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id)

        let novaLista = [...favorito];

        if(!favoritoRepetido) {
            novaLista.push(novoFavorito);
            return setFavorito(novaLista);
        }
        //encontrando o favorito repetido e retirando com o splice() ele da lista
        novaLista.splice(novaLista.indexOf(novoFavorito), 1);
        return setFavorito(novaLista);
    }
    return {
        favorito,
        adicionarFavorito
    }
}