import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import '../styles.css';
import { Compass, Map, TowerControl } from 'lucide-react-native';
import { SideBar } from './components/SideBar';
// import { SideBar } from './components/SideBar';

export default function App() {
  return (
    <>
      <SafeAreaView>
        <View className={'flex flex-row w-screen h-screen'}>
          {/* Sidebar section */}
          <SideBar path="home"/>
          <View className='flex-row items-start'>
          
            {/* Description section */}
            <View className='h-screen bg-slate-400'>
              <View className='flex flex-row justify-between p-4'>
                <Text className='font-semibold'>Search airport</Text>
              </View>
            </View>

            <Text className={"text-4xl font-semibold"} >
              Dashboard Flight Report
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
