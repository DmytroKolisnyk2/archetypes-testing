import React from "react";
import Block2Question from "../Block2Question/Block2Question";
import { secondBlock } from "../../services/questions/secondBlock.json";
import SectionTitle from "../SectionTitle/SectionTitle";

const Block2 = () => {
  return (
    <section>
      <SectionTitle title={"Второй блок"} text={"Выберите наиболее понравившуюся картинку"} />
      <form action="#">
        <ul>
          {secondBlock.map((item, index) => (
            <Block2Question
              key={index}
              number={index + 1}
              headline={item.question}
              images={item.options}
            />
          ))}
        </ul>
      </form>
    </section>
  );
};

export default Block2;
