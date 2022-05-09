import { Animated, Dimensions } from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import PollList from "../../components/PollList";
import { Button, FlatList, VStack } from "native-base";
import ViewHeading from "../../components/ViewHeading";
import { ScalingDot } from "react-native-animated-pagination-dots";
import { colors } from "../../utils/colors";
import { useFirestore } from "../../utils/hooks/useFirestore";
import { MainContext } from "../../contexts/MainContext";

const pollData = [
  {
    question: "Are you in a romantic relationship?",
    answers: [
      "No",
      "Yes, for 0-2 years",
      "Yes, for 3-5 years",
      "Yes, for 6-10 years",
      "Yes, for 11+ years",
    ],
  },
  {
    question: "What do you want to improve about your relationship?",
    answers: [
      "Improve Communication",
      "Parenting Together",
      "Quality Time",
      "Improve Intimacy",
      "Reduce Tension",
    ],
  },
];

const Polls = ({ navigation }) => {
  const { currentUser } = useContext(MainContext);
  const { addPollData } = useFirestore();
  const [index, setIndex] = useState(0);

  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(pollData.length)
  );

  const setSelected = (answer) => {
    let copy = selectedAnswers;
    copy[index] = answer;
    setSelectedAnswers([...copy]);
  };

  const scrollX = useRef(new Animated.Value(0)).current;

  const w = Dimensions.get("screen").width;

  const scrollToIndex = (index) => {
    flRef.current?.scrollToIndex({ animated: true, index: index });
    setIndex(index);
  };

  const flRef = useRef();

  const saveAnswers = async () => {
    let answersData = {};
    for ([i, answer] of selectedAnswers.entries()) {
      answersData[pollData[i].question] = answer;
    }

    console.log(answersData);
    await addPollData(currentUser, answersData);
  };

  const renderItem = ({ index, item }) => (
    <VStack w={w} px={6} py={20} justifyContent={"space-between"}>
      <ViewHeading text={pollData[index].question} />
      <PollList
        answers={pollData[index].answers}
        selected={selectedAnswers[index]}
        setSelected={setSelected}
      />
      <Button
        variant={"green"}
        onPress={() => {
          if (index < pollData.length - 1) {
            scrollToIndex(index + 1);
          } else {
            saveAnswers();
            navigation.goBack();
          }
        }}
      >
        {index == pollData.length - 1 ? "Done" : "Continue"}
      </Button>
    </VStack>
  );

  return (
    <VStack flex={1}>
      <FlatList
        ref={flRef}
        onMomentumScrollEnd={(e) => {
          const currentIndex = Math.floor(
            Math.floor(e.nativeEvent.contentOffset.x) /
              Math.floor(e.nativeEvent.layoutMeasurement.width)
          );
          setIndex(currentIndex);
        }}
        data={pollData}
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
        data={pollData}
        scrollX={scrollX}
        activeDotColor={colors.fuksi}
        inActiveDotColor={"grey"}
        activeDotScale={1.2}
        containerStyle={{ marginBottom: 10 }}
      />
    </VStack>
  );
};

export default Polls;
