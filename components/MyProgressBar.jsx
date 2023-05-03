
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function MyProgressBar(props) {
  return (
    <CircularProgressbar
      value={props.value}
      text={`${props.value}%`}
    />
  );
}

export default MyProgressBar
