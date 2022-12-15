document.addEventListener('DOMContentLoaded', async () => {
    
    const stripe = Stripe('pk_test_51MBV77SE28PiHOlHvvDN0uFEkZw2XISQJTqNy3vLhjZWucRTqqG0jzevr1qsV2yeQxnATKHGcRWdRv8GQKHScdEH00ohkD1IMi'
    , {
      apiVersion: "2022-11-15",
     // stripeAccount: 'CONNECTED_STRIPE_ACCOUNT_ID',
    });
   
    // 2. Create a payment request object
    var paymentRequest = stripe.paymentRequest({
      country: 'IN',
      currency: 'inr',
      total: {
        label: 'Demo total',
        amount: 100,
      },
      requestPayerName: true,
      requestPayerEmail: true,
    });
  
    // 3. Create a PaymentRequestButton element
    const elements = stripe.elements();
    const prButton = elements.create('paymentRequestButton', {
      paymentRequest: paymentRequest,
    });
  
    // Check the availability of the Payment Request API,
    // then mount the PaymentRequestButton
    console.log("paymentRequest",paymentRequest,'<<<prButton',prButton)
    paymentRequest.canMakePayment().then(function (result) {
      console.log("result1",result)
      if (result) {
        prButton.mount('#payment-request-button');
        // addMessage("Hjndnvdkvn")
      } else {
        document.getElementById('payment-request-button').style.display = 'none';
        addMessage('Google Pay support not found. Check the pre-requisites above and ensure you are testing in a supported browser.');
      }
    });
  
    paymentRequest.on('paymentmethod', async (e) => {
      // Make a call to the server to create a new
      // payment intent and store its client_secret.
console.log("eeeeeeeeeeeee",e)
      const {error: backendError, clientSecret} = await fetch(
        '/create-payment-intent',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            
          },
          body: JSON.stringify({
            currency: 'inr',
            paymentMethodType: 'card',
          }),
        }
      ).then((r) =>{console.log('r',r); return r.json()} );
  
      if (backendError) {
        addMessage(backendError.message);
        e.complete('fail');
        return;
      }
  
      addMessage(`Client secret returned.`);
  
      // Confirm the PaymentIntent without handling potential next actions (yet).
      let {error, paymentIntent} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: e.paymentMethod.id,
        },
        {
          handleActions: false,
        }
      );
  console.log("e2e2>>>",e)
      if (error) {
        addMessage(error.message);
  
        // Report to the browser that the payment failed, prompting it to
        // re-show the payment interface, or show an error message and close
        // the payment interface.
        e.complete('fail');
        return;
      }
      // Report to the browser that the confirmation was successful, prompting
      // it to close the browser payment method collection interface.
      e.complete('success');
  
      // Check if the PaymentIntent requires any actions and if so let Stripe.js
      // handle the flow. If using an API version older than "2019-02-11" instead
      // instead check for: `paymentIntent.status === "requires_source_action"`.
      if (paymentIntent.status === 'requires_action') {
        // Let Stripe.js handle the rest of the payment flow.
        let {error, paymentIntent} = await stripe.confirmCardPayment(
          clientSecret
        );
        if (error) {
          // The payment failed -- ask your customer for a new payment method.
          addMessage(error.message);
          return;
        }
        addMessage(`Payment ${paymentIntent.status}: ${paymentIntent.id}`);
      }
  
      addMessage(`Payment ${paymentIntent.status}: ${paymentIntent.id}`);
    });
  });