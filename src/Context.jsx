import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

// ################################################################################
// ################################################################################

const AppContext = React.createContext()

// CUSTOM HOOKS
const useGlobalContext = () => {
    return useContext(AppContext)
}

const AppProvider = ({ children }) => {
    //======== LES URLS =========//
    const mealsUrl = "https:/www.themealdb.com/api/json/v1/1/search.php?s="

    //======== LES STATES =========//
    const [meals, setMeals] = useState(JSON.parse(localStorage.getItem('meals')) || [])
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) ||[])

    const [selectedMeal, setSelectedMeal] = useState([])
    const [searchMeal, setSearchMeal] = useState('')

    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(false)

    //======== LES FUNCTIONS =========//
    const LikeMeal = (idMeal) => {
        let meal;
        meal = meals.find((itm) => itm.idMeal === idMeal)
        let favoriteExisteAlready = favorites.find((itm) => itm.idMeal === idMeal)

        if (favoriteExisteAlready) return
        let updateFavorites = [...favorites, meal]

        setFavorites(updateFavorites)
        localStorage.setItem('favorites', JSON.stringify(updateFavorites))
    }

    const removeFromFavorites = (idMeal) => {
        let updateFavorites = favorites.filter((itm) => itm.idMeal !== idMeal)
        setFavorites(updateFavorites)
        localStorage.setItem('favorites', JSON.stringify(updateFavorites))
    }

    const CloseModal = () => {
        setModal(false)
    }

    const ShowModal = (idMeal) => {
        let meal = meals.find((meal) => meal.idMeal === idMeal)
        setSelectedMeal(meal)
        setModal(true)
    }

    const fetchData = async (url) => {
        setLoading(true)
        try {
            await axios.get(`${url}${searchMeal}`)
                .then((res) => {
                    setMeals(res.data.meals)
                    localStorage.setItem('meals', JSON.stringify(res.data.meals))
                })
        } catch (error) {
            console.log(error)
        }

        setLoading(false)
    }

    useEffect(() => {

        fetchData(mealsUrl)
    }, [searchMeal])



    // ##################
    // ##################

    // RENDERING
    return (
        <AppContext.Provider value={{ meals, setMeals, loading, setLoading, LikeMeal, modal, CloseModal, ShowModal, selectedMeal, favorites, removeFromFavorites, setSearchMeal }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider, useGlobalContext }