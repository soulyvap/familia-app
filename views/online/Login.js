import { ScrollView, View, VStack } from "native-base";
import React from "react";
import { Dimensions } from "react-native";
import BackButton from "../../components/BackButton";
import LoginForm from "../../components/LoginForm";
import QuestionText from "../../components/QuestionText";
import ViewHeading from "../../components/ViewHeading";
import { colors } from "../../utils/colors";

const Login = ({ navigation }) => {
  return (
    <ScrollView flex={1}>
      <VStack h={Dimensions.get("window").height} bgColor={colors.notWhite}>
        <BackButton onPress={() => navigation.goBack()} />
        <ViewHeading text={"Login"} />
        <View h={10} />
        <LoginForm navigation={navigation} />
        <VStack
          flex={1}
          alignItems="center"
          justifyContent={"flex-end"}
          pb={"8%"}
        >
          <QuestionText
            text={"No account?"}
            btnText="Sign up"
            onPress={() => navigation.navigate("Register")}
          />
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default Login;
