<!DOCTYPE html>
<html lang="es" dir="ltr">
<head>
    <?php include_once 'data/web_data.php'; ?>
    <meta charset="utf-8">
    <meta name="author" content="<?= $web_data['author']; ?>">
    <meta name="application-name" content="<?= $web_data['application-name']; ?>">
    <meta name="description" content="<?= $web_data['description']; ?>">
    <meta name="keywords" content="<?= $web_data['keywords']; ?>">
    <title><?= $web_data['title']; ?></title>

    <!-- ESTILOS LOCALES Y CDN -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
    integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
    <link rel="stylesheet" href="dist/colores.css">
    <link rel="favicon" href="dist/favicon.ico">
</head>
<body>
    <h1 id="titulo_colores">Colores</h1>

    <div class="colores" id="colores"></div>

    <!-- FUNCIONALIDAD LOCAL Y CDN -->
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
    crossorigin="anonymous"></script>
    <script src="dist/colores.js"></script>
</body>
</html>
