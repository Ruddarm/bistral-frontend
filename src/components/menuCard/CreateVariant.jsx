

import { useForm } from "react-hook-form";
import CloseBar from "../ui/CloseBar";
import CloseBarTitle from "../ui/CloseBarTitle";
import CloseButton from "../ui/CloseButton.jsx";
import FormInput, { FormSelectInput } from "../ui/formInput.jsx";
import FormLabel from "../ui/formLable.jsx";
import Style from "./MenuItemCurd.module.css"
import ErrorInput from "../ui/InputError.jsx";

function CreateVariant({ variant , closeFun }) {
    console.log(variant.price)
    const { register, control, handleSubmit, reset, formState: { errors } } = useForm(
        {
            defaultValues: {
                variantName: variant.variantName,
                price: variant.price,
                qty: variant.qty,
                unit: variant.unit
            }
        }
    );

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className={Style.createVariantContainer}>
            <CloseBar>
                <CloseBarTitle showIcon={false} title={"Add Variant"}></CloseBarTitle>
                <CloseButton onClick={closeFun}></CloseButton>
            </CloseBar>
            <form onSubmit={handleSubmit(onSubmit)} className={Style.variantFormContainer}>
                <FormLabel labelTitle={"Variant Name"}></FormLabel>
                <FormInput register={register}
                    name={"variantName"}
                    rules={{ required: "variant name is required" }}
                />
                {errors.variantName && <ErrorInput erroMsg={errors.variantName.message}></ErrorInput>}
                <FormLabel labelTitle={"Price"}></FormLabel>
                <FormInput
                    register={register}
                    rest={{ type: "number" }}
                    name={"price"}
                    rules={{ required: "Price is required", valueAsNumber: true }}
                />
                {errors.price && <ErrorInput erroMsg={errors.price.message}></ErrorInput>}

                <div className={Style.priceQtyDivContainer}>
                    <div style={{ paddingRight: "1rem", display: "flex", flexDirection: "column", flex: 1 }}>
                        <FormLabel labelTitle={"Qty"}></FormLabel>
                        <FormInput
                            rest={{ type: "number" }}
                            register={register}
                            name={"qty"}
                            rules={{ required: "Qty is required", valueAsNumber: true }}
                        />
                        {errors.qty && <ErrorInput erroMsg={errors.qty.message}></ErrorInput>}

                    </div>
                    <div style={{ paddingLeft: "1rem", display: "flex", flexDirection: "column", flex: 1 }}>

                        <FormLabel labelTitle={"Unit"}></FormLabel>
                        <FormSelectInput
                            register={register}
                            name={"unit"}
                            rules={{ required: "Select Unit" }}
                        >
                            <option value="G">G</option>
                            <option value="ML">ML</option>
                            <option value="KG">KG</option>
                            <option value="PIECE">PIECE</option>
                        </FormSelectInput>
                        {errors.unit && <ErrorInput erroMsg={errors.unit.message}></ErrorInput>}

                    </div>
                </div>
                <button className={Style.createVariantBtn}>
                    Add Variant
                </button>

            </form>
        </div>
    )
}

export default CreateVariant;