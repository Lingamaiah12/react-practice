

export default function PaymentMethod(){
    return(
        <div className="container mt-4">  
            <div className="">
            <input type="radio" name="pay"/>
            <label>Cash on Delivery</label>
            </div>
            <div>
            <input type="radio" name="pay"/>
            <label>Credit / Debit / ATM Card</label>
            </div>
            <div>
            <input type="radio" name="pay"/>
            <label>Net Banking</label>
            </div>
            <div>
            <input type="radio" name="pay"/>
            <label>Emi</label>
            </div>
            
        </div>
    )
}