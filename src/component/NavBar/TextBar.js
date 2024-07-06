import { useState } from "react";

function Txtbar(props){

    const [txt,setTxt] = useState("");
    let color ={
        color:props.mode ==='light' ? '#444444':'#aaaaaa'
    };

    let txtAreaStyle = {
        backgroundColor : props.mode === 'light' ? 'white' : 'grey',
        color : props.mode === 'light' ? 'black' : 'white',
    }

    let word = ()=>{
        if(txt===null || txt===''){
            return 0;
        }else{
            let t2 = txt.trim();
            return t2.split(' ').length;
        }
    }

    function onClickUpper(event){
        let upTxt = txt.toUpperCase();
        setTxt(upTxt);

        props.showAlert("Text Converted to upper case","success");

        setTimeout(() => {
            props.alert(null);
        }, 1500);
    }

    function onClickLower(event){
        let upTxt = txt.toLowerCase();
        setTxt(upTxt);

        props.showAlert("Text Converted to lower case","success");

        setTimeout(() => {
            props.alert(null);
        }, 1500);
    }

    function onChange(event){
        let txt = document.getElementById('textArea');
        setTxt(txt.value);
    }

    function functionOnclear(){
        setTxt('');

        props.showAlert("cleared text area","warning");

        setTimeout(() => {
            props.alert(null);
        }, 1500);
    }

    return (
        <>
            <div className="container-fluid" style={{color:props.mode==='light'?'black':"white"}}>
                <div className="mb-1">
                    <br/>
                    <h2 style={color}> Write text below</h2>
                    <textarea className="form-control border border-3" id="textArea" rows="5" onChange={onChange} value={txt} style={txtAreaStyle}></textarea>
                    <button type="submit" htmlFor="textArea" className="btn btn-primary mb-3 my-3 " onClick={onClickUpper}>To Upper</button>
                    <button type="submit" htmlFor="textArea" className="btn btn-primary mb-3 my-3 mx-3 " onClick={onClickLower}>To Lower</button>
                    <button type="submit" htmlFor="textArea" className="btn btn-danger px-4 mb-3 my-3 mx-1 " onClick={functionOnclear}>clear</button>
                </div>

                <div className="mb-1 my-2">
                    <h2 style={color}>Text Summery</h2>
                    <p>{word()} words and {txt.length} characters.</p>
                </div>

                <div className="mb-1 my-4">
                    <h2 style={color}>Preview</h2>
                    <p>{txt.toLowerCase()}</p>
                </div>
            </div>
        </>
    );
}

export default Txtbar;