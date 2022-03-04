import React from "react";
import { SafeAreaView, View } from "react-native";
import { Button, Divider, Layout, TopNavigation } from "@ui-kitten/components";
import { React$Node } from "../../utils";

// interface HomesScreenProps {
//   navigation: any;
// }

export default function HomeScreen(): React$Node {
  // const navigateDetails = () => {
  //   navigation.navigate("Details");
  // };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Button onPress={() => {}}>EXAMPLE</Button>
      </View>
      {/* <TopNavigation title='MyApp' alignment='center'/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
      </Layout> */}
    </SafeAreaView>
  );
}
