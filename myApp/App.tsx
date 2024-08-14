import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const Story = ({ title }: { title: string }) => (
  <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
    <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: '#e0e0e0' }} />
    <Text style={{ marginTop: 5 }}>{title}</Text>
  </View>
);

const Card = ({ title, date, likes }: { title: string; date: string; likes: number }) => (
  <View style={{ backgroundColor: 'white', marginVertical: 10, borderRadius: 10, overflow: 'hidden' }}>
    <View style={{ width: '100%', height: 200, backgroundColor: '#e0e0e0' }} />
    <View style={{ padding: 10 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{title}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <TouchableOpacity style={{ backgroundColor: '#e0e0e0', padding: 5, borderRadius: 5 }}>
          <Text>Duis aute</Text>
        </TouchableOpacity>
        <Text>{date}</Text>
        <Text>{likes} ❤️</Text>
      </View>
    </View>
  </View>
);

const HomeScreen = () => {
  return (
    <ScrollView style={{ padding: 10 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <Icon name="search" size={24} />
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Digitus</Text>
        <Icon name="user" size={24} />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 20 }}>
        <Story title="Günün Menüsü" />
        <Story title="Bayram Kutlaması" />
        <Story title="Digitus Anket" />
        <Story title="Duyuru ve Genelgeler" />
        <Story title="Bugün Doğanlar" />
        <Story title="Aramıza Katılanlar" />
      </ScrollView>

      <Card 
        title="Enim ad minim" 
        date="21.05.2020" 
        likes={1058} 
      />

      <Card 
        title="enim ad Minim" 
        date="22.05.2020" 
        likes={1240} 
      />
    </ScrollView>
  );
};

const articles = [
  { id: '1', title: 'Dergi 1', description: 'Dergi 1 açıklaması'  },
  { id: '2', title: 'Dergi 2', description: 'Dergi 2 açıklaması' },
     { id: '3', title: 'Makale 1', description: 'Makale 1 açıklaması' },
      ];

const ArticleCard = 
({ title, description, imageUrl }: { title: string; description: string; imageUrl: string }) => (
  <View style={styles.articleCard}>
    <Image source={{ uri: imageUrl }} style={styles.articleImage} />
    <View style={styles.articleContent}>
      <Text style={styles.articleTitle}>{title}

      </Text>
      <Text style={styles.articleDescription}>{description}
        
      </Text>
    </View>
  </View>
);

const BookScreen = () => (
  <FlatList
    data={articles}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <ArticleCard 
        title={item.title} 
        description={item.description} 
        imageUrl={item.imageUrl} 
      />
    )}
  />
);

const people = [
  { id: '1', name: 'Kullanıcı 1' },
       { id: '2', name: 'Kullanıcı 2' },
  { id: '3', name: 'Kullanıcı 3' },
];

const PeopleScreen = () => (
  <FlatList
    data={people}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <View style={styles.item}>
        <Text>{item.name}
          
        </Text>
      </View>
    )}
  />
);

const notifications = [
  { id: '1', message: 'Bildirim 1' },
  { id: '2', message: 'Bildirim 2' },
  { id: '3', message: 'Bildirim 3' },
];

const NotificationsScreen = () => (
  <FlatList
    data={notifications}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <View style={styles.item}>
        <Text>{item.message}</Text>
      </View>
    )}
  />
);

const options = [
  { id: '1', option: 'Ayar 1' },
  { id: '2', option: 'Ayar 2' },
  { id: '3', option: 'Ayar 3' },
];

const OptionsScreen = () => (
  <FlatList
    data={options}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <View style={styles.item}>
        <Text>{item.option}</Text>
      </View>
    )}
  />
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ color, size }) => <AntDesign name="home" color={color} size={size} />,
            tabBarLabel: 'Ana Sayfa'
          }} 
        />
        <Tab.Screen 
          name="Book" 
          component={BookScreen} 
          options={{
            tabBarIcon: ({ color, size }) => <Icon name="book" color={color} size={size} />,
            tabBarLabel: 'Dergi/Makale'
          }} 
        />
        <Tab.Screen 
          name="People" 
          component={PeopleScreen} 
          options={{
            tabBarIcon: ({ color, size }) => <Icon name="users" color={color} size={size} />,
            tabBarLabel: 'İnsanlar'
          }} 
        />
        <Tab.Screen 
          name="Notifications" 
          component={NotificationsScreen} 
          options={{
            tabBarIcon: ({ color, size }) => <Icon name="bell" color={color} size={size} />,
            tabBarLabel: 'Bildirimler'
            }} 
        />
        <Tab.Screen 
          name="Options" 
          component={OptionsScreen} 
          options={{
            tabBarIcon: ({ color, size }) => <Icon name="bars" color={color} size={size} />,
            tabBarLabel: 'Ayarlar'
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  articleCard: {
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center'
  },
  articleImage: {
    width: 100,
    height: 100,
    backgroundColor: '#e0e0e0',
    marginRight: 10
  },
   articleContent: {
    flex: 1,
    padding: 10
  },
   articleTitle: {
    fontWeight: 'bold',
    fontSize: 18
  },
  articleDescription: {
    marginTop: 5,
    color: '#555'
  }
  });

export default App;
