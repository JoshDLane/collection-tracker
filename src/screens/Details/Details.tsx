import React from "react";
import { SafeAreaView } from "react-native";
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import { React$Node } from "../../utils";

const BackIcon = (props: any) => <Icon {...props} name="arrow-back" />;
interface DetailsScreenProps {
  navigation: any;
}
export default function DetailsScreen({
  navigation,
}: DetailsScreenProps): React$Node {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title="MyApp"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text category="h1">DETAILS</Text>
      </Layout>
    </SafeAreaView>
  );
}
