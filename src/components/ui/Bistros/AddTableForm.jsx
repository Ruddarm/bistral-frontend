import { useForm } from "react-hook-form";
import FormLabel from "../formLable";
import ErrorInput from "../InputError";
import Style from "./BranchUI.module.css"
import FormInput from "../formInput";


function AddTableForm({
    handelTableCreation
}) {
    const { register, control, handleSubmit, reset, formState: { errors } } = useForm(

    );
    return (
        <form className={Style.zoneModification} onSubmit={handleSubmit(handelTableCreation)}>
            <FormLabel labelTitle={"Create/ Add Table"}></FormLabel>
            {errors.tableNumber && <ErrorInput erroMsg={errors.tableCount.message}>
            </ErrorInput>}
            <div className={Style.zoneInputContainer}>
                <FormInput

                    rest={{ placeholder: 'Enter Number of table to add' }}
                    register={register}
                    name={"tableCount"}
                    rules={{ required: "Number is requied" }}
                ></FormInput>
                <div className={Style.saveContainer}>
                    <button className={Style.saveBtn}>Add</button>
                </div>
            </div>
        </form>
    )
}

export default AddTableForm;