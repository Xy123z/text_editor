export default function Alert(props){
    let mode = props.mode;
    if (props.type === '') return null;
    return(
        <div>
        {(props.type === "uppercase") && (
        <div className={`alert alert-success ${mode==="dark" ? "bg-success bg-opacity-25 text-light border-success" : ""}`} role="alert">
  converted to upper case
</div>
        )}
        {(props.type === "lowercase") && (
        <div className={`alert alert-success ${mode==="dark" ? "bg-success bg-opacity-25 text-light border-success" : ""}`} role="alert">
  converted to lower case
</div>
        )}
        {(props.type === "remove") && (
        <div className={`alert alert-success ${mode==="dark" ? "bg-success bg-opacity-25 text-light border-success" : ""}`} role="alert">
  removed extra spaces
</div>
        )}
        {(props.type === "clear") && (
        <div className={`alert alert-warning ${mode==="dark" ? "bg-warning bg-opacity-25 text-light border-warning" : ""}`} role="alert">
  cleared text area
</div>
        )}
        {(props.type === "success") && (
        <div className={`alert alert-success ${mode==="dark" ? "bg-success bg-opacity-25 text-light border-success" : ""}`} role="alert">
  Text copied
</div>
        )}
        {
            props.type === "failure" && (
                 <div className={`alert alert-danger ${mode==="dark" ? "bg-danger bg-opacity-25 text-light border-danger" : ""}`} role="alert">
  failed to copy the text
</div>
            )
        }
        </div>
    );
}
