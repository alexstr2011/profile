import {ProfileActionsEnum} from "./types";
import {IProfileState} from "../../../model";

export const ProfileActionCreatorsServer = {
    Update: (profile: IProfileState) => ({
        type: ProfileActionsEnum.UPDATE_ON_SERVER,
        payload: profile
    })
};