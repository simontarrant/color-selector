import './Search.css'
import colorNames from 'colornames';

const Search = ({
    col, setCol, setHexVal, isDarkText, setIsDarkText
}) => {
  return (
    <form className='Search' onSubmit={(e) => e.preventDefault()}>
        <label className='searchLabel' htmlFor="searchInput">
            Type Color Name
        </label>
        <input
            className='searchInput'
            id='searchInput'
            type="text"
            placeholder='Type Color'
            required
            value={col}
            onChange={(e) => {
                setCol(e.target.value);
                setHexVal(colorNames(e.target.value));
            }}/>
        <button
            className='textColButton'
            type='button'
            onClick={() => setIsDarkText(!isDarkText)}
            style={{backgroundColor: isDarkText ? '#FFF' : '#000'}}>
            <p
                style={{color: isDarkText ? '#000' : '#FFF'}}>
                Change Text Color
            </p>
        </button>
    </form>
  )
}

export default Search
