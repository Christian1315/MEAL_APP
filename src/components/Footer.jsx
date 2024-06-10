
import style from "../assets/footer.module.css"

const Footer = () => {

    let date = new Date()
    return (
        <>
            <div id={style.footer} className="container-fluid bg-light shadow-sm mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <p className="text-center">@Copyright -- <span className="text-danger">{date.getFullYear()} </span>  | By CodeForChrist</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer