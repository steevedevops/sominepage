<html>  
<head>  
<title>Sumar.</title>  
<link rel="stylesheet" href="css/css-bemvindo.css">
</head>  

<body>  
    <div class="contenedor">
        <?php 
            $email = $_POST['email']; 
            $password = $_POST['password']; 

            if (($email == "176896") AND ($password == "12345")) {
                $logeado = "Bienvenido ".$email;
            } else {
                echo "¡Usuario o contraseña incorrectos!";
                echo '<br><a href="'.$_SERVER['HTTP_REFERER'].'">Volver</a>';
            }                        
        ?> 
        <header class="header">
            <h1 class='mensagem'><?php echo "$logeado"; ?></h1>

            <a class="btn-sair" href="home.html">Sair</a>
        </header>        
        <section>
            <article>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam laudantium dicta soluta, modi illo expedita vero, consequuntur blanditiis eligendi voluptas placeat enim laboriosam id nisi perferendis atque, recusandae officiis cumque! </p>
            </article>
        </section>
    </div>
</body> 
</html>