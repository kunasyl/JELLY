import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton'

const SocialSignInButtons = () => {
    const onSignInGoogle = () => {
        console.warn('onSignInFacebook');
    }
    
    return (
        <>
            <CustomButton 
            text="Sign in with Google" 
            onPress={onSignInGoogle} 
            type="SECONDARY"
            bgColor="#FAE9EA"
            fgColor="#DD4D44"
            />
        </>
    )
}

export default SocialSignInButtons