import React, {useState} from "react";
import i18n from '../i18n';
import { cn } from '@/utils/cn'
const LanguageSelector = () => {
    
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

    const chooseLanguage = (e) => {
        e.preventDefault();
        i18n.changeLanguage(e.target.value);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
        setSelectedLanguage(e.target.value);
    }

    return (
        <select className="-mt-px inline-flex  justify-center rounded-sm border-0 bg-gradient-to-r from-secondary-300 to-secondary-300 px-7 py-4 text-center font-medium leading-4 text-black  shadow-lg" defaultValue={selectedLanguage} onChange={chooseLanguage}>  
            <option className="mt-3 text-m italic text-gray-500" value="de">German</option>
            <option className="mt-3 text-m italic text-gray-500" value="en">English</option>
            <option className="mt-3 text-m italic text-gray-500" value="it">Français</option>
        </select>
    );
};

export default LanguageSelector;
