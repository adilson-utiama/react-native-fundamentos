import React from 'react'
import { Button, ToastAndroid, Platform } from 'react-native'

export default props => {

    const showToast = msg => {
        ToastAndroid.show(msg, ToastAndroid.LONG)
    }

    return (
        <Button title="Toast" onPress={ () => showToast("Toast do Android") } />
    )
}