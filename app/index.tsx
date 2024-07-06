import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import '../styles.css';
import { Compass, Map, TowerControl, CircleArrowLeft, CircleArrowRight, Search } from 'lucide-react-native';
import { SideBar } from './components/SideBar';
// import { SideBar } from './components/SideBar';

export default function App() {
  const [open, setOpen] = useState(true)
  const [onEdit, setOnEdit] = useState(false)
  return (
    <>
      <SafeAreaView>
        <View className={'flex flex-row w-screen h-screen'}>
          {/* Sidebar section */}
          <SideBar path="home" />
          <View className='flex-row items-start'>

            {/* Description section */}
            {!open ? (
              <>
                <SafeAreaView className='h-screen w-14 bg-[#384963]'>
                  <View className='flex flex-row justify-between p-4'>
                    <TouchableOpacity onPress={() => setOpen(true)}>
                      <CircleArrowRight size={20} color={'white'} />
                    </TouchableOpacity>
                  </View>
                </SafeAreaView>
              </>
            ) :
              <>
                <SafeAreaView className='h-screen w-44 md:w-56 bg-[#384963]'>
                  <View className='flex flex-row justify-between p-4'>
                    <Text className='font-medium text-white'>Search airport</Text>
                    <TouchableOpacity onPress={() => setOpen(false)}>
                      <CircleArrowLeft size={20} color={'white'} />
                    </TouchableOpacity>
                  </View>
                  <View className='py-2 px-4'>
                    <View className={`flex-row items-center gap-1 rounded bg-white/30 p-2 w-full border-2 ${onEdit && ' border-blue-400 ring-red-500'}`}>
                      <Search size={18} color="white" />
                      <TextInput
                        placeholderTextColor="rgba(248, 250, 252, 0.7)"
                        onFocus={() => setOnEdit(true)}
                        className=" text-white placeholder-slate-50 focus:outline-none" placeholder='Write ICAO/IATA code' />
                    </View>
                  </View>
                  <View>
                    <View className='flex-row gap-1 px-4 py-2'>
                      <TouchableOpacity className='uppercase bg-orange-400 rounded-md px-4 text-sm py-1'>
                        <Text className='text-white font-medium'>
                          STD
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity className='uppercase bg-sky-600 rounded-md px-4 text-sm py-1'>
                        <Text className='text-white font-medium'>
                          APP
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </SafeAreaView>
              </>
            }

            {/* Main Section */}
            <ScrollView>
              <Text className={"text-4xl font-semibold"} >
                Dashboard Flight Report
              </Text>
            </ScrollView>
          </View >
        </View >
      </SafeAreaView >
    </>
  );
}
