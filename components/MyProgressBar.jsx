
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function MyProgressBar(props) {

  return (
    <CircularProgressbar
      value={props.value}
      text={`${props.value}%`}
      styles={buildStyles({  
        // Colors
        pathColor: `rgba(62, 152, 199, ${66 / 100})`,
        textColor: '#BE9F56',
        trailColor: '#BE9F56',
        backgroundColor: '#BE9F56',
      })}
    />
  );
}

export default MyProgressBar
