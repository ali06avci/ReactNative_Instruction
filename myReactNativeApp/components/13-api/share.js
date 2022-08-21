import { StyleSheet, Text, View, Button, Share } from "react-native";
import globalStyles from "../../assets/styles/globalStyles";
import React from "react";

const MyShare = () => {
  const handleShare = async () => {
    const result = await Share.share({
      message: "Bu uygulamayı kurarsan kazanırsın! https://google.com",
    });

    if (result.action === Share.sharedAction) {
    } else if (result.action === Share.dismissedAction) {
    }
  };
  return (
    <View style={globalStyles.container}>
      <Button title="Share Me" onPress={handleShare} />
    </View>
  );
};

export default MyShare;

const styles = StyleSheet.create({});
