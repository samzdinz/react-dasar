function CheckDiscount(props) {

    const {isDiscount} = props;
    if (isDiscount === "yes") {
        return(
            <p>Discount off 60%</p>
        );
    } else if (isDiscount === "coming") {
        return(
            <p>Discount Coming!</p>
        );
    } else {
        return(
            <p>No Discount</p>
        );
    }
}

export default CheckDiscount;