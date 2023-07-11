import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProdutorRotas from './ProdutorRotas';
import MelhoresProdutorRotas from './MelhoresProdutorRotas';


const Tab = createBottomTabNavigator();


export default function AppRotas(){
    return (
        <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Produtores" component={ProdutorRotas}/>
          <Tab.Screen name="MelhoresProdutores" component={MelhoresProdutorRotas}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
}
