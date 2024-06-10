import style from "../assets/header.module.css"

import Favorites from "./Favorites";
import SearchMeal from "./SearchMeal";

import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";

const Header = () => {
    const { favorites } = useGlobalContext()

    return (
        <>
            <div id={style.header} className="container-fluid bg-light shadow-sm mb-5 px-0">
                <div className="row">
                    {/*  */}
                    <SearchMeal />

                    {/* FAVORITES */}
                     <Favorites />
                </div>
            </div>
        </>
    )
}

export default Header