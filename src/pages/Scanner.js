import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import StandardButton from "../components/StandardButton";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Camera from '../components/Camera';

export function Scanner() {
  return (
    <Camera></Camera>
  );
}

