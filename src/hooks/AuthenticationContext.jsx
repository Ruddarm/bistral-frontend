import { createContext, useState } from "react";


const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [bistroId, setBistroId] = useState("");
    const [branchId, setBranchId] = useState("");
    const [roleId, setRoleId] = useState("");
    const [currentBistro, setCurrentBistro] = useState(null);
    const [currentBranch, setCurrentBranch] = useState(null)
    const [currentRole, setCurrentRole] = useState(null)
    const [bistros, setBistros] = useState([{
        bistroName: "dine", bistroId: 123,
        branches: [
            {
                branchName: "dine-seawood",
                branchId: 234,
                roles: [
                    {
                        roleName: "Manager",
                        roleId: 234
                    },
                    {
                        roleName: "Cashier",
                        roleId: 3423
                    }
                ]

            },
        ]
    },
    {
        bistroName: "mono-kharghar", bistroId: 124,
        branches: [
            {
                branchName: "mono-seawood",
                branchId: 234,
                roles: [
                    {
                        roleName: "Manager",
                        roleId: 234
                    },
                    {
                        roleName: "Cashier",
                        roleId: 3423
                    }
                ]

            },
        ]
    }
    ])

    const handleBistroSelection = (bistro) => {
        const selectedBistro = bistros.find(b => b.bistroId === bistro.value)
        setCurrentBistro(selectedBistro)
        setCurrentBranch(null)
        setCurrentRole(null)
    }
    const handleBranchSelection = (branch) => {
        const selectedBranch = currentBistro.branches.find(b => b.branchId === branch.value)
        setCurrentBranch(selectedBranch);
        setCurrentRole(null)
    }

    const handleRoleSelection = (role) => {
        const selectedRole = currentBranch.roles.find(r => r.roleId == role.value)
        setCurrentRole(selectedRole)
    }

    return <AuthContext
        value={{
            bistros,
            handleBistroSelection,
            handleBranchSelection,
            handleRoleSelection,
            currentBistro,
            currentBranch,
            currentRole,
        }}
    >
        {children}
    </AuthContext>


}

export default AuthContext;
export { AuthContextProvider }

