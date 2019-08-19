import React from 'react';

import "./style.css"

const SearchInput = ({ onChange }) => (
    <div className="search">
        <input className="search__input"
               type="text"
               onChange={(e) => onChange(e.target.value)} placeholder="Search here..."
        />
    </div>
);

export default SearchInput;
