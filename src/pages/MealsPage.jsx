
import Meal from "../components/Meal"
import { useGlobalContext } from "../Context"
import Modal from "../components/Modal"

const MealsPage = () => {
    const Context = useGlobalContext()

    const meals = Context.meals
    const setMeals = Context.setMeals

    return (
        <>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="row">
                        {
                            meals.map((meal) => (
                                <Meal
                                    key={meal.idMeal}
                                    meal={meal}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        </>
    )
}

export default MealsPage