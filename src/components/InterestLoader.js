const InterestLoader = interests => {
    const Components = {}
    Object.keys(interests).forEach(element => {
        Components[element] = require("../pages/interests/" + element).default
    })
    return Components
}

export default InterestLoader
