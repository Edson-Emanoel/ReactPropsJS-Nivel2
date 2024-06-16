
export function Button(props) {
    let classes = '';
        classes += props.operation ? 'operation' : ''
        classes += props.double ? 'double' : ''
        classes += props.triple ? 'triple' : ''
    return(
        <button
            className={classes}>
                {props.label}
        </button>
    )
}