import { View, Text, Image, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native';
import React, { useRef, useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Toast from 'react-native-toast-message';
import Loading from '../components/Loading';
import CustomModal from '../components/customModals';


export default function SignIn() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false); // State to manage modal visibility
    const [errorMessage, setErrorMessage] = useState('');

    const emailRef = useRef("");
    const passwordRef = useRef("");

    const handleLogin = async () => {
        if (!emailRef.current || !passwordRef.current) {
            setErrorMessage('Please fill all fields!');
            setModalVisible(true); // Show modal with error message
            return;
        }

        // Login process
    }

    return (
        <View className="flex-1">
            <StatusBar style='dark' />
            <View style={{ paddingTop: hp(8), paddingHorizontal: wp(5) }} className="flex-1 gap-12">
                {/* signIn images */}
                <View className="items-center">
                    <Image style={{ height: hp(25) }} resizeMode='contain' source={require('../assets/images/login.png')} />
                </View>

                <View className="gap-6">
                    <Text style={{ fontSize: hp(4) }} className="font-bold tracking-wider text-center text-neutral-800">Sign In</Text>
                    {/* Inputs */}
                    <View style={{ height: hp(7) }} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl">
                        <Octicons name="mail" size={hp(2.7)} color="gray" />
                        <TextInput
                            onChangeText={value => emailRef.current = value}
                            style={{ fontSize: hp(2) }}
                            className="flex-1 font-semibold text-neutral-700"
                            placeholder='Please enter your email'
                            placeholderTextColor={'gray'}
                        />
                    </View>
                    <View className="gap-2">
                        <View style={{ height: hp(7) }} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl">
                            <Octicons name="lock" size={hp(2.7)} color="gray" />
                            <TextInput
                                onChangeText={value => passwordRef.current = value}
                                style={{ fontSize: hp(2) }}
                                className="flex-1 font-semibold text-neutral-700"
                                placeholder='Please enter your password'
                                secureTextEntry
                                placeholderTextColor={'gray'}
                            />
                        </View>
                        <Text style={{ fontSize: hp(1.8) }} className="font-semibold text-right text-neutral-500 underline">Forgot Password?</Text>
                    </View>

                    {/* signin button */}

                    <View>
                        {
                            loading ? (
                                <View className="flex-row justify-center">
                                    <Loading size={hp(6.5)} />
                                </View>
                            ) : (
                                <TouchableOpacity onPress={handleLogin} style={{ height: hp(6.5), backgroundColor: '#4F46E5', borderRadius: 12, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: hp(2.7) }} className="text-white font-bold tracking-wider">
                                        Sign In
                                    </Text>
                                </TouchableOpacity>
                            )
                        }
                    </View>

                    {/* signup button text */}
                    <View className="flex-row justify-center">
                        <Text style={{ fontSize: hp(2.1) }} className="text-neutral-500">Don't have an account?</Text>
                        <Pressable onPress={() => router.push('signUp')}>
                            <Text style={{ fontSize: hp(2.1), color: '#4F46E5' }} className="font-semibold"> Sign Up Now</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            {/* Custom Modal for displaying error message */}
            <CustomModal
                visible={modalVisible}
                message={errorMessage}
                onClose={() => setModalVisible(false)}
            />
        </View>
    )
}