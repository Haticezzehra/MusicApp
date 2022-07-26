import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50, //Width ve height değerinin yarısı kadar değer verilirse şekil yuvarlak olur.
  },
  inner_container: {
    justifyContent: 'center',
    padding: 10,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 27,
  },
  info_container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  year: {
    marginLeft: 10,
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 12,
  },
  soldout_container: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  soldout_title: {
    color: 'red',
    fontSize:12
  },
  content_container: {
    flexDirection: 'row',
  },
});

export default styles;
