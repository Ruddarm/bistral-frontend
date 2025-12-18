import CloseBar from "../ui/CloseBar";
import CloseBarTitle from "../ui/CloseBarTitle";
import CloseButton from "../ui/CloseButton";
import Style from "./menus.module.css"
import MenuCardIcon from "../../assets/MenuCardIcon.png"
import { useForm, useFieldArray } from "react-hook-form"
import FormLabel from "../ui/formLable";
import FormInput, { FormInputOption, FormSelectInput } from "../ui/formInput";
import CreateBtn from "../ui/CreateButton";
import { data } from "react-router-dom";
import ErrorInput from "../ui/InputError";
import { useContext } from "react";
import { MenuContext } from "../../hooks/menu/useMenus";
function CreateMenu() {
    const { handelCreateMenu, handelCreateNewMenu, bistros } = useContext(MenuContext)
    const { register, control, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log("Final Data", data)
        handelCreateNewMenu(data)
    }
    return (
        <div className={Style.createMenuContainer}>
            <CloseBar>
                <div className={Style.createMenuContainerCloseBar}>
                    <CloseBarTitle src={MenuCardIcon} title={"Add Menus"}></CloseBarTitle>
                    <CloseButton onClick={handelCreateMenu}></CloseButton>
                </div>
            </CloseBar>
            <div className={Style.createMenuFormContainer}>
                <form className={Style.createMenuForm} onSubmit={handleSubmit(onSubmit)}>
                    <FormLabel labelTitle={"Menu Card Name"}></FormLabel>
                    <FormInput register={register} name={"menuName"} rules={{ required: "Menu Card Name is Required" }} />
                    {errors.menuName && (<ErrorInput erroMsg={errors.menuName.message}></ErrorInput>)}
                    <FormLabel labelTitle={"Select Bistro"}></FormLabel>
                    <FormSelectInput
                        register={register}
                        name={"bistroId"}
                        rules={{ required: "Select Bistro" }}
                    >
                        {bistros?.map((bistro) => (
                            bistro.bistroName!="All"?
                            <FormInputOption value={bistro.bistroId} name={bistro.bistroName}></FormInputOption>:<></>
                        ))}
                    </FormSelectInput>
                    {errors.bistroId && (<ErrorInput erroMsg={errors.bistroId.message}></ErrorInput>)}

                    <button className={Style.createMenuBtn}>
                        Add Menu Card
                    </button>
                </form>
            </div>
        </div>
    )
}


export default CreateMenu;