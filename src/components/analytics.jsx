export default function Analyitcs(props) {
    let value = props.value;
    return(
        <>
        <h2 className={`text-start mb-4 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Analysis of the text</h2>
        <div className={`container d-flex justify-content-start`}>
        <p className={`text-start mb-4 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{`number of characters: ${value.length}`}</p>
        <p className={`text-start ms-4 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{`number of words: ${value.trim().split(/\s+/).length}`}</p>
        <p className={`text-start ms-4 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{`number of lines: ${value.trim().split(/\n/).length}`}</p>
        </div>
        </>
    )
}
