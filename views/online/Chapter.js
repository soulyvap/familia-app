import { FlatList, View } from "native-base";
import React, { useRef } from "react";
import { Animated } from "react-native";
import { ScalingDot } from "react-native-animated-pagination-dots";
import { colors } from "../../utils/colors";
import Page from "../../components/Page";
import BackButton from "../../components/BackButton";

const Chapter = ({ route, navigation }) => {
  const chapter = route.params.chapter;
  console.log(chapter);
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View flex={1} alignItems="center" pt={"8%"}>
      <BackButton onPress={() => navigation.goBack()} />
      <FlatList
        h={"100%"}
        data={chapter}
        keyExtractor={(item, index) => item + index}
        renderItem={(section) => <Page section={section} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        decelerationRate={"normal"}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
      />
      <ScalingDot
        data={chapter}
        scrollX={scrollX}
        activeDotColor={colors.fuksi}
        inActiveDotColor={"grey"}
        activeDotScale={1.2}
        containerStyle={{ marginBottom: 10 }}
      />
    </View>
  );
};

export default Chapter;
