import { useState } from "react";
import style from "../assets/search.module.css"
import { useGlobalContext } from "../Context"

const SearchMeal = () => {
    const { setSearchMeal} = useGlobalContext();
    const [text, setText] = useState('')

    function onChangeHandle(e) {
        setText(e.target.value)
    }

    function SubmitHandle(e) {
        // console.log(text);
        setSearchMeal(text)
    }

    return (
        <>
            <div className="col-md-12">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className="d-flex  py-1">
                                <input type="text" placeholder="Recherchez un meal ..." value={text} onChange={onChangeHandle} name="" className="form-control px-3"/>
                                <button className="btn btn-sm btn-success" onClick={SubmitHandle}>Search</button>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchMeal