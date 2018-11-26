<!DOCTYPE html>
<html lang="en" >

<head>
  <meta charset="UTF-8">
  <title>Steeve ADMIN Dashboard</title>
  <link rel="stylesheet" href="css/css-bemvindo.css">
</head>

<body>
  <?php 
    $email = $_POST['email']; 
    $password = $_POST['password'];
    if (($email == "176896") AND ($password == "12345")) {
        //$logeado = "Bienvenido ".$email;
        $logeado = $email;
    } else {
        echo "¡Usuario o contraseña incorrectos!";
        echo '<br><a href="'.$_SERVER['HTTP_REFERER'].'">Volver</a>';
    }                        
  ?> 
  <nav class="menu" tabindex="0">
	  <div class="smartphone-menu-trigger"></div>
    <header class="avatar">
	  	<img class="img-steeve" src="img/img-steeve.jpg" />
      <h2>John D.</h2>
    </header>
	  <ul>
      <li tabindex="0" class="icon-dashboard"><span>Dashboard</span></li>
      <li tabindex="0" class="icon-customers"><span>Clientes</span></li>
      <li tabindex="0" class="icon-users"><span>Usuarios</span></li>
      <li tabindex="0" class="icon-settings"><span>Config</span></li>
    </ul>
  </nav>

  <main>
    <div class="helper">
      BIENENIDO A STEEVE ADMIN
  		<!-- <span>Breakpoints on 900px and 400px</span> -->
      <h2><?php echo "$logeado"; ?></h2>
    </div>
  </main>
</body>

</html>
