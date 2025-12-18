import { useContext } from "react";
import BistroCard from "../ui/Bistros/BistrosCard";
import BistroCardContainer from "../ui/Bistros/BistrosCardContainer";
import CreateBtn from "../ui/CreateButton";
import Style from "./BistrosComponents.module.css"
import { BistrosContext } from "../../hooks/Bistros/BistrosContext";
import OverlayContainer from "../ui/OverLayContainer";
import AddBistroContainer from "./AddBistroContainer.jsx"
import { useNavigate } from "react-router-dom";

function BistrosContainer({ }) {
    const { openBistroForm, setOpenBistroForm, bistros } = useContext(BistrosContext)
    // console.log(bistros)
    const navigate = useNavigate();
    const handleClick = (bistroId, bistroName) => {
        navigate(`${bistroId}/${bistroName}`)
    }
    return (
        <>
            {openBistroForm && <OverlayContainer>
                <AddBistroContainer></AddBistroContainer>
            </OverlayContainer>}

            <div className={Style.bistroCardContainer}>
                {bistros?.map((bistro) => (
                    <BistroCardContainer>
                        <BistroCard handleClick={() => { handleClick(bistro.bistroId, bistro.bistroName) }} bistro={bistro}></BistroCard>
                    </BistroCardContainer>
                ))}
                <BistroCardContainer>
                    <CreateBtn onClick={() => { setOpenBistroForm(!openBistroForm) }}></CreateBtn>
                </BistroCardContainer>
            </div>
        </>

    )
}

export default BistrosContainer;