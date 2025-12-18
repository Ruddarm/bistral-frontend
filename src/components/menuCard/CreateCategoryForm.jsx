import { useForm } from "react-hook-form";
import Style from "./MenuItemCurd.module.css"
import FormInput from "../ui/formInput";
import CreateBtn from "../ui/CreateButton";
import ErrorInput from "../ui/InputError";

function CreateCategoryForm({handleCreateCategory}) {

    const { register, control, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log("called",data)
        handleCreateCategory(data)
    }
    return (
        <form className={Style.categoryForm} onSubmit={handleSubmit(onSubmit)}>
            <div style={{flex:1}}>
                <FormInput
                    register={register}
                    rest={{ placeholder: "Enter Category Name" }}
                    name={"categoryName"}
                    rules={{ required: "Enter Category Name" }}
                />
                {errors.categoryName && <ErrorInput erroMsg={errors.categoryName.message}></ErrorInput>}
            </div>
            <button className={Style.createCategoryFormBtn}>Add</button>
        </form>
    )
}

export default CreateCategoryForm;