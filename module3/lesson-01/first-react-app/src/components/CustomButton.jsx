import './CustomButton.css';
// function CustomButton(props) {
//     return (
//       <a href={props.url}>
//         <button class="btn"> {props.btnText} | {props.author} </button>
//       </a>
//     );
// }

function CustomButton({ btnText, url, author, isPurple }) {
    return (
      <a href={url}>
        <button className="blueButton" style={{ color: 'red', backgroundColor: isPurple ? 'purple' : '', borderRadius: '50%'}}> {btnText} | {author} </button>
      </a>
    );
}
  
export default CustomButton;