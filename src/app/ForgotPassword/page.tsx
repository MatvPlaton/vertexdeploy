"use client"
import Header from '@/app/components/Login/Header';
import UnderHeaderText from "@/app/components/Login/UnderHeaderText";
import AnyField from "@/app/components/Login/AnyField";
import {FieldsWrapper} from "@/app/components/Login/styles/FieldsWrapper";
import {LoginWrapper} from "@/app/components/Login/styles/LoginWrapper";
import Additional from "@/app/components/ForgotPassword/Additional";
import {useEffect, useState} from "react";
import ReturnButton from "@/app/components/ForgotPassword/ReturnButton";
import RegistrationButton from "@/app/components/ForgotPassword/RegistrationButton";

const ForgotPassword = () => {
    const [parentData, setParentData] = useState<string>('');
    const handleDataFromChild = (data: string) => {
        setParentData(data);

    };
    useEffect(() => {
        console.log(parentData);
    }, [parentData]);
    return <LoginWrapper>
        <Header />
        <UnderHeaderText message='Сброс пароля'/>
        <Additional />
        <FieldsWrapper>
            <AnyField text={'E-mail'} onDataChange={handleDataFromChild}/>
        </FieldsWrapper>
        <ReturnButton message='НАЗАД' />
        <RegistrationButton />
    </LoginWrapper>
}

export default ForgotPassword;