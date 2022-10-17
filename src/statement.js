export default class Statement {

    static printStatement(transactions) {
        console.log("date        || credit  || debit    || balance");
        for (let i = transactions.length - 1; i >= 0; i--) {
            if (transactions[i].credit > 0) {
                console.log(transactions[i].date + "  || " + parseFloat(transactions[i].credit).toFixed(2) + " ||" + "        " + "  || " + parseFloat(transactions[i].balance).toFixed(2))
            } if (transactions[i].debit > 0) {
                console.log(transactions[i].date + "  || " + "      " + "  || " + parseFloat(transactions[i].debit).toFixed(2) + "   || " + parseFloat(transactions[i].balance).toFixed(2))
            };

        };
    };
}
