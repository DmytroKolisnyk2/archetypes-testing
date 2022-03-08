import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import styles from './smallArchetypesCard.module.scss';
import Rectangle from "../Rectangle/Rectangle";
import classNames from "classnames";
import Bob1 from "../Bobs/Bob1";
import Bob5 from "../Bobs/Bob5";
import Bob6 from "../Bobs/Bob6";
const smallArchetypesCard = ({color, title, cardId, bobs, rotate}) => {
    const verifyClass = (rotate) => {
        return classNames(styles.smallCard, {
            [styles.smallCardRotate]: rotate === true,
        });
    };
    return(
        <Link to={`/archetypes/${cardId}`}>
        <li className={verifyClass(rotate)}>
            <Rectangle width={240} height={170} color={color} />
            <h3 className={styles.title}>{title}</h3>
        </li>
        </Link>
    );
};

smallArchetypesCard.propTypes = {
    color: PropTypes.string.isRequired,
    title: PropTypes.array.isRequired,
    cardId: PropTypes.string.isRequired,
    bobs: PropTypes.element
};

export default smallArchetypesCard;