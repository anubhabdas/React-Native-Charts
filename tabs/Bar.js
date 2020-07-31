import React from 'react';
import { View, StyleSheet,} from 'react-native';
import { Svg } from 'react-native-svg';
import { VictoryBar, Bar, VictoryChart,} from 'victory-native';

export default class BarChart extends React.Component {
     constructor() {
       super();
       const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
       this.state = {
         clicked: false,
         style: {
           data: { fill: randomColor() }
         }
       };
     }
   
     render() {
       const randomNumber = () => Math.floor(Math.random() * 101);
       const handleMouseOver = () => {
         const fillColor = this.state.clicked ? "blue" : "tomato";
         const clicked = !this.state.clicked;
         this.setState({
           clicked,
           style: {
             data: { fill: fillColor }
           }
         });
       };
   
       return (
         <View style={styles.container}>
           <VictoryChart height={400} width={400}
             domainPadding={{ x: 50, y: [0, 20] }}
             scale={{ x: "time" }}
           >
             <VictoryBar
               dataComponent={
                 <Bar events={{ onMouseOver: handleMouseOver }}/>
               }
               style={this.state.style}
               data={[
                 { x: new Date(1986, 1, 1), y: randomNumber() },
                 { x: new Date(1996, 1, 1), y: randomNumber() },
                 { x: new Date(2006, 1, 1), y: randomNumber() },
                 { x: new Date(2016, 1, 1), y: randomNumber() }
               ]}
             />
           </VictoryChart>
         </View>
       );
     }
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center'
     },
})