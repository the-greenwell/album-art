export interface Album {
    id: string;
    title: string;
    releaseDate: string;
    image: string;
    url: string;
}

export interface Artist {
    id: string;
    name: string;
    img?: string;
    url?: string;
}