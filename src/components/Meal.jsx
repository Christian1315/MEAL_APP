import style from "../assets/meal.module.css"
import Modal from "./Modal"

import { useGlobalContext } from "../Context"

const Meal = ({ meal }) => {
    let { LikeMeal: likeMeal, ShowModal } = useGlobalContext()

    return (
        <div className="col-md-4 col-sm-6">
            <div className="card m-2 shadow-sm" style={{ cursor: "pointer" }} >
                <img src={meal.strMealThumb} className="card-img-top" alt="..." onClick={() => ShowModal(meal.idMeal)} />
                <div className="d-flex justify-content-between px-2">
                    <strong style={{ fontSize: "15px" }}>{meal.strMeal}</strong>
                    <i className="bi bi-hand-thumbs-up btn btn-light btn-sm" id={meal.idMeal} onClick={() => likeMeal(meal.idMeal)}></i>
                </div>
            </div>
        </div>
    )
}

export default Meal