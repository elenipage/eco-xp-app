import { View, StyleSheet } from "react-native";
import { Button, Dialog, Portal, Text } from "react-native-paper";
import { useXp } from "../context/Xp-context";
import { useNavigation } from "@react-navigation/native";

function ItemAddedConfirmation(props) {
    const {visible, setConfirmVisible } = props;
    const navigation = useNavigation();


  return (
    <View>
      <Portal>
        <Dialog
          visible={visible}
        >
          <Dialog.Icon icon="check-outline" />
          <Dialog.Title style={styles.title}>Item Added!</Dialog.Title>
          <Dialog.Content>
            <Text>Would you like to scan another?</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={()=>{
                setConfirmVisible(false)
                navigation.navigate('Main')
            }}>Go Home</Button>
            <Button onPress={()=>{
                setConfirmVisible(false)
                navigation.navigate('Scanner')
            }}>Scan another item</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
  },
});

export default ItemAddedConfirmation;
