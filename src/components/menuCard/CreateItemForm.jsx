import { useContext } from "react";
import VariantDeleteButton from "../ui/menuCard/VariantDeleteButton";
import Style from "./MenuItemCurd.module.css"
import { useForm, useFieldArray } from "react-hook-form"
import { MenuCardContext } from "../../hooks/menu/useMenuCard";
import FormLable from "../ui/formLable";
import FormInput, { FormInputOption, FormSelectInput } from "../ui/formInput";
function CreateItemForm() {
    const { categories, handelCreateMenuItem } = useContext(MenuCardContext)
    // console.log(categories)
    const { register, control, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            variants: [
                { variantName: "", price: "", qty: "", unit: "" }
            ]
        }
    });

    // FIELD ARRAY
    const { fields, append, remove } = useFieldArray({
        control,
        name: "variants"
    });

    const onSubmit = (data) => {
        // console.log("FINAL DATA:", data);
        const menuItem = {
            itemName: data.itemName,
            isVeg: data.isVeg,
            categoryId: data.category,
            menuItemVariantRequests: data.variants
        }
        const handelCreate = async () => {
            if (await handelCreateMenuItem(menuItem)) return true;
            return false

        };
        let res = handelCreate();
        if (res) reset()
        // reset();
    };
    // console.log(register)

    return (
        <div className={Style.formContainer}>
            <form className={Style.form} onSubmit={handleSubmit(onSubmit)}>
                {/* <label className={Style.formLable}>Item Name</label> */}
                <FormLable labelTitle={"Item Name"}></FormLable>
                {/* <input
                    className={Style.formInput}
                    {...register("itemName", { required: "Name is required" })}
                /> */}
                <FormInput register={register} name={"itemName"} rules={{ required: "Item Name is Required" }} />
                {errors.itemName && <span className={Style.errorBlock}>{errors.itemName.message}</span>}
                <FormLable labelTitle={"Select Category"}> </FormLable>
                {/* <select
                    {...register("category", { required: "Category required" })}
                    className={Style.formInput}
                >
                    {categories ? categories.map(category => (<> <option value={category.categoryId}>{category.categoryName}</option></>)) : <></>}
                </select> */}
                <FormSelectInput
                    register={register}
                    name={"category"}
                    rules={{ required: "Select Category" }}
                >
                    {categories ? categories.map(category => (<>
                        <FormInputOption
                            value={category.categoryId}
                            name={category.categoryName}
                        ></FormInputOption>
                    </>)) : <></>}
                </FormSelectInput>
                {errors.category && <span className={Style.errorBlock}>{errors.category.message}</span>}
             
                <FormLable labelTitle={"Item Description"}></FormLable>
                <textarea
                    className={Style.formInput}

                    {...register("itemDescription")}
                />
                <div className={Style.checkBoxContainer}>
                    {/* <label className={Style.formLable}>Is Veg</label> */}
                    <FormLable labelTitle={"Is Veg"}></FormLable>
                    <input
                        type="checkbox"
                        className={Style.checkBox}
                        {...register("isVeg", { value: false })}
                    />
                    {errors.isVeg && <span className={Style.errorBlock}>{errors.isVeg.message}</span>}
                </div>

                <div className={Style.variantSection}>
                    <div className={Style.variantSectionHeading}>
                        <label style={{ fontSize: "1.25rem", fontWeight: "400" }} className={Style.formLable}>Variants</label>

                        <button
                            className={Style.addVariantBtn}
                            type="button"
                            onClick={() => append({ variantName: "", price: "", qty: "", unit: "" })}
                        >

                            Add Variant
                        </button>
                    </div>
                    {fields.map((field, index) => (
                        <div key={field.id} className={Style.variantRow}>
                            <div className={`${Style.variantNameInputContainer}`}>
                                {/* <input
                                    placeholder="Variant Name"
                                    className={`${Style.formInput} ${Style.variantNameInput}`}
                                    {...register(`variants.${index}.variantName`, { required: "Varaint Name is required" })}
                                /> */}
                                <FormInput
                                    rest={{ placeholder: "Varaint Name" }}
                                    register={register}
                                    name={`variants.${index}.variantName`}
                                    rules={{ required: "Varaint Name is required" }}
                                />
                                {errors.variants?.[index]?.variantName && (
                                    <span className={Style.errorBlock}>
                                        {errors.variants[index].variantName.message}
                                    </span>
                                )}
                            </div>
                            <div className={`${Style.variantPriceQtyInputContainer}`}>

                                <div className={Style.variantPriceInnerDiv}>
                                    {/* <input
                                        type="number"
                                        placeholder="Price"
                                        className={Style.formInput}
                                        {...register(`variants.${index}.price`, { required: true, valueAsNumber: true })}

                                    /> */}
                                    <FormInput
                                        rest={{ placeholder: "Price" }}
                                        register={register}
                                        name={`variants.${index}.price`}
                                        rules={{ required: "price", valueAsNumber: true }}
                                    />
                                    {errors.variants?.[index]?.price && (
                                        <span className={Style.errorBlock}>
                                            {errors.variants[index].price.message}
                                        </span>
                                    )}
                                </div>
                                <div className={Style.variantPriceInnerDiv}>
                                    {/* <input
                                        type="number"
                                        placeholder="Qty"
                                        className={Style.formInput}
                                        {...register(`variants.${index}.qty`, { required: true, valueAsNumber: true })}
                                    /> */}
                                    <FormInput
                                        rest={{ placeholder: "Qty" }}
                                        register={register}
                                        name={`variants.${index}.qty`}
                                        rules={{ required: "qty", valueAsNumber: true }}
                                    />
                                    {errors.variants?.[index]?.qty && (
                                        <span className={Style.errorBlock}>
                                            {errors.variants[index].qty.message}
                                        </span>
                                    )}
                                </div>
                                <div className={Style.variantPriceInnerDiv}>
                                    {/* <select
                                        {...register(`variants.${index}.unit`, { required: "select unit" })}
                                        className={Style.formInput}
                                        style={{ width: "100%" }}
                                    >
                                        
                                    </select> */}
                                    <FormSelectInput
                                        register={register}
                                        name={`variants.${index}.unit`}
                                        rules={{ required: "Select Unit" }}

                                    >
                                        <>
                                            <option value="G">G</option>
                                            <option value="ML">ML</option>
                                            <option value="ML">L</option>
                                            <option value="KG">KG</option>
                                            <option value="PIECE">PIECE</option>
                                        </>
                                    </FormSelectInput>

                                    {errors.variants?.[index]?.unit && (
                                        <span className={Style.errorBlock}>
                                            {errors.variants[index].unit.message}
                                        </span>
                                    )}

                                </div>
                                <div className={Style.variantPriceInnerDiv}>
                                    <VariantDeleteButton onclickFun={() => { remove(index) }}></VariantDeleteButton>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                <button className={Style.createItemBtn} type="submit">Add Item</button>
            </form>
        </div>
    );

}

export default CreateItemForm;