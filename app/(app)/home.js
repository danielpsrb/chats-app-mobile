import { View, Text, Button } from 'react-native';
import React from 'react';
import  { useAuth } from '../../context/authContext';

export default function Home() {

    const { logout } = useAuth();
    const handleLogout = async () => {
        await logout();
    }

    return (
        <View>
            <Text>Home</Text>
            <Button title="Logout" onPress={handleLogout}>
                <Text>Logout</Text>
            </Button>
        </View>
    )
}