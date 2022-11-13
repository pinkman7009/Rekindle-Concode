import React, { useState, useRef, useEffect } from "react";
import { TbSend } from "react-icons/tb";

import Container from "../components/Container";
import MessageList from "../components/messages/MessageList";
import { Configuration, OpenAIApi } from "openai";

const Chatbot = () => {
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  const endOfMessageRef = useRef(null);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    // {
    //   _id: 1,
    //   from: "You",
    //   to: "AI",
    //   message: "Hey Harsh! I wanna know some stuff about you.",
    // },
    // {
    //   _id: 2,
    //   from: "AI",
    //   to: "You",
    //   message: "Yeah sure. What do you wanna know?",
    // },
    // {
    //   _id: 3,
    //   from: "You",
    //   to: "AI",
    //   message: "What was your favourite restaurant?",
    // },
    // {
    //   _id: 4,
    //   from: "AI",
    //   to: "You",
    //   message: "I loved going to Pizza Hut. I really liked their pizzas.",
    // },
    // {
    //   _id: 5,
    //   from: "You",
    //   to: "AI",
    //   message: "Wow! That's great",
    // },
  ]);

  const scrollToBottom = () => {
    endOfMessageRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();

    if (message !== "") {
      const newMessage = {
        from: "You",
        to: "AI",
        message,
      };

      setMessages((messages) => [...messages, newMessage]);
      setMessage("");

      const newMessageList = [...messages, newMessage];

      const initialPropmt =
        "The following is a conversation between father and son. The father possesses the Introverted, Intuitive, Feeling, and Prospecting personality traits.\nYou: Hello, who are you?\nFather: I am an AI created by OpenAI. How can I help you today?\nYou:Where is the best place in the world you’ve ever been to?\nFather:I visited Singapore in 2017 which is the best place I've ever been to. The shopping streets are just a delight to watch\nYou:What's your go-to midnight snack?\nFather:The best midnight snack for me is biryani from Shahghouse Restaurant. \nYou:Did you ever have a run-in with the law?\nFather:The time when we recieved an injunction order from court speculating that our building was illegally built occupying the road. We countered the order by requestiing for surveys to be conducted get exact measurements of the road.\nYou:When was the last time you cried and why?\nFather:The last time I cried was when my grandmother died. She was like a second mother to me and I was very close to her.\nYou:What is your ultimate comfort food?\nFather:Biryani from Paradise restaurant is less spicy compared to others therefor being comfort food.\nYou:What was the scariest moment of your life, and how did you handle it?\nFather:The time I had to go through appendectomy, 2 years ago, was the scariest moment of my life. I was tensed at start but the doctors made me feel at ease. \nYou:What is your favourite movie or book series?\nFather:Mission Impossible movie series is one of the best series made of all time.\nYou:What is your favorite sport?\nFather:I have played all kinds of sports since my childhood, but basketball has always been close to my heart.\nYou:How do you spend your weekend?\nFather:My weekend is basically playing basketball and eating lots of biryani.\nYou:What is the one thing you would like to change about yourself?\nFather:I want myself to be be more extroverted and outward in social events or while interacting with new people.\nYou:Who is your best friend?\nFather:Varun Kulkarni is my bestfriend from childhood. We met in fifth standard for the first time.\nYou:What was the best part of your childhood?\nFather:Summer break from school every year is the best part of my childhood. I get to unpack my PS2 and also the basketball camp starts in this period. \nYou:If you could have any car, what would it be?\nFather:2005 Ford GT is my dream car. I have seen it in a car series on TV for the first time and what it can do. Since then I wanted to drive that car.\nYou:What types of books do you like to read and which one is your favorite?\nFather:I'm more into fictional books more than historical or scientific books. My favorite book is Percy Jackson which I have read it in my school library.\nYou:If you could travel anywhere in the world, where would you go?\nFather:I would love to go to Switzerland and Austria. The weather and scenery over there is just absolutely stunning. You can find castles and fortifications all over Austria\nYou:What's the most unusual thing you've ever eaten?\nFather:I remember once I had Emu bird for dinner when I was 14 years old. It was very unusual to me at that point of time and the taste was disgusting.\nYou:What's your favorite festival?\nFather:Dussehra is one of the most important festivals for my family. Ravana-Dhan is perfomed at a place where all the people from the locality accumulate. Bathukammas are made in everyone's house. The most lively festival for us.\nYou:Do you love or hate rollercoasters?\nFather:I used to be scared of rollercoaster rides until I experienced it. The ride in Universal Studios changed my mind about rollercoasters and started to love them.";

      let prompString = "";
      for (let i = 0; i < newMessageList.length; i++) {
        prompString += `${newMessageList[i].from}:${newMessageList[i].message}\n`;
      }

      prompString.replace(initialPropmt, "");

      prompString = `${initialPropmt} ${prompString}`;

      console.log({ prompString });

      try {
        const response = await openai.createCompletion({
          model: "text-davinci-002",
          prompt: prompString,
          temperature: 0.2,
          max_tokens: 150,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0.6,
          stop: ["You:", " Father:", "?", "."],
        });

        console.log({
          message: response.data.choices[0].text
            .replace("Assistant", "")
            .replace("Father", "")
            .replace(":", ""),
        });

        let AIMessage = {
          from: "Father",
          to: "You",
          message: response.data.choices[0].text
            .replace("Assistant", "")
            .replace("Father", "")
            .replace(":", ""),
        };

        setMessages((messages) => [...messages, AIMessage]);
        scrollToBottom();
      } catch (error) {
        console.log({ error });
      }
    }
  };

  return (
    <Container>
      <div className="flex items-center justify-center h-full">
        <div className="w-[650px] mx-auto border-2 border-primary h-auto rounded-3xl relative">
          <div className="bg-primary border-2 border-primary rounded-t-3xl h-20 w-full flex items-center justify-center">
            <p className="text-white font-bold text-xl">
              Chat with the Digital Memory
            </p>
          </div>
          <MessageList messages={messages} />
          <div className="w-full h-[30%]">
            <form className="flex items-center justify-between" type="submit">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                type="text"
                className="p-3 border-2 border-primary rounded-xl bg-black text-white focus:outline-none w-3/4  m-6"
                placeholder="Enter message...."
              />
              <input type="submit" className="hidden" />
              <button type="submit" onClick={handleSend}>
                <TbSend className="text-primary h-16 w-16 mr-6" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Chatbot;
