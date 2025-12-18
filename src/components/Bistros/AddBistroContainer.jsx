import { useForm } from "react-hook-form";
import CloseBar from "../ui/CloseBar";
import CloseBarTitle from "../ui/CloseBarTitle";
import CloseButton from "../ui/CloseButton";
import FormInput from "../ui/formInput";
import FormLabel from "../ui/formLable";
import Style from "./BistrosComponents.module.css"
import RestaurantIcon from "../../assets/restaurant.png"
import { useContext, useState } from "react";
import {  BistrosContext } from "../../hooks/Bistros/BistrosContext";
import ErrorInput from "../ui/InputError";

function AddBistroContainer() {
    const { register, control, handleSubmit, reset, formState: { errors } } = useForm();
    const { handelOpenBistroForm ,handelBistroCreate} = useContext(BistrosContext);
    const onSubmit=(data)=>{
        handelBistroCreate(data)
        reset()
    }
    return (
        <div className={Style.addBistroCardContainer}>
            <CloseBar >
                <CloseBarTitle src={RestaurantIcon} title={"Add Bistro"}></CloseBarTitle>
                <CloseButton onClick={handelOpenBistroForm} ></CloseButton>
            </CloseBar>
            <div className={Style.addBistroFormContainer}>
                <form className={Style.addBistFrom} onSubmit={handleSubmit(onSubmit)}>
                    <FormLabel labelTitle={"Bistro Name"}></FormLabel>
                    <FormInput register={register} name={"bistroName"} rules={{ required: "Bistro name required" }} ></FormInput>
                    {errors.bistroName && <ErrorInput erroMsg={errors.bistroName.message}></ErrorInput>}
                    <button className={Style.addBistroBtn}>Add</button>
                </form>
            </div>
        </div>
    )
}

export default AddBistroContainer;