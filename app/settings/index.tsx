import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import '../../styles.css';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-4xl font-semibold" >Lalal!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
