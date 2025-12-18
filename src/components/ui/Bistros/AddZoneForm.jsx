import { useForm } from "react-hook-form";
import Style from "./BranchUI.module.css"
import FormLabel from "../formLable";
import FormInput from "../formInput";
import ErrorInput from "../InputError";
// import ErrorInput from '../ui/InputError';


function AddZoneForm({ zone, handelZoneCreation }) {
    const { register, control, handleSubmit, reset, formState: { errors } } = useForm(
        { defaultValues: zone }
    );
    return (
        <form className={Style.zoneModification} onSubmit={handleSubmit(handelZoneCreation)}>
            <FormLabel labelTitle={"Zone Name"}></FormLabel>
            {errors.zoneName && <ErrorInput
                erroMsg={errors.zoneName.message}>
            </ErrorInput>}

            <div className={Style.zoneInputContainer}>
                <FormInput

                    rest={{ placeholder: "Enter Zone Name" }}
                    register={register}
                    name={"zoneName"}
                    rules={{ required: "zone Name is required" }}
                ></FormInput>
                <div className={Style.saveContainer}>
                    <button
                        className={Style.saveBtn}>Save</button>
                </div>
            </div>
        </form>
    )
}

export default AddZoneForm;