import React, { useState } from 'react'
import Search from '../component/Search'


const Homepage = () => {
     const [input, setInput] = useState("");
     const auth = "563492ad6f91700001000001c902eabcef444e9f9992c0868d0869b8"
     const intialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15"
     const searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=1`
     return (
          <div style={{ minHeight: "100vh" }}>
               <Search />
          </div>
     );
};

export default Homepage;