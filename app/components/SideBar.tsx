import { View, Text } from "react-native"

type Props = {}

type ItemType = {
    children: any;
}

export const SideBar = (props: Props) => {
    return (
        <View className="bg-slate-500">
            <Text className="text-white font-medium text-sm">
                Home
            </Text>
        </View>
    )
}
