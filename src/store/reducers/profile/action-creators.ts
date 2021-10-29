import {ProfileActionsEnum} from "./types";
import {IProfileState} from "../../../model";

export const ProfileActionCreators = {
    Update: (profile: IProfileState) => ({
        type: ProfileActionsEnum.UPDATE,
        payload: profile
    })
};