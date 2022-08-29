// import logo from './logo.svg'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CustomButton from './components/CustomButton';
import './App.css';

function App() {
  const buttonsDefinition = [
    {id: "1", btnText: 'Hello World', author: 'Lloyd', url: 'https://www.google.com', isPurple: true}, 
    {id: "2", btnText: 'Bye World', author: 'Michael', url: 'https://www.twitter.com', isPurple: false},
    {id: "3", btnText: 'Awesome World', author: 'Dani', url: 'https://www.youtube.com', isPurple: false},
  ]
  return (
    <div className="App">
     <Header />
     {/* {buttonsDefinition.map(({btnText, author, isPurple}) => <CustomButton btnText={btnText} author={author} isPurple={isPurple} />)} */}
      {buttonsDefinition.map(buttonDefinition => {
        return <CustomButton key={buttonDefinition.id} btnText={buttonDefinition.btnText} author={buttonDefinition.author} isPurple={buttonDefinition.isPurple} />
      })
      }
     {/* <CustomButton btnText="Hello World"  author="Lloyd" url="https://www.google.com"/>
     <CustomButton btnText="New Text" author="Michael" url="https://www.twitter.com"/> */}
     <Footer />
    </div>
  );
}

export default App;
