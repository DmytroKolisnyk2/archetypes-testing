import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import styles from './ArchetypeDetailPage.module.scss';
import SvgArrow from '../../components/SvgArrow/SvgArrow';
import ArchetypesCard from '../../components/ArchetypesCard/ArchetypesCard';

import {archetypePage} from '../../translations/ua/common.json';

const ArchetypeDetailPage = () => {
    const { t } = useTranslation();
    const {archetypeId} = useParams();
    console.log(archetypeId)
    return(
        <li></li>
    );
};

export default ArchetypeDetailPage;