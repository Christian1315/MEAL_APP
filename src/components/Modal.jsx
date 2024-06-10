import style from "../assets/modal.module.css";
import { useGlobalContext } from '../Context'

const Modal = () => {
    const { CloseModal, selectedMeal } = useGlobalContext();

    return (
        <>
            <div className={style.modalContainer} onClick={CloseModal}>
                <div className={style.modalContent}>
                    <img src={selectedMeal.strMealThumb} alt="" srcSet="" />
                    <h1 className={style.title} >{selectedMeal.strMeal}</h1>
                    <p className={style.description} >
                        <strong>Instrutions </strong> <br />
                        {selectedMeal.strInstructions}
                    </p>

                    <a href={selectedMeal.strSource} target="_blank" className="text-danger btn" rel="noopener noreferrer">Source:</a>

                    {/* <br /> */}
                    <span className={style.closeBtn + ' btn btn-sm btn-danger'}  >Fermer</span>
                </div>
            </div>
        </>
    )
}

export default Modal