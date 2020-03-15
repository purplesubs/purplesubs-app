// Color palette
import {Dimensions, Platform, PixelRatio, StyleSheet, Keyboard} from 'react-native';

// Color palette

export const colors = {
    clean: "#ffffff",
    secondarylighten1: "#333337",
    secondarylighten3: "#72727c",
    secondarylighten4: "#93939c",
    secondarylighten5: "#b3b3bb",
    secondarylighten6: "#e6e6ed",
    secondarylighten7: "#f3f3f7",
    secondarylighten8: "#f7f7fa",
    secondarylighten350: "rgba(114, 114, 124, 0.5)",
    secondarylighten150: "rgba(51, 51, 50, 0.5)",
    secondarylighten4RGB: [147,147,156,1],
    primary40: "rgba(120, 89, 171, 0.4)",
    primary: "#7859ab",
    primarydarken1: "#522a92",
    primaryRGB: [120,89,171,1],
    warming: "#e56901",
    transparent: 'transparent',
    cleanRGB: [255, 255, 255 ,1],
    advantagebar: "#7de501",
    success: "#64b700",
    whatsappbrandcolor: "#25d366",
    highlight: "#f5267a",
};

// Text styles

export const textStyles = StyleSheet.create({
    requiredSymbol: {
        fontFamily: "Lato",
        fontSize: 12,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 2,
        textAlign: "left",
        color: colors.primary
    },
    linkTextCenter: {
        fontFamily: "Raleway",
        fontSize: 12,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 2,
        textAlign: "center",
        color: colors.primary
    },
    validationError: {
        fontFamily: "Raleway",
        fontSize: 10,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 12,
        letterSpacing: 2,
        textAlign: "right",
        color: colors.warming
    },
    regularText: {
        fontFamily: "Lato",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "left",
        color: colors.secondarylighten3
    },
    mainTitle: {
        fontFamily: "Raleway",
        fontSize: 30,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 36,
        letterSpacing: 0,
        textAlign: "left",
        color: colors.secondarylighten1
    },
    listSimpleItem: {
        fontFamily: "Lato",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 0,
        textAlign: "left",
        color: colors.secondarylighten1
    },
    label: {
        fontFamily: "Raleway",
        fontSize: 12,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 2,
        textAlign: "left",
        color: colors.secondarylighten4
    },
    inputTextEnabled: {
        fontFamily: "Lato",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "left",
        color: colors.secondarylighten1
    },
    titleScreen: {
        fontFamily: "Raleway",
        fontSize: 12,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 2,
        textAlign: "center",
        color: colors.secondarylighten1
    },
    menuSelected: {
        fontFamily: "Raleway",
        fontSize: 9,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 10,
        letterSpacing: 0.5,
        textAlign: "center",
        color: colors.secondarylighten1
    },
    menuRegular: {
        fontFamily: "Raleway",
        fontSize: 9,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 10,
        letterSpacing: 0.5,
        textAlign: "center",
        color: colors.secondarylighten3
    },
    tabSelected: {
        fontFamily: "Raleway",
        fontSize: 12,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 1.5,
        textAlign: "center",
        color: colors.secondarylighten1
    },
    tabRegular: {
        fontFamily: "Raleway",
        fontSize: 10,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 1.5,
        textAlign: "center",
    },
    headerListItem: {
        fontFamily: "Raleway",
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 2,
        textAlign: "left",
        color: colors.secondarylighten1
    },
    textDescription: {
        fontFamily: "Lato",
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0,
        textAlign: "left",
        color: colors.secondarylighten3
    },
    statusLabel: {
        fontFamily: "Raleway",
        fontSize: 10,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 10,
        letterSpacing: 1,
        textAlign: "left",
        color: colors.secondarylighten5
    },
    headerAction: {
        fontFamily: "Raleway",
        fontSize: 12,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 2,
        textAlign: "right",
        color: colors.secondarylighten3
    },
    subHeader: {
        fontFamily: "Lato",
        fontSize: 12,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 1.5,
        textAlign: "left",
        color: colors.secondarylighten3
    },
    statusName: {
        fontFamily: "Raleway",
        fontSize: 12,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 1.5,
        textAlign: "left",
        color: colors.secondarylighten5
    },
    statusNameCurrent: {
        fontFamily: "Raleway",
        fontSize: 15,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 17,
        letterSpacing: 2,
        textAlign: "left",
        color: colors.secondarylighten1
    },
    textStatus: {
        fontFamily: "Lato",
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 18,
        letterSpacing: 0,
        textAlign: "left",
        color: colors.secondarylighten3
    },
    headerListFinance: {
        fontFamily: "Raleway",
        fontSize: 12,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 2,
        textAlign: "left",
        color: colors.secondarylighten1
    },
    buttonSolidText: {
        fontFamily: "Raleway",
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 2,
        textAlign: "center",
        color: colors.clean
    },
    percentajeStatus: {
        fontFamily: "Lato",
        fontSize: 40,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 48,
        letterSpacing: 0,
        textAlign: "left",
        color: colors.secondarylighten1
    },
    searchPlaceholder: {
        fontFamily: "Lato",
        fontSize: 20,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "left",
        color: colors.secondarylighten5
    },
    buttonOutlineText: {
        fontFamily: "Raleway",
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 2,
        textAlign: "center",
        color: colors.primary
    },
    buttonOutlineDisabledText: {
        fontFamily: "Raleway",
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 2,
        textAlign: "center",
        color: colors.primary40
    },
    searchText: {
        fontFamily: "Lato",
        fontSize: 20,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "left",
        color: colors.secondarylighten1
    },
    monthCalc: {
        fontFamily: "Lato",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "center",
        color: colors.secondarylighten3
    },
    badgeNumber: {
        fontFamily: "Lato",
        fontSize: 11,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 11,
        letterSpacing: 0,
        textAlign: "center",
        color: colors.clean
    },
    mainTitleCenter: {
        fontFamily: "Raleway",
        fontSize: 30,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 36,
        letterSpacing: 0,
        textAlign: "center",
        color: colors.secondarylighten1
    },
    inputNumberEnabled: {
        fontFamily: "Lato",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "right",
        color: colors.secondarylighten1
    },
    monthCalcSelected: {
        fontFamily: "Lato",
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "center",
        color: colors.secondarylighten1
    },
    numberCalculator: {
        fontFamily: "Lato",
        fontSize: 20,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "right",
        color: colors.secondarylighten1
    },
    inputTextDisabled: {
        fontFamily: "Lato",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "left",
        color: colors.secondarylighten4
    },
    numberCalculatorDisabled: {
        fontFamily: "Lato",
        fontSize: 20,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "right",
        color: colors.secondarylighten3
    },
    headerSection: {
        fontFamily: "Raleway",
        fontSize: 13,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 2,
        textAlign: "left",
        color: colors.secondarylighten1
    },
    validationTooltip: {
        fontFamily: "Raleway",
        fontSize: 10,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 12,
        letterSpacing: 2,
        textAlign: "right",
        color: colors.secondarylighten4
    },
    timeAgoChat: {
        fontFamily: "Lato",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0,
        textAlign: "left",
        color: colors.secondarylighten4
    },
    inputNumberDisabled: {
        fontFamily: "Lato",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "right",
        color: colors.secondarylighten4
    },
    linkText: {
        fontFamily: "Raleway",
        fontSize: 12,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 2,
        textAlign: "left",
        color: colors.primary
    },
    disclaimerTextCenter: {
        fontFamily: "Lato",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0,
        textAlign: "center",
        color: colors.secondarylighten4
    },
    informationText: {
        fontFamily: "Raleway",
        fontSize: 12,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 1,
        textAlign: "center",
        color: colors.clean
    },
    buttonSmallEnabled: {
        fontFamily: "Raleway",
        fontSize: 8,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 1,
        textAlign: "center",
        color: colors.primary
    },
    inputNumberEnabledCenter: {
        fontFamily: "Lato",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "center",
        color: colors.secondarylighten1
    },
    inputNumberDisabledCenter: {
        fontFamily: "Lato",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "center",
        color: colors.secondarylighten4
    },
    subHeaderCenter: {
        fontFamily: "Lato",
        fontSize: 12,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 1.5,
        textAlign: "center",
        color: colors.secondarylighten3
    },
    timeAgo: {
        fontFamily: "Lato",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: colors.secondarylighten4
    },
    disclaimerText: {
        fontFamily: "Lato",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0,
        color: colors.secondarylighten3
    },
    buttonSmallText: {
        fontFamily: "Raleway",
        fontSize: 12,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: colors.secondarylighten3
    },
    buttonSmallTextIssue: {
        fontFamily: "Raleway",
        fontSize: 12,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: colors.highlight
    },
    quoteNumber: {
        fontFamily: "Lato",
        fontSize: 32,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: colors.secondarylighten1
    },
    labelCenter: {
        fontFamily: "Raleway",
        fontSize: 12,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 2,
        color: colors.secondarylighten4
    },
    buttonOutlineCancel: {
        fontFamily: "Raleway",
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 2,
        color: colors.secondarylighten4
    },
    imagePickerLabel: {
        fontFamily: "Raleway",
        fontSize: 10,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 12,
        letterSpacing: 0.5,
        textAlign: "center",
        color: colors.primary
    },
    headerSectionModal: {
        fontFamily: "Raleway",
        fontSize: 12,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 2,
        color: colors.secondarylighten8
    },
    titleText: {
        fontFamily: 'Lato',
        fontSize: 32,
        lineHeight: 32,
        color: colors.primary
    },
    buttonSmallTextLink: {
        fontFamily: "Raleway",
        fontSize: 12,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 2,
        textAlign: "center",
        color: colors.clean
    },
    mainTitleOnboarding: {
        fontFamily: "Raleway",
        fontSize: 24,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 32,
        letterSpacing: 0,
        textAlign: "left",
        color: colors.secondarylighten1
    },
});

export const display = {
    WINDOW_WIDTH: Dimensions.get('window').width,
    MARGIN_EXTRA_LARGE: 40,
    MARGIN_LARGE: 30,
    MARGIN_MEDIUM: 25,
    MARGIN_DEFAULT: 20,
    MARGIN_INPUTS: 15,
    MARGIN_SMALL: 10,
    MARGIN_EXTRA_SMALL: 5,
    MARGIN_IMAGE_PICKER: 12,
    STATUS_BAR_HEIGHT: Platform.OS === 'ios' ? 24 : 0,
    NAV_BAR_PADDING: 	{...Platform.select({
            ios: {
                paddingTop: 65
            },
            android: {
                paddingTop: 45
            }
        })},
    NO_NAV_BAR_PADDING: 	{...Platform.select({
            ios: {
                paddingTop: 20
            },
            android: {
                paddingTop: 0
            }
        })}
};