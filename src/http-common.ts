import axios, { AxiosResponse } from "axios";
import { Album, Artist } from "./types/Artist";

export const genToken = async () =>  {
    const now = Math.floor(Date.now() / 1000);
    const expSession = sessionStorage.getItem('albm-art-exp');
    const check = expSession ? parseInt(expSession) : 0; 

    if(!sessionStorage.getItem('albm-art-tkn') ||  now > check){
        let access_tkn = '';
        const client_id = import.meta.env.VITE_CLIENT_ID;
        const client_secret = import.meta.env.VITE_CLIENT_SEC;
        const token = await axios.post(import.meta.env.VITE_TOKEN_API_URL, { grant_type: "client_credentials" },
        {
            headers: {
                "Authorization": "Basic " + (btoa(client_id + ':' + client_secret)),
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then(token => {
            const { expires_in, access_token } = token.data;
            const exp = now + expires_in;
            sessionStorage.setItem('albm-art-exp', exp);
            sessionStorage.setItem('albm-art-tkn', access_token);
            access_tkn = access_token;
        }).catch(err => {
            access_tkn = 'failedToken';
        });
        return access_tkn;
    } else {
        return sessionStorage.getItem('albm-art-tkn');
    }
}

export default axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

export const formatAlbumData = (res: AxiosResponse) => {
    const set = new Set();
    let alb: Album[] = [];
    for(let a of res.data.items){
        if (!set.has(a.name)){
            set.add(a.name);
            const [year, month, day] = a.release_date.split('-');
            let album: Album = {
                id: a.id,
                title: a.name,
                releaseDate: `${month}/${day}/${year}`,
                image: a.images[0].url,
                url: a.external_urls['spotify']
            }
            alb.push(album)
        }
    }
    return alb;
}

export const formatArtistData = (res: AxiosResponse) => {
    const set = new Set();
    let artists: Artist[] = [];
    for(let a of res.data.artists.items){
        if (!set.has(a.name)){
            set.add(a.name);
            const image = a.images.length > 0 ? a.images[0].url : 'https://www.nicepng.com/png/detail/73-730154_open-default-profile-picture-png.png';
            let artist: Artist = {
                id: a.id,
                name: a.name,
                img: image,
                url: a.external_urls.spotify
            }
            artists.push(artist)
        }
    }
    return artists;
}
