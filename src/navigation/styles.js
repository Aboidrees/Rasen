import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent', // Make the main container transparent
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: '#D5BDAF',
    padding: 16,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  drawerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '70%', // Adjust the width of the drawer as desired
  },
});

export default styles;
