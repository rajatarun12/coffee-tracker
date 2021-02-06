import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import TabOneScreen from '../screens/Dashboard';
import { BottomTabParamList, Dashboard } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();
interface IProps { }
interface IState { }
class BottomTabNavigator extends React.Component<IProps, IState>{
  constructor(props: IProps) { super(props); }
  render() {
    return (<TabOneNavigator></TabOneNavigator>);
  }
}

export default BottomTabNavigator;

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<Dashboard>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name=" "
        component={TabOneScreen}
        options={{headerShown: false}}
      />
    </TabOneStack.Navigator>
  );
}