
import React from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen';
import Item from '../../components/Notifications/Item';
import { ScrollView, View } from 'react-native';

const Notifications = () => {
  const data =[
    {
        username: 'John Doe',
        date: '12/12/2020',
        message: 'ceci est ma premiere notification alors stp ne te face pas si je suis laid tu vois j aime les risque alors epouse moi pour cela'
    },
    {
        username: 'John Doe',
        date: '12/12/2020',
        message: 'ceci est ma premiere notification alors stp ne te face pas si je suis laid tu vois j aime les risque alors epouse moi pour cela'
    },
    {
        username: 'John Doe',
        date: '12/12/2020',
        message: 'ceci est ma premiere notification alors stp ne te face pas si je suis laid tu vois j aime les risque alors epouse moi pour cela'
    },
    {
        username: 'John Doe',
        date: '12/12/2020',
        message: 'ceci est ma premiere notification alors stp ne te face pas si je suis laid tu vois j aime les risque alors epouse moi pour cela'
    },
    {
        username: 'John Doe',
        date: '12/12/2020',
        message: 'ceci est ma premiere notification alors stp ne te face pas si je suis laid tu vois j aime les risque alors epouse moi pour cela'
    },
    {
        username: 'John Doe',
        date: '12/12/2020',
        message: 'ceci est ma premiere notification alors stp ne te face pas si je suis laid tu vois j aime les risque alors epouse moi pour cela'
    },
    {
        username: 'John Doe',
        date: '12/12/2020',
        message: 'ceci est ma premiere notification alors stp ne te face pas si je suis laid tu vois j aime les risque alors epouse moi pour cela'
    }
];

  return (
    <ContainerScreen>
      <ScrollView>
        <View>
          {data.map((item, index) => (
            <Item 
              key={index} 
              date={item.date} 
              username={item.username}
              message={item.message}
            />
          ))}
        </View>
      </ScrollView>
    </ContainerScreen>
  )
}

export default Notifications