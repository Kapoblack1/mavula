import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Dot, DotsThree, CaretLeft } from 'phosphor-react-native';
import PieChart from 'react-native-pie-chart'
import * as Progress from 'react-native-progress';
import Item from '../Components/Storage/Item.jsx'

export default function StorageScreen() {

  const widthAndHeight = 200;
  const series = [500, 321, 150, 500];
  const sliceColor = ['#22215B', '#F4BE37', '#4CE364', '#567DF4'];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:"white" }}>
      <ScrollView style={styles.container}>
        <View style={{ paddingRight: 5 }}>
          <View style={styles.header}>
            <TouchableOpacity>
              <CaretLeft style={{ marginLeft: 10 }} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Armazenamento</Text>
            <DotsThree style={{ marginRight: 10 }} size={28} color="#767676" weight="bold" />
          </View>

          <View style={styles.chart}>
            <PieChart
              widthAndHeight={widthAndHeight}
              series={series}
              sliceColor={sliceColor}
              coverRadius={0.60}
              coverFill={'#FFF'}
            />
            <Text style={styles.textDisponivel}>Disponível</Text>
            <Text style={styles.storage}>43.36 GB</Text>
            <Text style={styles.total}>Total 128 GB</Text>
          </View>

          <Item dotColor={'#22215B'} title={'Projectos'} progress={0.5} space={'38.66 GB'} ></Item>

          <Item dotColor={'#F4BE37'} title={'Imagens'} progress={0.43} space={'23.80 GB'} ></Item>

          <Item dotColor={'#4CE364'} title={'Vídeos'} progress={0.1} space={'12.60 GB'} ></Item>

          <Item dotColor={'#567DF4'} title={'Documentos'} progress={0.1} space={'6.57 GB'} ></Item>

          <Item dotColor={'#F47256'} title={'Outros'} progress={1} space={'2.01 GB'} ></Item>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#414141',
    marginTop: 20,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#414141',
  },
  chart: {
    marginTop: 20,
    alignItems: 'center',
  },
  textDisponivel: {
    fontSize: 23,
    color: '#585757',
    fontWeight: '400',
    marginTop: 20,
  },
  storage: {
    fontSize: 24,
    color: '#414141',
    fontWeight: '700',
    marginTop: 10,
  },
  total: {
    fontSize: 23,
    color: '#585757',
    fontWeight: '400',
    marginTop: 10,
    marginBottom: 15,
  },
});
