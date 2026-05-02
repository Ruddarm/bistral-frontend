import { useContext, useState } from "react";
import SingleSelect from "../ui/FilterSelect";
import { FormInputOption, FormSelectInput } from "../ui/formInput";
import { LayoutTitleTwo, SubPara } from "../ui/Titles";
import Style from "./LoginContext.module.css";
import AuthContext from "../../hooks/AuthenticationContext";


function LoginContext() {
    const { bistros,
        handleRoleSelection,
        handleBranchSelection,
        handleBistroSelection,
        switchUserContext,
        currentBistro,
        currentBranch,
        currentRole
    } = useContext(AuthContext)
    return (
        <div className={Style.LoginContextContainer}>
            <div className={Style.loginFormContainer}>
                <SubPara para={"Login into"} />
                <div className={Style.loginSelect}>
                    <SingleSelect
                        value={currentBistro ? {
                            value: currentBistro.bistroId,
                            label: currentBistro.bistroName
                        } : {}}
                        onChange={handleBistroSelection}
                        isMulti={false}
                        hideSelectedOptions={false}
                        controlShouldRenderValue={false}
                        options={
                            bistros?.map((bistro) => (
                                {
                                    value: bistro.bistroId,
                                    label: bistro.bistroName,
                                    isSelected: false
                                }
                            ))
                        }
                    >
                    </SingleSelect>
                </div>
            </div>
            <div className={Style.loginFormContainer}>
                <SubPara para={"And Branch"} />
                <div className={Style.loginSelect}>
                    <SingleSelect
                        value={currentBranch ? {
                            value: currentBranch.branchId,
                            label: currentBranch.branchName
                        } : {}}
                        isMulti={false}
                        onChange={handleBranchSelection}
                        hideSelectedOptions={false}
                        controlShouldRenderValue={false}
                        options={
                            currentBistro?.branches?.map((branch) => (
                                {
                                    value: branch.branchId,
                                    label: branch.branchName
                                }
                            ))
                        }
                    >
                    </SingleSelect>
                </div>
            </div>
            <div className={Style.loginFormContainer}>
                <SubPara para={"As role"} />
                <div className={Style.loginSelect}>
                    <SingleSelect
                        value={currentRole ? {
                            value: currentRole.roleId,
                            label: currentRole.roleName
                        } : {}}
                        onChange={handleRoleSelection}
                        isMulti={false}
                        hideSelectedOptions={false}
                        controlShouldRenderValue={false}
                        options={
                            currentBranch?.roles?.map((role) => (
                                {
                                    label: role.roleName,
                                    value: role.roleId
                                }
                            ))
                        }
                    >
                    </SingleSelect>
                </div>
            </div>
            <div className={Style.loginBtnDiv}>
                <button onClick={switchUserContext} className={Style.loginBtn}>
                    Login
                </button>
            </div>
        </div>
    )
}

export default LoginContext;