import { ActivityIndicator, View } from 'react-native';

export const Loading: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ActivityIndicator size='large' color='#FF6600' />
    </View>
  );
};
