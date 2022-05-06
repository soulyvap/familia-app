const chapters = {
  tileInfo: [
    {
      image: require("../assets/love.png"),
      title: "From falling in love to love",
    },
    {
      image: require("../assets/between.png"),
      title: "Between cultures",
    },
    {
      image: require("../assets/third.png"),
      title: "Third culture",
    },
    {
      image: require("../assets/becomes.png"),
      title: "When two becomes three",
    },
    {
      image: require("../assets/child.png"),
      title: "An intercultural child",
    },
    {
      image: require("../assets/richness.png"),
      title: "Bilingualism is a richness",
    },
    {
      image: require("../assets/tips.png"),
      title: "Practical tips for supporting a child's bilingualism",
    },
  ],
};

export const sectionTypes = {
  main: "main",
  section: "section",
  quiz: "quiz",
};

const Chapter1 = [
  {
    image: require("../assets/love.png"),
    title: "From falling in love to love",
    type: sectionTypes.main,
  },
  {
    text: "Real life relationships are not necessarily as straightforward. Romantic relationships have different stages, the first of which is falling in love. Everything begins from two people seeing something interesting in each other and finding, to their joy, that the feeling is mutual. We see a lot of similarities to ourselves in the person we love, and this resemblance that we experience brings a ouple who are in love closer. A couple who have just fallen in love see each other in a strongly positive light and can see no faults in each other, only an outright fulfilment of their dreams",
    type: sectionTypes.section,
  },

  {
    text: "An intercultural couple's life together is affected both by their personalities and cultural backgrounds. Couples awaken to the differences in personalities and cultural backgrounds 7 during the adjustment stage, and sometimes the very thing that made the loved one so special and wonderful at first becomes annoying. The idea of changing the loved one sneaks into one’s mind: “Couldn’t you be a little less yourself and more like me?” During the adjustment stage, a couple seeks ways to combine the things that they have in common and reconcile the things that are different about them. A couple may then go through an ”international match” in their relationship during which the different cultural customs and values are weighed.",
    type: sectionTypes.section,
  },
  {
    text: "A good relationship is one where there is enough room for the feelings and needs of both partners. The fulfilment of needs is in direct proportion to how satisfied– or dissatisfied– the spouses are in their relationship. That’s why it’s important to share your wishes and needs with your spouse; neither partner can be a mind-reader. Open discussion is the key to understanding your partner, and both spouses carry the responsibility for having effective conversations. The skills of talking and listening are worth their weight in gold in a relationship.",
    type: sectionTypes.section,
  },
  {
    question: "What is a good relationship like?",
    answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
    correct: 3,
    type: sectionTypes.quiz,
  },
  {
    question: "What is a good relationship like?",
    answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
    correct: 3,
    type: sectionTypes.quiz,
  },
  {
    question: "What is a good relationship like?",
    answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
    correct: 3,
    type: sectionTypes.quiz,
  },
];

export { chapters, Chapter1 };
