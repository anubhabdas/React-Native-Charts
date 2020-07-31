import React from 'react';
import { View, StyleSheet,} from 'react-native';
import { Svg } from 'react-native-svg';
import { VictoryPie, VictoryLegend} from 'victory-native';

const randomNumber = () => Math.floor(Math.random() * 101);
const graphicData = [{ x: "India", y: randomNumber(), }, { x: "USA", y: randomNumber() }, { x: "France", y: randomNumber() }, { x: "Spain", y: randomNumber() }, { x: "Germany", y: randomNumber() }];
const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
const graphicColor = [randomColor(), randomColor(), randomColor(), randomColor(), randomColor()];

function Pie() {
     let clicked = false;
     return (
          <View style={styles.container}>
               <Svg height={300} width={400}>
                    <VictoryPie
                         style={{ labels: { fill: "black", fontSize: 15, fontWeight: "bold" } }}
                         animate={{duration: 2000, easing:"sinIn"}}
                         data={graphicData}
                         width={350}
                         height={300}
                         cornerRadius={8}
                         colorScale={graphicColor}
                         innerRadius={45}
                         padAngle={5}
                         events={[{
                         target: "data",
                         eventHandlers: {
                         onPressIn: () => {
                         return [
                              // {
                              //   target: "data",
                              //   mutation: ({ padAngle }) => {
                              //     return  padAngle=5 ? { padAngle: 30 } : { padAngle: 5 };
                              //   }
                              // },
                              {
                                   target: "data",
                                   mutation: ({ datum }) => {
                                        console.log(clicked);
                                        if (clicked) {
                                             clicked = false;
                                             return null;
                                        }
                                        else {
                                             clicked = true;
                                             return { style: { fill: "black" } };
                                        }
                                        //return datum.y > 0 ? {style: {:"green"}} : {style: {fill:"red"}};
                                   }
                              },
                         ];
                         }
                        }
                    }]}
                    />
               </Svg>
               {/* <View style={styles.container}>
               <VictoryLegend x={125} y={50}
                    title="Legend"
                    centerTitle
                    orientation="horizontal"
                    gutter={20}
                    style={{
                    data: { fill: "blue", stroke: "navy", strokeWidth: 2 },
                    labels: { fill: "navy" },
                    border: { stroke: "black" },
                    title: {fontSize: 20 }
                    }}
                    data={[
                    { name: "One", symbol: { fill: "tomato" } },
                    { name: "Two", labels: { fill: "orange" } },
                    { name: "Three" }
                    ]}
               />
               </View> */}
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center'
     },
})

export default Pie;