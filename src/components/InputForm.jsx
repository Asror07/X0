import { useState } from "react"

export default function InputForm({onChange, userInput}){

    return <section id="user-input">
        <div className="input-group">
            <p>
                <label htmlFor="">Initial investment</label>
                <input type="number" required value={userInput.initialInvestment} onChange={(event) => onChange('initialInvestment', event.target.value)} />
            </p>
            <p>
                <label htmlFor="">Annual investment</label>
                <input type="number" required value={userInput.annualInvestment} onChange={(event) => onChange('annualInvestment', event.target.value)} />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label htmlFor="">Expected return</label>
                <input type="number" required value={userInput.expectedReturn} onChange={(event) => onChange('expectedReturn', event.target.value)} />
            </p>
            <p>
                <label htmlFor="">Duration</label>
                <input type="number" required value={userInput.duration} onChange={(event) => onChange('duration', event.target.value)} />
            </p>
        </div>
    </section>
}