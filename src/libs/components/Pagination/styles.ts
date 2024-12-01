import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
    gap: 8,
  },
  pageButton: {
    width: 40,
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  activePageButton: {
    backgroundColor: '#EC6724',
  },
  pageText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  activePageText: {
    color: '#fff',
  },
  navigationButton: {
    width: 80,
    height: 40,
    borderRadius: 4,
    backgroundColor: 'transparent',
    borderColor: '#EC6724',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  navigationButtonText: {
    color: '#EC6724',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
