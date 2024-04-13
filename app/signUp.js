import { View, Text, Image, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native';
import React, { useRef, useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Toast from 'react-native-toast-message';
import Loading from '../components/Loading';
import CustomKeyboardView from '../components/CustomKeyboardView';
// import { icon } from '../constants'

export default function SignUp() {

    const router = useRouter();
    const [loading, setLoding] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const emailRef = useRef("");
    const passwordRef = useRef("");
    const usernameRef = useRef("")
    const profileRef = useRef("")

    const handleRegister = async () => {
        if(!emailRef.current || !passwordRef.current || !usernameRef.current || !profileRef.current) {
            Alert.alert('Sign Up Error', 'Please fill all fields!');
            return;
        }

        //register process
    }

    return (
        <CustomKeyboardView>
            <StatusBar style='dark' />
            <View style={{paddingTop: hp(7), paddingHorizontal: wp(5)}} className="flex-1 gap-12">
                {/* signIn images */}
                <View className="items-center">
                    <Image style={{height: hp(20)}} resizeMode='contain' source={require('../assets/images/signup.png')} />
                </View>

                <View className="gap-6">
                    <Text style={{fontSize: hp(4)}} className="font-bold tracking-wider text-center text-neutral-800">Sign Up Account</Text>
                    {/* Inputs */}
                    <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl">
                        <FontAwesome5 name="user" size={hp(2,7)} color="gray" />
                        <TextInput
                            onChangeText={value => usernameRef.current=value}
                            style={{fontSize: hp(2)}}
                            className="flex-1 font-semibold text-neutral-700"
                            placeholder='Please enter your username'
                            placeholderTextColor={'gray'}
                        />
                    </View>
                    <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl">
                        <Octicons name="mail" size={hp(2,7)} color="gray" />
                        <TextInput
                            onChangeText={value => emailRef.current=value}
                            style={{fontSize: hp(2)}}
                            className="flex-1 font-semibold text-neutral-700"
                            placeholder='Please enter your email'
                            placeholderTextColor={'gray'}
                        />
                    </View>
                    <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl">
                        <Octicons name="lock" size={hp(2,7)} color="gray" />
                        <TextInput
                            onChangeText={value => passwordRef.current=value}
                            style={{fontSize: hp(2)}}
                            className="flex-1 font-semibold text-neutral-700"
                            placeholder='Please enter your password'
                            secureTextEntry={!showPassword}
                            placeholderTextColor={'gray'}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <FontAwesome5 name={showPassword ? 'eye-slash' : 'eye'} size={hp(2.7)} color="gray" />
                        </TouchableOpacity>
                    </View>
                    <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl">
                    <FontAwesome5 name="images" size={hp(2,7)} color="gray" />
                        <TextInput
                            onChangeText={value => profileRef.current=value}
                            style={{fontSize: hp(2)}}
                            className="flex-1 font-semibold text-neutral-700"
                            placeholder='Please enter your profile url'
                            placeholderTextColor={'gray'}
                        />
                    </View>

                    {/* signin button */}

                    <View>
                        {
                            loading? (
                                <View className="flex-row justify-center">
                                    <Loading size={hp(6.5)} />
                                </View>
                            ):(
                                <TouchableOpacity onPress={handleRegister} style={{height: hp(6.5), backgroundColor: '#4F46E5', borderRadius: 12, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{ fontSize: hp(2.7) }} className="text-white font-bold tracking-wider">
                                        Sign Up
                                    </Text>
                                </TouchableOpacity>
                            )
                        }
                    </View>

                    {/* signup button text */}
                    <View className="flex-row justify-center">
                        <Text style={{fontSize: hp(2.1)}} className="text-neutral-500">Already have an account?</Text>
                        <Pressable onPress={() => router.push('signIn')}>
                            <Text style={{fontSize: hp(2.1), color: '#4F46E5'}} className="font-semibold"> Login Now</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </CustomKeyboardView>
    )
}