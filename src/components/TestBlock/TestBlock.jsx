import React , { useState }  from "react";
import PropTypes from "prop-types";
import TestBlockStyles from "./TestBlock.module.scss"
import Title from "../sectionTitle/sectionTitle"
import Button from "../Button/Button"
import SvgArrow from "../SvgArrow/SvgArrow"
import { useTranslation } from "react-i18next";
import { testBlock1 } from "../../translations/ua/common.json";

function TestBlock ({ props }){
  // const [count, setCount] = useState(1);
  // setCount(2);
  const { t } = useTranslation();
  

    return (
  <div>
<Title title={'Перший блок'} 
text={'Виберіть найбільш підходящу вам відповідь з двох запропонованих нижче'} top={120}/>
          {props.map((prop,index) => (
            <>
            <h2 className={TestBlockStyles.quetion}>{index+1}. {prop.question}</h2>
         <form className={TestBlockStyles.form}>
<label className={TestBlockStyles.options}><input className={TestBlockStyles.inputRadio} type="radio"name="fav_language" />{prop.options[1]} </label><br></br>

<label className={TestBlockStyles.options}><input className={TestBlockStyles.inputRadio} type="radio" name="fav_language"/>{prop.options[2]}</label><br></br>
</form>
            </>
          ))}
          <div  className={TestBlockStyles.testBlock1ButtonWrapper}>
  <Button
              width={170}
              bgColor={"violet"}
              color={"white"}
            >
              {/* <div className={FooterStyles.footerButton2Wrapper}> */}
          
                <SvgArrow size={20} orientation='left' color={'white'}/>
                <p className={TestBlockStyles.testBlock1Text}>{t(testBlock1.button1)}</p>
              {/* </div> */}
            </Button>
            <Button
              width={170}
              bgColor={"violet"}
              color={"white"}
            >
              {/* <div className={FooterStyles.footerButton2Wrapper}> */}
              <p className={TestBlockStyles.testBlock1Text}>{t(testBlock1.button2)}</p>
                <SvgArrow size={20} orientation='right' color={'white'}/>
            
              {/* </div> */}
            </Button>
            </div>
      </div>
    );
  };

TestBlock.propTypes = {
  props:PropTypes.array.isRequired
  };
  export default TestBlock;