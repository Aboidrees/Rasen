import {StyleSheet} from 'react-native';

const categoryBtnTxt = {
  color: '#252B5C',
  textAlign: 'center',
  fontFamily: 'Montserrat',
  fontSize: 12,
  fontWeight: '600',
  lineHeight: 13,
};

const categoryBtn = {
  display: 'flex',
  backgroundColor: 'transparent',
  paddingVertical: 10,
  paddingHorizontal: 22,
  alignItems: 'flex-start',
  gap: 10,
  borderRadius: 26,
};

const styles = StyleSheet.create({
  categoryBtnsOuterContainer: {
    flexGrow: 1,
    marginBottom: 25,
    marginHorizontal: 4,
    borderRadius: 15,
    gap: 10,
  },
  categoryBtnsInnerContainer: {
    alignItems: 'flex-start',
  },
  categoryBtn: categoryBtn,
  categoryBtnSelected: {...categoryBtn, backgroundColor: '#000'},
  categoryBtnTxt: categoryBtnTxt,
  categoryBtnTxtSelected: {...categoryBtnTxt, color: '#FFF'},
});

export default styles;
