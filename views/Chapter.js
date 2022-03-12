import { FlatList, View } from "native-base";
import React, { useRef } from "react";
import { Animated } from "react-native";
import { ScalingDot } from "react-native-animated-pagination-dots";
import Page from "../components/Page";
import { colors } from "../utils/colors";

const Chapter = () => {
  const data = [{ key: "1" }, { key: "2" }, { key: "3" }];
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View flex={1} alignItems="center" mt={"8%"}>
      <FlatList
        h={"100%"}
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={(item) => <Page key={item.key} />}
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
        data={data}
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
