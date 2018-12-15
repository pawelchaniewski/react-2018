import React from "react";

import Title from "../Title/Title";
import Image from "../Image/Image";
import Text from "../Text/Text";
import Rating from "../Rating/Rating";

import { LanguageConsumer } from "../LanguageContext/LanguageContext";

const handleClick = i => alert(`click ${i}`);

const Post = ({ title, image, text, rating }) => {
  return (
    <LanguageConsumer>
      {language => (
        <div>
          <span>{language}</span>
          <Title title={title[language]} />
          <Rating rating={rating} onClick={handleClick} />
          <Image url={image} />
          <Text text={text[language]} />
        </div>
      )}
    </LanguageConsumer>
  );
};

export default Post;
