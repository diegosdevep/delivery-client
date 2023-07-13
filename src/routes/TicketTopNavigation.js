import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HistoryTicketsScreen from '../screens/tickets/historyTickets/HistoryTicketsScreen';
import LastTicketScreen from '../screens/tickets/lastTicket/LastTicketScreen';
import theme from '../theme/theme';

const Tab = createMaterialTopTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.title || route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={index}
              style={[styles.tabItem, isFocused ? styles.tabItemFocused : null]}
              onPress={onPress}
            >
              <Text style={styles.tabItemLabel}>{label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const TicketTopNavigation = ({ route }) => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        tabBarShowIcon: false,
        tabBarStyle: {
          backgroundColor: 'grey',
        },
      }}
    >
      <Tab.Screen
        name='lastTicket'
        component={LastTicketScreen}
        initialParams={route.params}
        options={{
          title: 'Ultima Orden',
        }}
      />
      <Tab.Screen
        name='history'
        component={HistoryTicketsScreen}
        options={{
          title: 'Historial',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#EFEFF4',
    borderRadius: 8,
    marginHorizontal: '5%',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'transparent',
    borderRadius: 8,
  },
  tabItemFocused: {
    borderBottomColor: theme.colors.orange,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: theme.colors.orange,
  },
  tabItemLabel: {
    color: theme.colors.grey,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TicketTopNavigation;
