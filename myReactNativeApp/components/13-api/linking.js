import { StyleSheet, Text, View, Button, Linking } from "react-native";
import globalStyles from "../../assets/styles/globalStyles";
import React from "react";

const MyLinking = () => {
  const openLink = async (url) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert("Warning", "I cannot be opened");
    }
  };

  return (
    <View style={globalStyles.container}>
      <Button
        title="Click to visit"
        onPress={() => openLink("https://google.com")}
      />
      <Button
        title="Click to send message"
        color="red"
        onPress={() => openLink("sms:+905333121326")}
      />
      <Button
        title="Click to send email"
        onPress={() => openLink("mailto:info@google.com")}
      />
      <Button
        title="Click to call"
        color="red"
        onPress={() => openLink("tel:+905333121326")}
      />
    </View>
  );
};

export default MyLinking;

const styles = StyleSheet.create({});
