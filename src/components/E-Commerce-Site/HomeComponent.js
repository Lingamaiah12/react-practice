
export default function HomeComponent(){
    return(
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="d-flex">
                    <a className="navbar-brand">Store</a>
                    <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                </form>
                </div>
                <div>
                <button className="btn btn-primary">Sign in</button>
                </div>
            </nav>
        </div>
    )
}