import { nanoid } from "nanoid";
import { calculateInvestmentResults, formatter } from "../../util/investment";

export default function Result({ inputValues }) {
    const initialInvestment = parseFloat(inputValues["initial-investment"]);
    const annualInvestment = parseFloat(inputValues["annual-investment"]);
    const expectedReturn = parseFloat(inputValues["expected-return"]);
    const duration = parseInt(inputValues["duration"]);

    const annualData = calculateInvestmentResults({ initialInvestment, annualInvestment, expectedReturn, duration });

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (year)</th>
                    <th>Total interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {annualData.map((datum) => {
                    const { year, interest, valueEndOfYear, annualInvestment } = datum;
                    const investedCapital = initialInvestment + year * annualInvestment;
                    const totalInterst = valueEndOfYear - investedCapital;

                    console.log(datum);

                    return (
                        <tr key={nanoid()}>
                            <td>{year}</td>
                            <td>{formatter.format(valueEndOfYear)}</td>
                            <td>{formatter.format(interest)}</td>
                            <td>{formatter.format(totalInterst)}</td>
                            <td>{formatter.format(investedCapital)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
