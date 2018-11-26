<?php 
    $email = $_POST['email']; 
    $password = $_POST['password'];

    if (($email == "176896") AND ($password == "1234")){
        $logeado = "Steeve PyProgramer";
        $foto = "img/img-steeve.jpg";  
        $nameuser = "Steeve Bernard B.";
    }elseif(($email == "steeve") AND ($password == "steeve")){
        $logeado = "Steeve PyProgramer";
        $foto = "img/img-steeve.jpg";  
        $nameuser = "Steeve Bernard B.";
    }elseif(($email == "admin") AND ($password == "123")){
        $logeado = $email;        
        $foto = "img/img-admin.jpg";  
        $nameuser = "Administrador";
    }elseif(($email == "ana") AND ($password == "123")){
        $logeado = "Ana Carolina Bertoletti";
        $foto = "img/img-ana.jpg";
        $nameuser = "Ana Carolina B.";
    }else {
        header("location:erro.html");
    }                        
  ?> 
<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Steeve ADMIN Dashboard</title>
  <link rel="stylesheet" href="css/css-bemvindo.css">
</head>
<body>
  <nav class="menu" tabindex="0">
	  <div class="smartphone-menu-trigger"></div>
    <header class="avatar">
	  	<img class="img-steeve" src=<?php echo "$foto"; ?> />
      <h2><?php echo "$nameuser"; ?></h2>
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
      <span><?php echo "$logeado"; ?></span>
      <a class="btn-sair" href="login.html">Sair</a>
    </div>
  </main>
</body>
</html>
