"use client"
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {setPassword} from "@/app/redux/passwordSlice";
const Wrap = styled(FormControl)`
    width: 90%;
    margin-bottom: 2rem;

    @media (max-width: 1000px) {
        width: 15rem;
    }   
`
const PasswordField = (props: {text: string}) =>  {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        dispatch(setPassword(event.target.value))
    };

    return (

            <Wrap variant="standard">
                <InputLabel htmlFor="standard-adornment-password">{props.text}</InputLabel>
                <Input
                    id="standard-adornment-password"
                    value={inputValue}          // Step 3: Set the Input value to state
                    onChange={handleChange}
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label={
                                    showPassword ? 'hide the password' : 'display the password'
                                }
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                onMouseUp={handleMouseUpPassword}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </Wrap>
    );
}

export default PasswordField;