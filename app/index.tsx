import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import '../styles.css';
import { Compass, Map } from 'lucide-react-native';
// import { SideBar } from './components/SideBar';

export default function App() {
  return (
    <>
      <SafeAreaView>
        <View className={'flex flex-row w-screen h-screen'}>
          <View className={"bg-slate-500 h-screen"}>
            <MenuItem>
              <Compass size={30} color={'white'} />
              <Text className={"text-white font-medium text-sm text-center"}>
                Planner
              </Text>
            </MenuItem>
            <MenuItem>
              <Map size={30} color={'white'} />
              <Text className={"text-white font-medium text-sm text-center"}>
                Map
              </Text>
            </MenuItem>
          </View>
          <View>
            <Text className={"text-4xl font-semibold"} >
              Dashboard Flight Report
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}


const MenuItem = ({children}) => {
  return (
    <View className='flex items-center'>
      {children}
    </View>
  )
} 