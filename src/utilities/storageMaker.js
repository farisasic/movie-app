// // Date converter - reformats the date

export const covertNumericDateToReadableFormat = (numericDate) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date(numericDate);
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    }


export function isMovieInStorage(movieFromAPI){
        let favouritesFromStorage = localStorage.getItem('favourite');
        if(favouritesFromStorage === null){
            return false;
        }
        favouritesFromStorage = JSON.parse(favouritesFromStorage);
        if(favouritesFromStorage.length === 0){
            return false;
        }else{
            const found = favouritesFromStorage.find(movie => movie.id === movieFromAPI.id);
            if(found !== undefined){
                console.log('isMovieInStorage');
                return true;
            }
        }
    }

