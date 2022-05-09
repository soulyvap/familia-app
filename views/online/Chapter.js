import { FlatList, Icon, View } from "native-base";
import React, { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import { ScalingDot } from "react-native-animated-pagination-dots";
import { colors } from "../../utils/colors";
import Page from "../../components/Page";
import BackButton from "../../components/BackButton";
import UtilButton from "../../components/UtilButton";
import { FontAwesome } from "@expo/vector-icons";
import useProgress from "../../utils/hooks/useProgress";
import { useFocusEffect } from "@react-navigation/native";

const Chapter = ({ route, navigation }) => {
  const { saveChapterProgress } = useProgress();
  const flRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const scrollToIndex = (index) => {
    if (index < chapter.length)
      flRef.current?.scrollToIndex({ animated: true, index: index });
  };
  const chapter = route.params.chapter;
  const chapterIndex = route.params.chapterIndex;
  const progress = route.params.progress;
  const scrollX = useRef(new Animated.Value(0)).current;
  const renderItem = ({ item, index }) => (
    <Page
      section={item}
      scrollToIndex={scrollToIndex}
      index={index}
      setCurrentPage={setCurrentPage}
    />
  );

  const saveProgress = async () => {
    if (currentPage > progress) {
      saveChapterProgress(chapterIndex, currentPage);
      console.log(currentPage, progress);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      return () => saveProgress();
    }, [currentPage])
  );

  return (
    <View flex={1} alignItems="center" pt={"8%"}>
      <BackButton onPress={() => navigation.goBack()} />
      <UtilButton
        icon={
          <Icon
            size={"sm"}
            color={"black"}
            as={<FontAwesome name="sticky-note-o" />}
          />
        }
        onPress={() => {
          let data = {
            title: "",
            chapter: chapter[0].title,
            content: "",
          };
          navigation.navigate("NewNote", {
            noteData: data,
            fromChapter: true,
          });
        }}
      />
      <FlatList
        ref={flRef}
        initialScrollIndex={progress}
        onMomentumScrollEnd={(e) => {
          const pageNumber = Math.floor(
            Math.floor(e.nativeEvent.contentOffset.x) /
              Math.floor(e.nativeEvent.layoutMeasurement.width)
          );
          setCurrentPage(pageNumber);
        }}
        h={"100%"}
        data={chapter}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
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
