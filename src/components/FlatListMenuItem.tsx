import React from "react";
import { View, Text } from "react-native";

import { MenuItem } from "@app/interfaces/appInterfaces";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Spacer } from "./Spacer";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({ menuItem }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color="gray" size={23} />
        <Text style={styles.itemText}>{menuItem.name}</Text>
        <Spacer />
        <Icon name={"chevron-forward-outline"} color="gray" size={23} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
});
