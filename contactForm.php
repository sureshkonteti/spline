<?php
	$response = array('success' => false);
	$formData = file_get_contents('php://input');
	$data = json_decode( $formData );
	if( $data -> submit ){
		$name = $data -> name;
		$email = $data -> email;
		$phone = $data -> phone;
		$message = $data -> message;

		if($name != '' && $email != '' && $phone != '' && $message != ''){
			$mailTo = 'hr@splineengg.com';
			$subject = 'New Contact form submission';
			$body = 'From: ' . $name . "\n";
            $body .= 'Email: ' . $email . "\n";
            $body .= 'Mobile: ' . $phone . "\n";
            $body .= "Message:\n" . $message . "\n\n";

            $success = mail( $mailTo, $subject, $body );

            if($success){
            	$response['success'] = true;
            }
		}
	}

	echo json_encode($response);
?>