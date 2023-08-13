import React from "react";
import '../pages/noEncontrado.css'

const NoEncontrado = () => {
  return (
    <div className="error-container">
      <h1 className="error-title">Server Error</h1>
      <h2 className="error-message">
        We're sorry! The server encountered an internal error and was unable to complete your request.
      </h2>
      <h3 className="error-submessage">Please try again later.</h3>
      <h4 className="error-code">error 500/ 2. 3 .2023 07:23</h4>
      <h5>We apologize for the inconvenience this may have caused. Our technical team is diligently working to resolve this issue and restore the service as soon as possible.

We understand how frustrating it can be to encounter an error on our website at an inconvenient time. We want to assure you that we are taking steps to identify and address the underlying cause of this server error. Your experience is important to us, and we are committed to providing you with a reliable and uninterrupted platform.

In the meantime, we recommend waiting for a while and trying again later. If the issue persists, please don't hesitate to contact our technical support team for further assistance. You can reach out to us via the email address provided on our website or using the available contact channels.

We appreciate your patience and understanding as we work to resolve this issue. We value your participation on our platform and look forward to providing you with a seamless experience in the future. We are dedicated to offering you the best possible service and are doing everything we can to resolve this situation as soon as possible.</h5>
    </div>
  );
}

export default NoEncontrado;