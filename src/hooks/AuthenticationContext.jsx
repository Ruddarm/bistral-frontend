import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { getUserContext, switchContext } from "../api/auth/authApi";
import api from "../api/axiosInstance";


const AuthContext = createContext();

function AuthContextProvider({ children }) {
    // const [bistroId, setBistroId] = useState("");
    // const [branchId, setBranchId] = useState("");
    // const [roleId, setRoleId] = useState("");
    const [token, setToken] = useState(null)
    const [currentBistro, setCurrentBistro] = useState(null);
    const [currentBranch, setCurrentBranch] = useState(null)
    const [currentRole, setCurrentRole] = useState(null)

    const login = async () => {
        const data = await axios.post("http://localhost:8080/api/v1/auth/login",
            {
                userName: "firstUser@gmail.com",
                password: "pswd123"
            }
        )
        setToken(data.data.data.accessToken)
    }

    const switchUserContext = async () => {
        console.log(currentRole)
        const response = await switchContext({
            "bistroId": currentBistro.bistroId,
            "branchId": currentBranch.branchId,
            "roleId": currentRole.userRoleId
        })
        console.log(response)
    }


    const getContext = async () => {
        const data = await getUserContext()
        setBistros(data)
    }

    useEffect(() => {
        login();
    }, [])

    useEffect(() => {
        if (!token) {
            return;
        };
        api.interceptors.request.use(
            (config) => {
                config.headers.Authorization = `Bearer ${token}`;
                return config;
            },
            (error) => Promise.reject(error)
        );
        getContext();
    }, [token])

    const [bistros, setBistros] = useState([]);

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
            switchUserContext,
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

