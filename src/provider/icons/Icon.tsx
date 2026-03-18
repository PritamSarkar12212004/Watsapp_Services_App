import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons'
const Icon = ({ name, size, color }: {
    name: any;
    size: number;
    color: string
}) => {
    return (
        <MaterialDesignIcons name={name} size={size} color={color} />
    )
}
export default Icon