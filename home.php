<html>  
<head>  
<title>Sumar.</title>  
<link rel="stylesheet" href="stylo.css">
</head>  

<body>  
    <div class="resultado">

<?php 
    $email= $_POST['email']; 
    $password = $_POST['password']; 

    if ($email == '176896' && $password == 'SteeVeArt26') {
        echo 'Yo soy Bueno';
    }else {
        echo 'Yo soy malo';
    }; 
?> 
</div>
</body> 
</html>