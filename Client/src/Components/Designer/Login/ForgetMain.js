import React from 'react'
import styles from './Forget.module.css';
import ForgetPassword from './ForgetPassword/ForgetPassword';
import ForgetSecond from './ForgetPassword/ForgetSecond';
import { useForm } from 'react-hooks-helper';
import { useStep } from 'react-hooks-helper';
import Navbar1 from '../../Navbar/Navbar1';

const defaultData = {
    email: "",
    password: "",
    confirmPassword:""
}

const steps = [
    {id:"Forgot1"},
    {id:"Forgot2"},
]

function ForgetMain() {
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({
        steps, initialStep: 0,
    });
    const props = { formData, setForm, navigation }

    switch (step.id) {
        case "Forgot1":
            return (
                <><Navbar1/>
                <ForgetPassword {...props} /></>
            )
        case "Forgot2":
            return (<><Navbar1/>
                <ForgetSecond {...props} /></>
            )
    }
    return (
        <>
        
        </>
    )
}

export default ForgetMain
