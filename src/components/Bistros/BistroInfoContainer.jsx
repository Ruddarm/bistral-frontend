import Icon from "../ui/Icons";
import Style from "./BistrosComponents.module.css"
import RestrauntIcon from "../../assets/restaurant.png"
import PenIcon from "../../assets/pen.png"
import LayoutTitle from "../ui/Titles";
import MailIcon from "../../assets/envelope.png"
import Document from "../../assets/document.png"
import UserIcon from "../../assets/user.png"
import phoneIcon from "../../assets/phone-flip.png"
function BistroInfoContainer() {
    return (
        <div className={Style.bistroInfoCard}>
            <div className={`${Style.flexCenter} ${Style.bistroInfohead} `}>
                <div className={`${Style.flex} ${Style.flexOne}  `} >
                    <Icon id={`${Style.Icon}`} src={RestrauntIcon}></Icon>
                    <div className={`${Style.flex} ${Style.flexCenter} ${Style.bgRed}`}>
                        <h1 className={`${Style.nameTitle}`}>Bean Town Cafe</h1>
                    </div>
                </div>
                <button className={`${Style.editBistro}`}>
                    <Icon id={Style.penIconId} src={PenIcon}></Icon>
                    Edit Details
                </button>
            </div>
            <div className={Style.infoContainer}>
                <div className={Style.infoDiv}>
                    <Icon src={UserIcon}></Icon>
                    <div className={Style.infoInnerDiv}>
                        <span className={Style.infoTittle}>Company Name</span>
                        <span className={Style.infoValue}>Ruddarm Maurya</span>
                    </div>
                </div>    <div className={Style.infoDiv}>
                    <Icon src={Document}></Icon>
                    <div className={Style.infoInnerDiv}>
                        <span className={Style.infoTittle}>GST NUMBER</span>
                        <span className={Style.infoValue}>27AABCU9603R1ZM

                        </span>
                    </div>
                </div>    <div className={Style.infoDiv}>
                    <Icon src={phoneIcon}></Icon>
                    <div className={Style.infoInnerDiv}>
                        <span className={Style.infoTittle}>PHONE</span>
                        <span className={Style.infoValue}>+91 9594120025</span>
                    </div>
                </div>    <div className={Style.infoDiv}>
                    <Icon src={MailIcon}></Icon>
                    <div className={Style.infoInnerDiv}>
                        <span className={Style.infoTittle}>EMAIL</span>
                        <span className={Style.infoValue}>beantowncafe@gmail.com</span>
                    </div>
                </div>

            </div>
        </div>
    )

}


export default BistroInfoContainer;