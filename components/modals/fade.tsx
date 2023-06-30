// Library
import {
  Modal,
  View,
  ScrollView,
  Text,
  Dimensions,
  Platform,
  KeyboardAvoidingView
} from 'react-native';
// Assets
import closeImg from '../../assets/images/close.png';
// Components
import ImgBtn from '../buttons/img';
// Styles
import theme from '../../App.style';


const FadeModal = ({ title, visible, style, onClose, children }) => {
  const screen = Dimensions.get('screen');
  const window = Dimensions.get('window');
  return <Modal
  animationType="fade"
  transparent={true}
  visible={visible}
  onRequestClose={onClose}
  >
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        top:
          Platform.OS === 'web' ? screen.height * 0.1 :
          Platform.OS === 'ios' ? 22 : 0,
        height:
          Platform.OS === 'web' ? '70%' : '100%'
      }}
    >
      <View style={theme.modalHeader}>
        <Text style={theme.modalTitle}>
          {title}
        </Text>
        <ImgBtn
          style={{ width: 64, height: 32, paddingLeft: 16 }}
          onPress={onClose}
          width={32}
          height={32}
          image={closeImg}
        />
      </View>
      <ScrollView
        style={{
          width: '100%',
        }}
        contentContainerStyle={[
          theme.modalContent,
          {
            height: Platform.OS === 'web' ? '100%' : undefined,
            minHeight:
              Platform.OS === 'web' ? '70%' :
              Platform.OS === 'ios' ? window.height - 74 : '100%'
          },
          style
        ]}
      >{children}</ScrollView>
    </KeyboardAvoidingView>
  </Modal>;
}


export default FadeModal;
