import { Dimensions, Platform } from "react-native";

import { RFValue } from "react-native-responsive-fontsize";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

export const isIos = Platform.OS === "ios";

export const hp = (val: number) => heightPercentageToDP(val);
export const wp = (val: number) => widthPercentageToDP(val);

export const fontSize = (val: number) => RFValue(val, 812);

export const { height, width } = Dimensions.get("window");

export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?\/~]).{8,}$/;