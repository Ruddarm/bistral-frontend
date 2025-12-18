

import CloseBar from '../ui/CloseBar';
import CloseBarTitle from '../ui/CloseBarTitle';
import OverlayContainer from '../ui/OverLayContainer';
import Style from './Zone.module.css'
import ZoneIcon from "../../assets/zones.png"
import CloseButton from '../ui/CloseButton';
import FormLabel from '../ui/formLable';
import FormInput from '../ui/formInput';
import { useForm } from 'react-hook-form';
import ErrorInput from '../ui/InputError';
import { useContext, useState } from 'react';
import LayoutTitle, { SubPara } from '../ui/Titles';
import axios from 'axios';
import { createTable, createZone } from '../../api/bistros/branchApi';
import BranchContext from '../../hooks/Bistros/BranchContext';
import AddZoneForm from '../ui/Bistros/AddZoneForm';
import AddTableForm from '../ui/Bistros/AddTableForm';
function AddZone({ closeFun, zone }) {
    const { branchId, bistroId } = useContext(BranchContext)
    const [zoneState, setZone] = useState(zone)
    const [table, setTables] = useState(zone?.tableResponses?.map((zone) => ({ ...zone, new: false })) || [])
    const handelTableCreation = async (body) => {
        try {
            const res = await createTable(branchId, { zoneId: zoneState.zoneId, count: body.tableCount, branchId: branchId });
            setTables([...res.data, ...table])
        } catch (e) {
            console.log(e)
        }
    }
    const handelZoneCreation = async (data) => {
        // console.log("here")
        // console.log(data)
        try {
            const res = await createZone(bistroId, { branchId: branchId, zoneName: data.zoneName })
            console.log(res)
            setZone(res.data)
        } catch (ex) {
            console.log(ex)
        }
    }
    return (
        <OverlayContainer>
            <div className={Style.zoneConfigContianer}>
                <CloseBar >
                    <CloseBarTitle src={ZoneIcon} title={"Zone Configurtaion"}></CloseBarTitle>
                    <CloseButton
                        onClick={closeFun}
                    ></CloseButton>
                </CloseBar>
                <div className={Style.zoneConfigZone}>
                    <AddZoneForm
                        handelZoneCreation={handelZoneCreation}
                        zone={zoneState}></AddZoneForm>
                    {zoneState && <div className={Style.zoneConfigContainer}>
                        <AddTableForm
                            handelTableCreation={handelTableCreation}
                        >

                        </AddTableForm>
                        <div style={{ padding: "1rem" }}>
                            <div className={Style.divTableBox}>
                                {table.map((table) =>
                                (
                                    <div className={`${Style.tableBlock} ${Style.newtable}`}>
                                        {table.tableNo}
                                    </div>))}
                                {table.length <= 0 && <p>Create tables</p>}
                            </div>
                        </div>
                    </div>}
                </div>
            </div>

        </OverlayContainer>
    )
}


export default AddZone;