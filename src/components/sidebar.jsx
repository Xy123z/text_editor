
export default function Sidebar(props){

    return(
        <div className={`offcanvas offcanvas-start ${props.mode === 'dark' ? 'text-bg-dark' : ''}`} tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">Add Functionalities</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body" data-bs-theme={`${props.mode === 'dark' ? 'dark' : ''}`}>
            <div className="list-group list-group-flush">
  <button type="button" className="list-group-item list-group-item-action" onClick={() => {props.addFunction("find_n_replace")}}>
    find and replace
  </button>
  <button type="button" className="list-group-item list-group-item-action" onClick={() => {props.addFunction("no_of_occur")}}>
    number of occurance
  </button>
</div>
          </div>
        </div>
    )
}
