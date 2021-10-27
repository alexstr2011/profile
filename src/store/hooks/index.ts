import {TypedUseSelectorHook, useSelector} from "react-redux";
import {TState} from "../index";

export const useTypedSelector: TypedUseSelectorHook<TState> = useSelector;