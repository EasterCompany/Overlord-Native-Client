import { StyleSheet, Platform } from 'react-native';

const theme = StyleSheet.create({

  default: {
    color: '#ffff',
    backgroundColor: '#202029',
  },

  alt: {
    color: '#202029',
    backgroundColor: '#E5E7EB'
  },

  text: {
    color: '#ffff',
    textAlign: 'left',
    fontWeight: 300,
    margin: '2%',
    fontSize: 16
  },

  error: {
    color: '#ffff',
    textAlign: 'center',
    backgroundColor: 'red',
    width: '100%',
    padding: 6,
    maxWidth: 420,
    borderRadius: 4
  },

  loginInputContainer: {
    width: '95%',
    maxWidth: 420,
    height: 84,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#ffff'
  },

  loginInputIconContainer: {
    zIndex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 32,
    paddingTop: 12,
    backgroundColor: 'transparent'
  },

  loginInputIcon: {
    width: 24,
    height: 16,
    marginTop: 'auto',
    marginLeft: 12,
    marginBottom: 'auto',
    marginRight: 6,
    padding: 0
  },

  loginInputLabel: {
    userSelect: 'none',
    fontSize: 12,
    fontWeight: 'bold'
  },

  loginInput: {
    zIndex: 0,
    userSelect: 'none',
    color: '#202029',
    width: '100%',
    height: 84,
    fontSize: 18,
    marginTop: -32,
    paddingTop: 28,
    paddingLeft: 16,
    borderRadius: 8,
    backgroundColor: 'transparent'
  },

  hyperlink: {
    color: '#3996CF',
    width: '100%',
    textAlign: 'left',
    fontWeight: '300',
    margin: '2%',
    fontSize: 15
  },

  header: {
    color: '#ffff',
    textAlign: 'center',
    fontWeight: 'normal',
    margin: '5%',
    fontSize: 32
  },

  boldHeader: {
    color: '#ffff',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: '5%',
    fontSize: 32
  },

  /*
    --------------------------- BUTTON STYLES --------------------------------------------------------------------------
  */

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 48,
    padding: 6,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#FE8605',
    backgroundColor: '#FE8605',
  },

  buttonHover: {
    opacity: '75%'
  },

  buttonPress: {
    opacity: '25%'
  },

  buttonText: {
    userSelect: 'none',
    alignSelf: 'center',
    color: '#ffff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  ImgBtn: {
    backgroundColor: 'rgba(0,0,0,0)',
    pointerEvents: 'auto'
  },

  /*
    --------------------------- MODAL STYLES ---------------------------------------------------------------------------
  */

  modalContent: {
    alignItems: 'center',
    flexDirection: 'column',
    width: Platform.OS === 'web' ? '100%' : '100%',
    maxWidth: Platform.OS === 'web' ? 1024 : '100%',
    height: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 25,
    elevation: 5,
    borderBottomLeftRadius: Platform.OS === 'web' ? 6 : 0,
    borderBottomRightRadius: Platform.OS === 'web' ? 6 : 0,
    backgroundColor: '#E5E7EB',
    boxShadow: '1px 1px 10px rgba(0,0,0,.66)'
  },

  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Platform.OS === 'web' ? '100%' : '100%',
    maxWidth: Platform.OS === 'web' ? 1024 : '100%',
    height: 48,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: '#282C34',
    boxShadow: '1px 1px 10px rgba(0,0,0,.66)'
  },

  modalTitle: {
    color: '#ffff',
    fontSize: 22,
    marginLeft: '2.5%',
    userSelect: 'none'
  },

});


export default theme;
