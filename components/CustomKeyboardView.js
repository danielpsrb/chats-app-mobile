import { View, Text, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import React from 'react'

const android = Platform.OS == 'android';
export default function CustomKeyboardView({ children }) {
    return (
        <KeyboardAvoidingView
            behavior={ android ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <ScrollView
                style={{ flex: 1 }}
                bounces={false}
                showsHorizontalScrollIndicator={false}
            >
                {
                    children
                }
            </ScrollView>
        </KeyboardAvoidingView>
    )
}