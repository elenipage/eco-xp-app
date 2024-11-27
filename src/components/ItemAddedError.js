import { View, StyleSheet } from "react-native";
import { Button, Dialog, Portal, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

function ItemAddedError(props) {
    const {errorVisible, setErrorVisible } = props;
    const navigation = useNavigation();


  return (
    <View>
      <Portal>
        <Dialog
          visible={errorVisible}
          style={{backgroundColor:"white"}}
        >
          <Dialog.Icon icon="close-circle" color="red" size={75} />
          <Dialog.Title style={styles.title}>Error!</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodySmall">There has been an error adding your item, please try again later</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={()=>{
                setErrorVisible(false)
                navigation.navigate('Main')
            }}>Homepage</Button>
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

export default ItemAddedError;
