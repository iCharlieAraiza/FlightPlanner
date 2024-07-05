import { Compass, TowerControl, Map } from "lucide-react-native";
import { View, Text, TouchableOpacity } from "react-native"

type Props = {
    path: string;
}

type ItemType = {
    children: any;
}

export const SideBar = (props: Props) => {
    const { path } = props;
    return (
        <View className={"bg-[#102C57] pt-2"}>
            <MenuItem active={path == 'home'}>
                <TowerControl size={20} color={'white'} />
                <Text className={"text-white font-medium text-[11px] text-center"}>
                    Airport
                </Text>
            </MenuItem>
            <MenuItem active={path == 'planner'}>
                <Compass size={20} color={'white'} />
                <Text className={"text-white font-medium text-[11px] text-center"}>
                    Planner
                </Text>
            </MenuItem>
            <MenuItem active={path == 'map'}>
                <Map size={20} color={'white'} />
                <Text className={"text-white font-medium text-[11px] text-center"}>
                    Map
                </Text>
            </MenuItem>
        </View>
    )
}


const MenuItem = ({ children, active }: { children: any, active?: boolean }) => {
    return (
        <TouchableOpacity
            className={`flex items-center p-2 gap-1 hover:bg-slate-500/10 ${active && 'bg-[#0a1d39]'}`}>
            {children}
        </TouchableOpacity
        >
    )
} 