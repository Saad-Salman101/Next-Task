
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function MyProgressBar(props) {

  return (
    <CircularProgressbar
      value={props.value}
      text={`${props.value}%`}
      styles={buildStyles({  
        // Colors
        pathColor: `#BE9F56`,
        textColor: '#FFFFFF',
        trailColor: 'rgba(	255, 255, 255, 0.7)',
        backgroundColor: '#BE9F56',
      })}
    />
  );
}

export default MyProgressBar
