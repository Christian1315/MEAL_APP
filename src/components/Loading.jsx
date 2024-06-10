import style from "../assets/loading.module.css"

const Loading = () => {
    return (
        <>
            <div id={style.loading} className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p className="text-center">Loading ...</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loading