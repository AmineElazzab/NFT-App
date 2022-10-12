import { TouchableOpacity, View, Text, Image } from 'react-native'


export const CircleButton = () => {
    return (
        <TouchableOpacity style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: COLORS.white,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            right: right,
            top: top,
            ...SHADOWS.dark,
        }}>
        </TouchableOpacity>
    )
}

export const RectButton = () => {
    return (
        <View>
            <Text>CircleButton</Text>
        </View>
    )
}

