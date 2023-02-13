import './ColorTile.css'

const ColorTile = ({ col, hexVal, isDarkText }) => {
  return (
    <div
        className='ColorTile'
        style={{
            backgroundColor: col,
            color: isDarkText ? '#000' : '#FFF'
        }}>
            <p>{col ? col : 'Empty Value'}</p>
            <p>{hexVal ? hexVal : null}</p>
    </div>
  )
}

ColorTile.defaultProps = {
    col: "Empty Value"
};

export default ColorTile
