import style from "../assets/favorites.module.css"
import { useGlobalContext } from "../Context"
const Favorites = () => {

    const { favorites, removeFromFavorites } = useGlobalContext();

    return (
        <>
            <div className="row" id={style.favorites}>
                <div className="col-md-12">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <p className="text-white">Favorites meals</p>

                                <div className="d-flex">
                                    {
                                        favorites.map((favorite) => (
                                            <div className="img" key={favorite.idMeal}>
                                                <img src={favorite.strMealThumb} alt="" srcSet="" />
                                                <span className="" onClick={() => removeFromFavorites(favorite.idMeal)}>x</span>
                                                <br />
                                                <small className="text-white">{favorite.strMeal}</small>
                                            </div>
                                        ))
                                    }
                                    {/* <div className="img">
                                        <img src="meals/m4.png" alt="" srcSet="" />
                                        <span className="" >x</span>
                                        <br />
                                        <small className="text-white">Meal &</small>
                                    </div>
                                    <div className="img">
                                        <img src="meals/m5.png" alt="" srcSet="" />
                                        <span className="" >x</span>
                                        <br />
                                        <small className="text-white">Meal &</small>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Favorites