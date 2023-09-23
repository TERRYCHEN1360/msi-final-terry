import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

function PaymentForm(props) {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Payment method
            </Typography>
            <Grid container spacing={24}>
                <Grid item xs={12} md={6}>
                    <p>Name On Card</p>
                    <TextField required id="cardName" onChange={props.v} fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <p>Card Number</p>
                    <TextField required id="cardNumber" onChange={props.v}  fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <p>Expiry date</p>
                    <TextField required type="date" id="expDate" onChange={props.v}  fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <p>CVV</p>
                    <TextField
                        type="password"
                        required
                        id="cvv"
                        helperText="Last three digits on signature strip"
                        fullWidth
                    />
                </Grid>
                {/*<Grid item xs={12}>*/}
                    {/*<FormControlLabel*/}
                        {/*control={<Checkbox color="secondary" name="saveCard" value="yes" />}*/}
                        {/*label="Remember credit card details for next time"*/}
                    {/*/>*/}
                {/*</Grid>*/}
            </Grid>
        </React.Fragment>
    );
}

export default PaymentForm;