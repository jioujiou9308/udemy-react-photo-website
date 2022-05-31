import React from 'react'

const Search = () => {
     const auth = "563492ad6f91700001000001c902eabcef444e9f9992c0868d0869b8"
     const intialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15"
     const search = async () => {
          const dataFetch = await fetch(intialURL, {
               method: "GET",
               headers: {
                    Accept: "application/json",
                    Authorization: auth,
               }
          })
          let parseData = await dataFetch.json();
     }
     return (
          <div className='search'>
               <input type="text" />
               <button>Search</button>
          </div>
     )
}

export default Search