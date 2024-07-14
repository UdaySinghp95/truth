import React, { useState } from 'react';
import './truth.css';
import fireApp from '../firebase/db';
import { Firestore, addDoc, collection, getFirestore } from 'firebase/firestore'

function Truth(props) {
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');   
    const [score,setScore] = useState();


    const db = getFirestore(fireApp)
    const ref = collection(db,'truth')

    const fixedValue = (s1, s2) => {
        return s1.toLowerCase().includes('uday') && s2.toLowerCase().includes('lorena')
    }


    const handleCalculate = async() => {
        if (fixedValue(first, second) || fixedValue(second, first)) {
            setScore(98);
        }
        else {
            setScore(Math.random() * 99);
        }

        const data ={
            first,
            second,
        }

        try {
           await addDoc(ref,data);
        } catch (error) {
            console.log(error)
        }
    }

    return (<div>
        <div className="wrapper">
            <div className="heading">
                <h1>Love ♥ Calculator</h1>
                <h4>Get Your Own Love Result Instantly*</h4>
            </div>

            <div className="maincontent">
                <div>
                    <label for="yourname">*Your Name</label><br />
                    <input
                        type="text"
                        id="yourname"
                        placeholder="Enter Your Name"
                        spellcheck="false"
                        maxlength="30"
                        required
                        value={first}
                        onChange={(event) => setFirst(event.target.value)}
                    />
                </div>
                <div>
                    <label for="theirname">*His/Her Name</label><br />
                    <input
                        type="text"
                        id="theirname"
                        placeholder="Enter His/Her Name"
                        spellcheck="false"
                        maxlength="30"
                        required
                        value={second}
                        onChange={(event) => setSecond(event.target.value)}
                    />
                </div>
            </div>
            <button disabled={!first || !second}  onClick={()=>handleCalculate()}>❤ CALCULATE ❤</button>

            {!!score && <div className="result">
                <h2>Result</h2>
                <div className="divider"></div>
                <p id="yourlovescoreis">Your Love Score is</p>
                <h1 id="score">{(Math.floor(score))}%</h1>
                <p id="loveinfo"><b>You</b> and <b>Ds</b> love each other like Soil &amp; Seed. You should take care of your love more! </p>
                <p onClick={()=>setScore(0)} >
                    ↺ Re Calculate
                </p>
            </div>}
        </div>
        <div className="footer">
            {/* <p style="color: #000">
                Made With <span style="color: #ff4136; font-size: 25px">❤</span> By
                <a
                    style="text-decoration: none; font-weight: bold; color: #ff4136"
                    target="_blank"
                    href="https://alnahian2003.github.io"
                >Al Nahian</a
                >
                <br />
                <small>*Fun Purpose Only</small>
            </p> */}
        </div>
    </div>);
}

export default Truth;