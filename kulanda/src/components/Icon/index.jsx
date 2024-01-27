const Icon = ({iconName, style = undefined}) => {
    return (
        <i className={`fa-solid ${iconName} text-green-700 text-base`} style={{marginRight: 10, ...style}}></i>
    )
}

export default Icon