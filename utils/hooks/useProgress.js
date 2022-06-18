import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { chapters } from "../../variables/chapters";

const useProgress = () => {
  const [progressions, setProgressions] = useState(undefined);

  const saveChapterProgress = async (chapterIndex, sectionIndex) => {
    await AsyncStorage.setItem(`chapter${chapterIndex}`, `${sectionIndex}`);
  };

  const getProgressions = async () => {
    let chapProg = {};
    for ([i, v] of chapters.tileInfo.entries) {
      const progress = await AsyncStorage.getItem(`chapter${i}`);
      chapProg[i] = progress;
    }
    setProgressions(chapProg);
  };

  const resetProgressions = async () => {
    for ([i, v] of chapters.tileInfo.entries) {
      await AsyncStorage.removeItem(`chapter${i}`);
    }
  };

  return { saveChapterProgress, progressions, getProgressions, resetProgressions };
};

export default useProgress;
