import { Button, ScrollView, View, VStack } from "native-base";
import React from "react";
import { Dimensions } from "react-native";
import BackButton from "../../components/BackButton";
import LoginForm from "../../components/LoginForm";
import QuestionText from "../../components/QuestionText";
import RegisterForm from "../../components/RegisterForm";
import ViewHeading from "../../components/ViewHeading";
import { colors } from "../../utils/colors";

const Register = ({ navigation }) => {
  return (
    <ScrollView>
      <VStack
        h={Dimensions.get("window").height}
        bgColor={colors.notWhite}
        alignItems="center"
      >
        <BackButton onPress={() => navigation.goBack()} />
        <ViewHeading text={"Create your account"} />

        <QuestionText
          text={"Do you already have an account?"}
          btnText="Sign in"
          onPress={() => navigation.navigate("Login")}
        />
        <View h={10} />
        <RegisterForm navigation={navigation} />
      </VStack>
    </ScrollView>
  );
};

export default Register;
