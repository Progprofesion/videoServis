
const useMarvelService = () => {



    const getAllCharacters = async () => {
        const res = await request("https://api.kinopoisk.dev/v1.3/movie/1009536");
        return res.data;
    }



    // const _thransformCharacter = (character) => {
    //     return {
    //         id: character.id,
    //         name: character.name,
    //         description: character.description ? `${character.description.slice(0, 210)}...` : 'There is no description for this character',
    //         thumbnail: character.thumbnail.path + '.' + character.thumbnail.extension,
    //         homepage: character.urls[0].url,
    //         wiki: character.urls[1].url,
    //         comics: character.comics.items
    //     }
    // }

    return {
        getAllCharacters
    };

}

export default useMarvelService; 