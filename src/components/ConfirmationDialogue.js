import { View, StyleSheet } from "react-native";
import { Button, Dialog, Portal, Text } from "react-native-paper";

function ConfirmationDialogue(props) {
  const { onClose, onConfirm, visible } = props;

  return (
    <View>
      <Portal>
        <Dialog
          visible={visible}
          onDismiss={onClose}
        >
          <Dialog.Icon icon="recycle" />
          <Dialog.Title style={styles.title}>This item does not exist!</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodySmall">Would you like to upload it?</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={onClose}>No, thank you</Button>
            <Button onPress={onConfirm}>Yes, please!</Button>
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

export default ConfirmationDialogue;
