import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext';
import httpCommon, { genToken, formatArtistData } from '../http-common';

interface FormData {
    input: {
        value: string;
        error?: boolean;
    }
}

export const SearchBar: React.FC = () => {
    const { setResults } = useAppContext();
    const [form, setForm] = useState<FormData>();

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        const bool = validation(value);
        setForm({input: {value: value, error: bool}})
    }

    const onSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        if(form?.input.error == false) {
            genToken().then(token =>{
                httpCommon.get(`search?q=${form.input.value}&type=artist&market=us`, 
                {
                headers: {
                    'Authorization': 'Bearer ' + token, 
                    'Content-Type' : 'application/json'
                }
                }).then(res => {
                    const searchResults = formatArtistData(res);
                    if(setResults) setResults(searchResults)
                }).catch(err =>{
                    console.log(err)
                })
            })
        }
    }

    

    const validation = (value:string) => {
        if(value.length < 3) return true;
        return false
    }

    return (
        <div className="mx-auto form-group search-bar">
            <form id="form" onSubmit={onSubmit}>
                {form?.input.error && (
                    <div className="alert d-flex align-items-center alert-danger" role="alert">
                        <p>Must be 3 characters</p>
                    </div>)}
                <label htmlFor='artist-search'>Search for an Artist on Spotify</label>
                <div className="input-group">
                    <input type="text" className="form-control" id="artist-search" placeholder="Find an Artist" onChange={onChange}/>
                    <div className="input-group-append">
                        <button className="btn" type="submit" id="form-btn">Button</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
