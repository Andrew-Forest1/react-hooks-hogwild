function Filters({showGreased, setShowGreased, nameFilter, setNameFilter, wieghtFilter, setWieghtFilter}){
    const handleNameChange = (e) => {
        setNameFilter(e.target.value)
    }

    const handleWieghtChange = (e) => {
        setWieghtFilter(e.target.value)
    }
    
    const handleButtonClick = () => {
        setShowGreased(!showGreased)
    }

    return (
        <div>
            <button onClick={handleButtonClick}>{showGreased ? "Hide Greased Pigs" : "Show Greased Pigs"}</button>
            <label for="name">Name Filter</label>
            <input type="text" name="name" onChange={handleNameChange} value={nameFilter}/>
            <label for="wieght">Wieght Filter</label>
            <input type="text" name="wieght" onChange={handleWieghtChange} value={wieghtFilter}/>
        </div>
    )
}

export default Filters