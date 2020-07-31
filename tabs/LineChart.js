import React from 'react';
import { View, StyleSheet,} from 'react-native';
import { Svg } from 'react-native-svg';
import { VictoryChart, VictoryTheme, VictoryArea,} from 'victory-native';

const randomNumber = () => Math.floor(Math.random() * 101);
const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
const sampleData=[
  { x: 0, y: randomNumber() },
  { x: 1, y: randomNumber() },
  { x: 2, y: randomNumber() },
  { x: 3, y: randomNumber() },
  { x: 4, y: randomNumber() },
  { x: 5, y: randomNumber() },
  { x: 6, y: randomNumber() },
  { x: 7, y: randomNumber() },
  { x: 8, y: randomNumber() }
];

function LineChart() {
  return (
    <View style={styles.container}>
      <VictoryChart 
          animate={{ duration: 1000, easing:"sinIn"}} 
          //theme={VictoryTheme.grayscale}
          theme={VictoryTheme.material} 
          domain={{x: [0, 8], y: [0, 100]}}>
          <VictoryArea 
            interpolation="natural" 
            data={sampleData}
            events={[{
      target: "data",
      eventHandlers: {
        onPresIn: () => {
          return [
            {
              eventKey: "all",
              mutation: (style) => {
                const fill = style && style.fill;
                return fill === "black" ? null : { style: { fill: "black" } };
              }
            }
          ];
        }
      }
    }]}
    // "rgba(134, 65, 244, 0.2)"
            style={{
              data: { fill: randomColor(), stroke: randomColor() }
            }}/>
            {/* <VictoryLine interpolation="natural" data={sampleData} /> */}
      </VictoryChart>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignContent: 'center'
  },
})

export default LineChart;