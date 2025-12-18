import { useForm } from "react-hook-form";
import Style from "./Bistro.module.css"
import CloseBar from "../ui/CloseBar";
import CloseBarTitle from "../ui/CloseBarTitle";
import CloseButton from "../ui/CloseButton";
import FormLabel from "../ui/formLable";
import LayoutTitle from "../ui/Titles";
import FormInput from "../ui/formInput";
import ErrorInput from "../ui/InputError";
import { useContext } from "react";
import BistroContext from "../../hooks/Bistros/BistroContext";

function AddBistroBranch({ }) {
    const { register, control, handleSubmit, reset, formState: { errors } } = useForm();
    // const { handelOpenBistroForm, handelBistroCreate } = useContext(BistrosContext);
    const onSubmit = (data) => {
        console.log(data)
        handelCreateBranch(data)
        reset()
    }
    const {handelCreateBranch,handelOpenCreateBranch}  = useContext(BistroContext)
    
    return (
        <div className={Style.addBranchContainer}>
            <CloseBar>
                <CloseBarTitle showIcon={false} title={"Add Branch"}>
                </CloseBarTitle>
                <CloseButton onClick={handelOpenCreateBranch}></CloseButton>
            </CloseBar>
            <div className={Style.addBranchFormContainer}>
                <form className={Style.addBranchForm} onSubmit={handleSubmit(onSubmit)}>
                    {/* <LayoutTitle title={"New Branch"}></LayoutTitle> */}
                    <FormLabel labelTitle={"Branch Name"}></FormLabel>
                    <FormInput register={register} name={"branchName"} rules={{required:"Branch Name is required"}}></FormInput>
                    {errors.branchName && <ErrorInput erroMsg={errors.branchName.message}></ErrorInput>}
                    <FormLabel labelTitle={"Loation"}>
                    </FormLabel>
                    <FormInput register={register} name={"loation"}></FormInput>
                    <button className={Style.addBrnchBtn}>
                        Add Branch
                    </button>
                </form>
            </div>  
        </div>
    )
}

export default AddBistroBranch;