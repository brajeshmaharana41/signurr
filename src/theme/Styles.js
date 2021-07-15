import { Dimensions, StyleSheet } from "react-native"
import { color } from "react-native-elements/dist/helpers"
import { Colors } from "react-native/Libraries/NewAppScreen"
import { SPACES, SIZES, COLORS, WINDOW_WIDTH, WINDOW_HEIGHT } from "./Theme"

const styles = StyleSheet.create({
    container: {padding: SPACES},
    flex1: {flex: 1}, flex2: {flex: 2},
    vhCenter: {alignItems: 'center', justifyContent: 'center'},
    row: {flexDirection: 'row', flexWrap: 'wrap'}, spaceBetween: {justifyContent: 'space-between'},
    bgWhite: {backgroundColor: COLORS.white},
    fullScreen: {...StyleSheet.absoluteFillObject, width: WINDOW_WIDTH, height: WINDOW_HEIGHT},
    shadow: {
        shadowColor: COLORS.black, shadowOpacity: 0.27, shadowOffset: { width: 0, height: 1},
        shadowRadius: SIZES.sm, elevation: 3, backgroundColor: COLORS.white
    },
    overlay: {position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, backgroundColor: COLORS.dark, opacity: 0.63},

    // Typogarphy
    bold: {fontWeight: 'bold'},
    whiteText: {color: COLORS.white},
    darkText: {color: COLORS.dark},
    lightText: {color: COLORS.light},
    smallText: {fontSize: SIZES.sm + 3},

    // Spaces
    mtLg: {marginTop: SIZES.lg},
    mlMd: {marginLeft: SIZES.md},

    // Header styles
    headerWrapper: {backgroundColor: COLORS.primary, height: 60, width: WINDOW_WIDTH, alignItems: 'center', flexDirection: 'row'},

    // Home Screen styles
    itemWrapper: {width: WINDOW_WIDTH, height: WINDOW_HEIGHT / 3.2, flexWrap: 'wrap'},
    itemHeader: {fontSize: SIZES.lg - 9, color: COLORS.white},
    itemDesc: {color: COLORS.white, marginHorizontal: 15, textAlign: 'center', marginVertical: 15},
    itemBtn: {backgroundColor: COLORS.white, paddingHorizontal: 25, paddingVertical: 7},
    itemBtnText: {color: COLORS.dark},
    bannerIndicators: { position: 'absolute', bottom: 20 },
    // Form styles
    input: {
        //paddingHorizontal: 15, color: COLORS.dark,
        marginBottom: 5,
        borderWidth: 0, borderColor: COLORS.white, width: WINDOW_WIDTH - 80, height: 50,
        borderRadius: SIZES.sm, shadowColor: COLORS.dark, shadowOpacity: 0.27, shadowOffset: { width: 0, height: 1},
        shadowRadius: SIZES.md, elevation: 5, backgroundColor: COLORS.white, fontFamily: 'NunitoSans-Regular'
    },
    inputViewBtn: { position: 'relative', right: 15, top: -45, elevation: 9, alignSelf: 'flex-end' },

    //Drawer
    drawerbtn: {borderColor: COLORS.light, borderWidth: 1, borderRadius: SIZES.lg, paddingVertical: SIZES.md},
    drawershadow: {
        shadowColor: COLORS.black, shadowOpacity: 0.27, shadowOffset: { width: 0, height: 1},
        shadowRadius: SIZES.sm, elevation: 3, backgroundColor: COLORS.white
    },
    drawerbutton: {width: 250, height: 60, position: 'relative', justifyContent: 'center', alignItems: 'center', left: 15, bottom: 5},
    drawerbtnPrimary: {borderWidth: 1, backgroundColor: COLORS.white, borderColor: COLORS.lightwhite },
    drawerbtnPrimaryText: {color: COLORS.dark, fontWeight: 'bold'},


    // Buttons styles
    btn: {borderColor: COLORS.light, borderWidth: 1, borderRadius: SIZES.sm, paddingVertical: SIZES.md},
    btnBlock: {width: WINDOW_WIDTH - 80},
    btnPrimary: {borderWidth: 0, backgroundColor: COLORS.primary, marginTop: 80},
    btnloginPrimary: {borderWidth: 0, backgroundColor: COLORS.primary},
    btnLogin: {width: WINDOW_WIDTH - 80, justifyContent: 'center', alignItems: 'center'},
    btnPrimaryText: {color: COLORS.white, fontWeight: 'bold'},
    link: {},
    linkText: {color: COLORS.dark, fontWeight: 'bold'},
    // Spaces
    mtSm: {marginTop: SIZES.sm}, mtMd: {marginTop: SIZES.md}, mtLg: {marginTop: SIZES.lg},
    mbSm: {marginBottom: SIZES.sm}, mbMd: {marginBottom: SIZES.md}, mbLg: {marginBottom: SIZES.lg},
    mlMd: {marginLeft: SIZES.md},
    ph20: {paddingHorizontal: 20},
    plMd: {paddingLeft: SIZES.md}, plLg: {paddingLeft: SIZES.lg},
    //splash
    splashimage: {width: WINDOW_WIDTH, height: WINDOW_HEIGHT / 1.9},
    titel: { fontSize: 25, fontWeight: 'bold', color: COLORS.primary, margin: 10},
    dec: { fontSize: 15, color:COLORS.light},
    //3rd splash
    splashsignin: {borderWidth: 0, backgroundColor: COLORS.primary, marginTop: 30},
    splashsignup: {borderWidth: 0, backgroundColor: COLORS.lightwhite, marginTop: 15},    
    //login
    loginLogo: {width: WINDOW_WIDTH, height: WINDOW_HEIGHT / 2.2,},
    loginHeading: { fontSize: SIZES.md + 5, alignSelf: 'center', margin: SIZES.md + 15, color: COLORS.dark },
    loginWrapper: { paddingHorizontal: 40 },
    fpWrap: { alignSelf: 'flex-end', marginBottom: SIZES.sm },
    loginbackgroung:{ backgroundColor: COLORS.lightwhite, width: WINDOW_WIDTH, height: WINDOW_HEIGHT - 310, borderTopLeftRadius: SIZES.xl, borderTopEndRadius: SIZES.xl, paddingTop: SIZES.sm},
    //signup
    signupLogo: {width: WINDOW_WIDTH / 1.1, height: WINDOW_HEIGHT / 2.7,},
    signupHeading: { fontSize: SIZES.md + 3, alignSelf: 'center', margin: SIZES.md, color: COLORS.dark },
    signupWrapper: { paddingHorizontal: 40 },
    signupbackgroung:{ backgroundColor: COLORS.lightwhite, width: WINDOW_WIDTH, height: WINDOW_HEIGHT - 250, borderTopLeftRadius: SIZES.xl, borderTopEndRadius: SIZES.xl, paddingTop: SIZES.sm},
    signupbtnPrimary: {borderWidth: 0, backgroundColor: COLORS.primary },
    blurAbsolute: {
        position: 'absolute',
      },
      drawerHeader: {
        width: '100%',
        height: SIZES.lg + 40,
        marginVertical: 1,
        padding: 16,
        // backgroundColor: 'yellow',
      },
      profileImage: {
        backgroundColor: Colors.light,
        width: SIZES.lg,
        height: SIZES.lg,
        bottom: 20,    
        borderRadius: SIZES.lg,
        borderWidth: SIZES.lg,
      },
      textContainer: {
          position: 'relative',
          left: 20,
          top: -55, 
          elevation: 0,
          alignSelf: 'center',
    },
    title: {  
      color: Colors.dark,
      fontSize: 20,
      flex: 3,
      bottom: 35,
      textAlign: 'left',
      paddingHorizontal: SIZES.sm +5
    },
    row_space: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    // description: {
    //   position: 'relative',
    //   color: Colors.accent,
    //   fontSize: 14,
    //   textAlign: 'center',
    //   fontWeight: 'bold',
    //   flex: 1,
    // },
    drawerSection: {
            marginTop: 15,
          },
    ////
    // drawerContent: {
    //     flex: 1,
    //   },
    //   userInfoSection: {
    //     paddingLeft: 20,
    //   },
    //   title: {
    //     marginTop: 20,
    //     fontWeight: 'bold',
    //   },
    //   caption: {
    //     fontSize: 14,
    //     lineHeight: 14,
    //   },
    //   row: {
    //     marginTop: 20,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //   },
    //   section: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     marginRight: 15,
    //   },
    //   paragraph: {
    //     fontWeight: 'bold',
    //     marginRight: 3,
    //   },
      preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
      },
      preference1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 6,
        paddingHorizontal: 16,
      },
})

export default styles