import {useContext} from "react";
import MessengerContext from "../context/messenger";

export default function useMessengerContext() {
    return useContext(MessengerContext);
}