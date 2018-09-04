import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 4,
  },
  touchableView: {
    flex: 0,
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
  },
  iconImageContianer: {
    width: 30,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 3,
  },
  iconImage: {
    width: 25,
    height: 21,
  },
  titleContainer: {
    height: 28,
    backgroundColor: 'transparent',
  },
  titleText: {
    fontSize: 10,
    lineHeight: 12,
    color: '#818692',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  rippleViewContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    alignItems: 'center',
    zIndex: 3,
  },
  rippleViewAnimated: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'transparent',
  },
  buttonIOSContainer: {
    alignItems: 'flex-start',
  },
});

export default styles;
