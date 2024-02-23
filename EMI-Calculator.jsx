import { useState, useEffect } from "react";

export function EMI_Calculator(){

    const [amountValue , setAmountValue] = useState(50000)
    const [forYear , setForYear] = useState(1)
    const [interest , setInterest] = useState(10.5)
    const [EMI , setEMI] = useState(0)

    function HandleAmount(e){
        const amountValues = e.target.value  
        setAmountValue(amountValues.toLocaleString('en-US', { style: 'currency', currency: 'INR' }))
    }
    function HandleYear(e){
        setForYear(e.target.value)
    }
    function HandleIntrest(e){
        setInterest(e.target.value)
    }
    function CalculateEMI(){
        var p = amountValue       
        var r =  interest  /1200   ;
        var n =  forYear *12     ;
           // var result =  P * R * Math.pow(1+R,N)/Math.pow(1+ R,N) -1 ;
            var result = p * r * Math.pow(1+r,n) / Math.pow(1+r,n) - 1;
            setEMI(result) 
        }
    

  

    return(
        <div className="container-fluid d-flex justify-content-center m-3 p-3  ">        
            <div className="border border-4 m-2 p-2 " style={{height:'400px', width:'1100px'}} >
            <h1 className="bg-secondary text-white text-center">Loan EMI Calculator</h1><br/>
                <div className="row">
                    
                    <div className="col-4 mt-4">                       
                    Amount you need <input type="text" name="" size='8' maxLength='7' id="" value={amountValue} /> <br/>
                    &#8377;50,000  <input type="range" className="" min='500000' step='1' max='4000000'  onChange={HandleAmount} /> &#8377;40,00,000
                    </div>

                    <div className="col-4 mt-4">                       
                       for <input type="text" name="" size='1' maxLength='1' id="" value={forYear} /> years<br/>
                     1 year<input type='range' className="" min='1' step='1' max='5' onChange={HandleYear} /> 5 year
                    </div>

                    <div className="col-4 mt-4">                       
                    Interest rate <input type="text" name="" size='2' maxLength='2' id="" value={interest} />% <br/>
                    10.5%  <input type='range' className="" min='10.5' step='0.01' max='21' onChange={HandleIntrest} />21%
                    </div>

                </div>
              
                  <div className=" text-end mt-lg-5 " >
                  <button className="btn btn-primary " onClick={CalculateEMI}>Calculate</button>
                  </div>

                  <div className=" bg-secondary text-dark p-2 mt-3">
                    <span style={{fontSize:'20px'}}>Your Monthly EMI will be <span style={{fontSize:'30px '}}>{Math.round(EMI).toLocaleString('en-US', { style: 'currency', currency: 'INR' })}</span> for  {forYear*12}month</span> &nbsp; <a style={{font:'large'}} className=" text-info text-decoration-none" href="#">Apply for a Personal Loan</a> 
                  </div>
               
            </div>
        </div>
    )
}